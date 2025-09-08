import { useState, useRef, useEffect } from "react";
import { useAccount } from "wagmi"
import { motion } from "framer-motion";
import { toast } from "react-hot-toast"

import { getStSttBalance, getPTBalance, getYTBalance } from "@hooks/read"
import { useApproveStSTT, useSplit, useRecombine } from "@hooks/write"
import ststt from "@assets/splitrecombine/ststt.png";

interface TokenOption {
  image: string;
  coin: string;
}

const tokens: TokenOption[] = [
  { image: ststt, coin: "stSTT" },
];

const SplitRecombine = () => {
  const [mode, setMode] = useState<"split" | "recombine">("split");
  const [amount, setAmount] = useState<string>("");
  const { address: walletAddress } = useAccount()

  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<TokenOption>(tokens[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- Hooks for contract write ---
  const { approve, isPending: isApprovePending, isSuccess: isApproveSuccess } = useApproveStSTT()
  const { split, isPending: isSplitPending, isLoading: isSplitLoading, isSuccess: isSplitSuccess } = useSplit()
  const { recombine, isPending: isRecombinePending, isLoading: isRecombineLoading, isSuccess: isRecombineSuccess } = useRecombine()

  // Balances
  const { data: stSTTBalanceRaw, refetch: refetchStSttBalance } = getStSttBalance(walletAddress)
  const stSttBalance = stSTTBalanceRaw ? Number(stSTTBalanceRaw) / 1e18 : 0
  
  const { data: PTBalanceRaw, refetch: refetchPTBalance } = getPTBalance(walletAddress)
  const PTBalance = PTBalanceRaw ? Number(PTBalanceRaw) / 1e18 : 0

  const { data: YTBalanceRaw, refetch: refetchYTBalance } = getYTBalance(walletAddress)
  const YTBalance = YTBalanceRaw ? Number(YTBalanceRaw) / 1e18 : 0

  const maxRecombine = Math.min(PTBalance, YTBalance)
  const maxBalance = mode === "split" ? stSttBalance : maxRecombine

  const inputAmount = parseFloat(amount);

  const isDisabled =
    !amount || isNaN(inputAmount) || inputAmount <= 0 || inputAmount > maxBalance

  // Preview result
  const result =
    !isNaN(inputAmount) && inputAmount > 0
      ? mode === "split"
        ? `${inputAmount} PT + ${inputAmount} YT`
        : `${inputAmount} stSTT`
      : mode === "split"
      ? "0 PT + 0 YT"
      : "0 stSTT";

  let inputToken = mode === "split" ? selectedToken.coin : "PT + YT";

  const handleConfirm = async () => {
    try {
      const amountWei = BigInt(Math.floor(inputAmount * 1e18))

      if (mode === "split") {
        // Approve
        await approve(amountWei)
        toast.loading("Approving stSTT...")

        if (isApproveSuccess) {
          toast.dismiss()
          toast.success("Approval successful")
        }

        // Split
        await split(amountWei)
      } else {
        await recombine(amountWei)
      }
    } catch (err) {
      console.error("Transaction failed:", err)
      toast.error("Transaction failed")
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isSubmitting =
    (mode === "split" && (isSplitPending || isSplitLoading || isApprovePending)) ||
    (mode === "recombine" && (isRecombinePending || isRecombineLoading))

  useEffect(() => {
    if (isSplitSuccess) {
      toast.success("Split successful!")
      refetchStSttBalance()
      refetchPTBalance()
      refetchYTBalance()
      setAmount("")
    }
  }, [isSplitSuccess])

  useEffect(() => {
    if (isRecombineSuccess) {
      toast.success("Recombine successful!")
      refetchStSttBalance()
      refetchPTBalance()
      refetchYTBalance()
      setAmount("")
    }
  }, [isRecombineSuccess])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="flex-2 flex flex-col font-saira gap-4 p-8 rounded-2xl bg-gray-900/70 border border-gray-800"
    >
      {/* Header */}
      <h2 className="text-3xl font-semibold text-white/80 mb-2">
        Split & Recombine
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Convert stSTT into PT & YT, or recombine them back.
      </p>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMode("split")}
          className={`flex-1 py-2 rounded-xl text-center font-medium transition-colors ${
            mode === "split"
              ? "bg-purple-500 text-white"
              : "bg-gray-800/60 text-gray-400 hover:bg-gray-800/80"
          }`}
        >
          Split
        </button>
        <button
          onClick={() => setMode("recombine")}
          className={`flex-1 py-2 rounded-xl text-center font-medium transition-colors ${
            mode === "recombine"
              ? "bg-purple-500 text-white"
              : "bg-gray-800/60 text-gray-400 hover:bg-gray-800/80"
          }`}
        >
          Recombine
        </button>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4">
        {/* Token Selector */}
        <div
          ref={dropdownRef}
          className="bg-gray-800/60 rounded-xl p-4 flex justify-between items-center relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            <img
              src={selectedToken.image}
              alt={selectedToken.coin}
              className="w-8 h-8"
            />
            <span className="text-white text-lg font-medium">
              {selectedToken.coin}
            </span>
          </div>
          <span
            className={`ml-2 inline-block transition-transform duration-300 ${
              isOpen ? "-rotate-180" : "rotate-0"
            }`}
          >
            <i className="fa-solid fa-chevron-down text-gray-400"></i>
          </span>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-10">
              {tokens.map((item) => (
                <div
                  key={item.coin}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-purple-500/20 cursor-pointer"
                  onClick={() => {
                    setSelectedToken(item);
                    setIsOpen(false);
                  }}
                >
                  <img src={item.image} alt={item.coin} className="w-8 h-8" />
                  <span className="text-white font-medium">{item.coin}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col gap-2">
          <span className="text-gray-400 text-sm">
            {inputToken} to {mode}
          </span>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            min={0}
            max={maxBalance}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-transparent text-white text-lg outline-none font-medium"
          />
          <span className="text-gray-500 text-xs">
            Balance: {maxBalance.toLocaleString()} {inputToken}
          </span>
        </div>

        {/* Output */}
        <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col gap-2">
          <span className="text-gray-400 text-sm">You will receive</span>
          <span className="text-xl text-white font-semibold">{result}</span>
        </div>
      </div>

      {/* Action */}
      <button
        disabled={isDisabled || isSubmitting}
        onClick={handleConfirm}
        className={`mt-4 py-3 rounded-xl font-semibold transition-colors ${
          isDisabled
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-purple-500 text-white hover:bg-purple-600"
        }`}
      >
        {isSubmitting ? "Submitting..." : mode === "split" ? "Split" : "Recombine"}
      </button>
    </motion.div>
  );
};

export default SplitRecombine;
