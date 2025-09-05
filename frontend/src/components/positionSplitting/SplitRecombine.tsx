import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<TokenOption>({
    image: ststt,
    coin: "stSTT",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: TokenOption) => {
    setSelectedToken(item);
    setIsOpen(false);
  };

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

  const exchangeRate = 1.25; // dummy rate
  const amt = parseFloat(amount);
  const result =
    !isNaN(amt) && amt > 0
      ? mode === "split"
        ? `${amt} PT + ${amt} YT`
        : amt * exchangeRate + " stSTT"
      : mode === "split"
      ? "0 PT + 0 YT"
      : "0 stSTT";

  let inputToken = mode === "split" ? selectedToken.coin : "PT + YT";

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
          onClick={toggleDropdown}
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
                  onClick={() => handleSelect(item)}
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
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-transparent text-white text-lg outline-none font-medium"
          />
        </div>

        {/* Output */}
        <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col gap-2">
          <span className="text-gray-400 text-sm">You will receive</span>
          <span className="text-xl text-white font-semibold">{result}</span>
        </div>
      </div>

      {/* Action */}
      <button className="mt-4 py-3 rounded-xl bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors">
        {mode === "split" ? "Split" : "Recombine"}
      </button>
    </motion.div>
  );
};

export default SplitRecombine;
