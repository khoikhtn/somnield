import { useState } from "react";
import { useParams } from "react-router-dom";

const Swap = () => {
  const { pair } = useParams<{ pair: string }>();

  // Extract tokens from slug (pt-ststt → ["pt", "ststt"])
  const tokens = pair?.split("-") || [];
  const [fromToken, setFromToken] = useState(tokens[0]?.toUpperCase() || "TOKENA");
  const [toToken, setToToken] = useState(tokens[1]?.toUpperCase() || "TOKENB");

  const [amount, setAmount] = useState<string>("");

  // Dummy exchange rate
  const rate = 1.25;

  const amt = parseFloat(amount);
  const result = !isNaN(amt) && amt > 0 ? amt * rate : 0;

  // Toggle tokens
  const toggleTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
  };

  return (
    <div className="flex-2 flex flex-col font-saira gap-6 p-8 rounded-2xl bg-gray-900/70 border border-gray-800">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-white/80 mb-2">Swap</h2>
      <p className="text-gray-400 text-sm mb-6">
        Swap between {fromToken} and {toToken}.
      </p>

      {/* Input section */}
      <div className="flex flex-col gap-4 relative">
        {/* From */}
        <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col gap-2">
          <span className="text-gray-400 text-sm">You pay</span>
          <div className="flex justify-between items-center">
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              min={0}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 bg-transparent text-white text-lg outline-none font-medium"
            />
            <span className="ml-3 text-white font-semibold">{fromToken}</span>
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={toggleTokens}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
                     bg-teal-500 hover:bg-teal-600 text-white rounded-full p-2 shadow-md"
        >
          <i className="fa-solid fa-arrow-up-long"></i>
          <i className="fa-solid fa-arrow-down-long"></i>
        </button>

        {/* To */}
        <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col gap-2">
          <span className="text-gray-400 text-sm">You receive</span>
          <div className="flex justify-between items-center">
            <span className="text-white text-lg font-semibold">
              {result}
            </span>
            <span className="ml-3 text-white font-semibold">{toToken}</span>
          </div>
        </div>
      </div>

      {/* Action */}
      <button className="mt-4 py-3 rounded-xl text-white font-semibold bg-teal-500 hover:bg-teal-600 transition-colors">
        Swap
      </button>
    </div>
  );
};

export default Swap;
