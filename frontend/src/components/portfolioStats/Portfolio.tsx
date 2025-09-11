import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";
import { useSTTBalance, useStSttBalance, useVaultExchangeRate } from "@hooks/read";
import { useDeposit, useWithdraw } from "@hooks/write";

interface PortfolioProps {
  sttPriceUsd: number;
}

const Portfolio = ({ sttPriceUsd }: PortfolioProps) => {
  // Wallet address
  const { address: walletAddress } = useAccount();
  const shortAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : "Not connected";

  // STT, stSTT balances & Exchange rate
  const { data: sttBalanceData, refetch: refetchSttBalance } = useSTTBalance(walletAddress);
  const { data: stSttBalanceRaw, refetch: refetchStSttBalance } = useStSttBalance(walletAddress);
  const { data: exchangeRateRaw, refetch: refetchExchangeRate } = useVaultExchangeRate();

  // Hooks to detect deposit/withdraw success
  const { isSuccess: isDepositSuccess } = useDeposit();
  const { isSuccess: isWithdrawSuccess } = useWithdraw();

  // Refetch balances when tx succeeds
  useEffect(() => {
    if (isDepositSuccess || isWithdrawSuccess) {
      refetchSttBalance();
      refetchStSttBalance();
      refetchExchangeRate();
    }
  }, [
    isDepositSuccess,
    isWithdrawSuccess,
    refetchSttBalance,
    refetchStSttBalance,
    refetchExchangeRate,
  ]);

  // Parse values
  const sttBalance = Number(sttBalanceData?.formatted ?? 0);
  const stSttBalance = stSttBalanceRaw ? Number(stSttBalanceRaw) / 1e18 : 0;
  const exchangeRate = exchangeRateRaw ? Number(exchangeRateRaw) / 1e18 : 1;

  // Derived values
  const stSttEquivalent = stSttBalance * exchangeRate;
  const totalAssetsStt = sttBalance + stSttEquivalent;
  const totalAssetsUsd = totalAssetsStt * sttPriceUsd;
  const yieldAccrued = stSttEquivalent - stSttBalance;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-3 flex flex-col font-saira gap-6 p-8 rounded-2xl bg-gray-900/70 border border-gray-800"
    >
      {/* Header */}
      <h2 className="text-3xl font-semibold text-white/80 mb-2">Your Portfolio</h2>
      <p className="text-gray-400 text-sm mb-6">Your assets and yield performance</p>

      {/* Wallet Section */}
      <div className="bg-gray-800/60 rounded-xl p-4 flex items-center justify-between">
        <span className="text-gray-400 text-sm">Wallet address</span>
        <span className="text-white font-mono text-sm">{shortAddress}</span>
      </div>

      {/* Balances */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col items-start">
          <span className="text-gray-400 text-sm">STT Balance</span>
          <span className="text-xl text-white">{sttBalance.toLocaleString()} STT</span>
        </div>

        <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col items-start">
          <span className="text-gray-400 text-sm">stSTT Balance</span>
          <span className="text-xl text-white">
            {stSttBalance.toLocaleString()} stSTT{" "}
            <span className="text-gray-400 text-sm">
              (~{stSttEquivalent.toLocaleString()} STT)
            </span>
          </span>
        </div>
      </div>

      {/* Totals */}
      <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col items-start">
        <span className="text-gray-400 text-sm">Total Assets</span>
        <span className="text-xl font-semibold text-white">
          {totalAssetsStt.toLocaleString()} STT{" "}
          <span className="text-gray-400 text-base">(${totalAssetsUsd.toLocaleString()})</span>
        </span>
      </div>

      {/* Yield */}
      <div className="rounded-xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-inner">
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Yield Accrued</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-semibold text-emerald-400">
              {yieldAccrued.toLocaleString()}
            </span>
            <span className="text-base text-gray-500">STT</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
