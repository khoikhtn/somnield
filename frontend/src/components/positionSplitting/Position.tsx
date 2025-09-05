import { useState } from "react";
import { motion } from "framer-motion";

import PositionData from "./PositionData";

const Position = () => {
  const [activeTab, setActiveTab] = useState<"lp" | "pt" | "yt">("lp");

  const tabs: { key: "lp" | "pt" | "yt"; label: string }[] = [
    { key: "lp", label: "LP Positions" },
    { key: "pt", label: "PT Positions" },
    { key: "yt", label: "YT Positions" },
  ];

  const getData = () => {
    if (activeTab === "lp") return lpPositions;
    if (activeTab === "pt") return ptPositions;
    return ytPositions;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-3 flex flex-col font-saira gap-6 p-8 rounded-2xl bg-gray-900/70 border border-gray-800"
    >
      {/* Header */}
      <h2 className="text-3xl font-semibold text-white/80 mb-2">
        Your Positions
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        View and manage your active positions
      </p>

      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === tab.key
                ? "bg-purple-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <PositionData data={getData()} tab={activeTab} />
    </motion.div>
  );
};

export default Position;

// Mock data
const lpPositions = [
  {
    title: "PT/stSTT Pool",
    Balance: "250 LP Tokens",
    "Share of Pool": "1.25%",
    "Current Value": "$1,200",
    "Fees Earned": "$35",
  },
  {
    title: "YT/stSTT Pool",
    Balance: "120 LP Tokens",
    "Share of Pool": "0.8%",
    "Current Value": "$640",
    "Fees Earned": "$12",
  },
];

const ptPositions = [
  {
    title: "PT Dec-2025",
    Balance: "150 PT",
    maturityDate: "2025-12-31",
    "Entry Price": "0.93 stSTT",
    "Fixed Yield": "7.5% APY",
  },
  {
    title: "PT Jun-2026",
    Balance: "80 PT",
    maturityDate: "2026-06-30",
    "Entry Price": "0.90 stSTT",
    "Fixed Yield": "11.1% APY",
  },
];

const ytPositions = [
  {
    title: "YT Dec-2025",
    Balance: "95 YT",
    maturityDate: "2025-12-31",
    "Implied APY": "6.4%",
    "Unrealized PnL": "+$45",
  },
  {
    title: "YT Jun-2026",
    Balance: "50 YT",
    maturityDate: "2026-06-30",
    "Implied APY": "5.9%",
    "Unrealized PnL": "-$12",
  },
];
