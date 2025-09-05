import React from "react";

interface PositionSection {
  title: string;
  maturityDate?: string; // ISO date string for PT positions
  [key: string]: string | number | undefined;
}

interface PositionDataProps {
  data: PositionSection[];
  tab: "lp" | "pt" | "yt";
}

const PositionData: React.FC<PositionDataProps> = ({ data, tab }) => {
  const now = new Date();

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="grid gap-6">
      {data.map((section, index) => {
        const isMatured =
          tab === "pt" && section.maturityDate
            ? now > new Date(section.maturityDate)
            : false;

        return (
          <div
            key={index}
            className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 shadow-lg hover:shadow-purple-500/10 transition flex flex-col gap-4"
          >
            <h2 className="text-xl font-semibold text-white/80 mb-4">
              {section.title}
            </h2>

            <div className="space-y-3 flex-1">
              {Object.entries(section).map(([key, value]) => {
                if (key === "title" || key === "maturityDate") return null;
                return (
                  <div
                    key={key}
                    className="flex justify-between text-sm border-b border-gray-800/70 pb-2 last:border-0"
                  >
                    <span className="text-gray-400">{key}</span>
                    <span className="text-gray-200 font-medium">{value}</span>
                  </div>
                );
              })}

              {/* Special case for PT: show maturity date */}
              {(tab === "pt" || tab === "yt") && section.maturityDate && (
                <div className="flex justify-between text-sm border-b border-gray-800/70 pb-2 last:border-0">
                  <span className="text-gray-400">Maturity</span>
                  <span className="text-gray-200 font-medium">
                    {formatDate(section.maturityDate)}
                  </span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              {tab === "lp" && (
                <>
                  <button className="flex-1 py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition">
                    Add Liquidity
                  </button>
                  <button className="flex-1 py-2 rounded-lg bg-gray-700 text-gray-300 font-semibold hover:bg-gray-600 transition">
                    Remove
                  </button>
                </>
              )}

              {tab === "pt" && (
                <>
                  <button
                    disabled={!isMatured}
                    className={`flex-1 py-2 rounded-lg font-semibold transition ${
                      isMatured
                        ? "bg-purple-500 text-white hover:bg-purple-600"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Redeem STT
                  </button>
                  <button className="flex-1 py-2 rounded-lg font-semibold bg-teal-500 text-white hover:bg-teal-600 transition">
                    Trade
                  </button>
                </>
              )}

              {tab === "yt" && (
                <>
                  <button className="flex-1 py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition">
                    Claim Yield
                  </button>
                  <button className="flex-1 py-2 rounded-lg font-semibold bg-teal-500 text-white hover:bg-teal-600 transition">
                    Trade
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PositionData;
