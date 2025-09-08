import { useState, useEffect } from "react"
import { useAccount } from "wagmi"
import { Container, GlowBackground } from "@components"
import { getSTTBalance, getStSttBalance, getVaultExchangeRate } from "@hooks/read"
import { useDeposit, useWithdraw } from "@hooks/write"
import { toast } from "react-hot-toast"

const TransactionBox = () => {
  const [mode, setMode] = useState<"deposit" | "withdraw">("deposit")
  const [amount, setAmount] = useState<string>("")
  const { address: walletAddress } = useAccount()

  // --- Hooks for contract write ---
  const { deposit, isPending: isDepositPending, isLoading: isDepositLoading, isSuccess: isDepositSuccess } = useDeposit()
  const { withdraw, isPending: isWithdrawPending, isLoading: isWithdrawLoading, isSuccess: isWithdrawSuccess } = useWithdraw()

  // Exchange rate
  const { data: exchangeRateRaw, refetch: refetchExchangeRate } = getVaultExchangeRate()
  const exchangeRate = exchangeRateRaw ? Number(exchangeRateRaw) / 1e18 : 1

  // STT balance
  const { data: sttBalanceData, refetch: refetchSttBalance } = getSTTBalance(walletAddress)
  const sttBalance = Number(sttBalanceData?.formatted ?? 0)

  // stSTT balance
  const { data: stSTTBalanceRaw, refetch: refetchStSttBalance } = getStSttBalance(walletAddress)
  const stSttBalance = stSTTBalanceRaw
    ? Number(stSTTBalanceRaw) / 1e18
    : 0

  // Max balance
  const maxBalance = mode === "deposit" ? sttBalance : stSttBalance

  // Input parsing & calculation
  const inputAmount = parseFloat(amount)
  const result =
    !isNaN(inputAmount) && inputAmount > 0
      ? mode === "deposit"
        ? inputAmount / exchangeRate
        : inputAmount * exchangeRate
      : 0

  const isDisabled =
    !walletAddress ||
    !amount ||
    inputAmount <= 0 ||
    inputAmount > maxBalance

  let inputToken = mode === "deposit" ? "STT" : "stSTT"
  let outputToken = mode === "deposit" ? "stSTT" : "STT"

  const handleConfirm = async () => {
    try {
      if (mode === "deposit") {
        await deposit(BigInt(Math.floor(inputAmount * 1e18)))
      } else {
        await withdraw(BigInt(Math.floor(inputAmount * 1e18)))
      }
    } catch (err) {
      console.error("Transaction failed:", err)
      toast.error("Transaction failed")
    }
  }

  const isSubmitting =
    (mode === "deposit" && (isDepositPending || isDepositLoading)) ||
    (mode === "withdraw" && (isWithdrawPending || isWithdrawLoading))

  // Refetch balances
  useEffect(() => {
    if (isDepositSuccess) {
      toast.success("Deposit successful!")
      refetchSttBalance()
      refetchStSttBalance()
      refetchExchangeRate()
      setAmount("")
    }
  }, [isDepositSuccess])

  useEffect(() => {
    if (isWithdrawSuccess) {
      toast.success("Withdraw successful!")
      refetchSttBalance()
      refetchStSttBalance()
      refetchExchangeRate()
      setAmount("")
    }
  }, [isWithdrawSuccess])

  return (
    <Container
      className="relative"
      widthClass="w-[50%]"
      background="bg-black"
    >
      <div className="flex flex-col gap-5 p-8 mt-10 bg-gray-900/70 rounded-2xl border border-gray-800 font-saira">
        <GlowBackground />

        <h2 className="text-3xl font-semibold text-white/80 mb-2 text-center">
          Make your earnings
        </h2>
        <p className="text-gray-400 text-sm mb-6 text-center">
          Deposit STT to receive stSTT, or withdraw stSTT back to STT.
        </p>

        {/* Toggle */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setMode("deposit")}
            className={`flex-1 py-2 rounded-xl text-center font-medium transition-colors z-1 ${
              mode === "deposit"
                ? "bg-blue-500 text-white"
                : "bg-gray-800/60 text-gray-400 hover:bg-gray-800/80"
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setMode("withdraw")}
            className={`flex-1 py-2 rounded-xl text-center font-medium transition-colors z-1 ${
              mode === "withdraw"
                ? "bg-blue-500 text-white"
                : "bg-gray-800/60 text-gray-400 hover:bg-gray-800/80"
            }`}
          >
            Withdraw
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
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
              className="flex-1 bg-transparent text-white text-lg outline-none font-medium z-1"
            />
          </div>

          {/* Output */}
          <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col gap-2">
            <span className="text-gray-400 text-sm">You will receive</span>
            <span className="text-xl text-white font-semibold">
              {result.toLocaleString()} {outputToken}
            </span>
          </div>
        </div>

        {/* Confirm button */}
        <button
          disabled={isDisabled || isSubmitting}
          onClick={handleConfirm}
          className={`mt-4 py-3 rounded-xl font-semibold transition-colors z-1 ${
            isDisabled
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-blue-800 text-white hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Confirm"}
        </button>
      </div>
    </Container>
  )
}

export default TransactionBox
