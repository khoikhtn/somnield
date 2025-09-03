interface StatsProps {
  tvl: number
  stakers: number
  stSttMarketCap: number
  exchangeRate: number
  estimatedApr: number
}

const Stats = ({
  tvl,
  stakers,
  stSttMarketCap,
  exchangeRate,
  estimatedApr,
}: StatsProps) => {
  return (
    <div className="flex-2 flex flex-col font-saira gap-4 p-8 rounded-2xl bg-gray-900/70 border border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-white/80 mb-2">Somnield Stats</h2>
      <p className="text-gray-400 text-sm mb-6">Network and market overview</p>

      {/* Stats List */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-gray-400">TVL</span>
          <span className="text-white font-medium">
            ${tvl.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Number of Stakers</span>
          <span className="text-white font-medium">{stakers.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">stSTT Market Cap</span>
          <span className="text-white font-medium">
            ${stSttMarketCap.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Exchange Rate</span>
          <span className="text-white font-medium">1 stSTT = {exchangeRate.toFixed(2)} STT</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Estimated APR</span>
          <span className="text-emerald-400 font-semibold">
            {estimatedApr.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default Stats
