import { useState } from "react"
import { Container, GlowBackground } from "@components"

const TransactionBox = () => {
  const [mode, setMode] = useState<"deposit" | "withdraw">("deposit")
  const [amount, setAmount] = useState<string>("")

  const exchangeRate = 1.5 // dummy rate for now

  // calculate output
  const amt = parseFloat(amount)
  const result =
    !isNaN(amt) && amt > 0
      ? mode === "deposit"
        ? amt / exchangeRate
        : amt * exchangeRate
      : 0

  let inputToken = mode === "deposit" ? "STT" : "stSTT"
  let outputToken = mode === "deposit" ? "stSTT" : "STT"

  return (
    <Container className="relative" widthClass="w-[50%]" background="bg-black">
      <div className="flex flex-col gap-5 p-8 mt-10 bg-gray-900/70 rounded-2xl border border-gray-800 font-saira">
      
        <GlowBackground />

        <h2 className="text-3xl font-semibold text-white/80 mb-2 text-center">Make your earnings</h2>
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
          {/* Input amount */}
          <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col gap-2">
            <span className="text-gray-400 text-sm">
              {inputToken} to {mode}
            </span>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              min={0}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 bg-transparent text-white text-lg outline-none font-medium z-1"
            />
          </div>

          {/* Result */}
          <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col gap-2">
            <span className="text-gray-400 text-sm">You will receive</span>
            <span className="text-xl text-white font-semibold">
              {result.toLocaleString()}{" "}
              {outputToken}
            </span>
          </div>
        </div>

        {/* Submit button */}
        <button className="mt-4 py-3 rounded-xl bg-blue-800 text-white font-semibold hover:bg-blue-700 transition-colors z-1">
          Confirm
        </button>
      </div>
    </Container>
  )
}

export default TransactionBox
