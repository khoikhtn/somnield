import React from "react";

interface PositionSection {
  title: string;
  [key: string]: string | number;
}

interface PositionBoxProps {
  data: PositionSection[];
}

const PositionBox: React.FC<PositionBoxProps> = ({ data }) => {
  return (
    <div className="grid gap-6">
      {data.map((section, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 shadow-lg hover:shadow-purple-500/10 transition"
        >
          {/* Title */}
          <h2 className="text-xl font-semibold text-white/80 mb-4">
            {section.title}
          </h2>

          {/* Key-Value Pairs */}
          <div className="space-y-3">
            {Object.entries(section).map(([key, value]) => {
              if (key === "title") return null;
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default PositionBox;
