import { Link } from "react-router-dom";

interface PoolBoxProps {
  tokenPair: string;
  address: string;
  liquidity: string;
  volume24h: string;
  apy: string;
}

const PoolBox = ({ tokenPair, address, liquidity, volume24h, apy }: PoolBoxProps) => {
  
  const pairSlug = tokenPair
    .replace(/\//g, "-")   
    .replace(/\s+/g, "")   
    .toLowerCase();


  return (
    <Link to={`/pools/${pairSlug}/${address}`} className="block">
      <div className="bg-dark-transparent px-8 py-10 rounded-3xl w-full h-full shadow-md hover:shadow-xl transition border border-white/5 hover:border-cyan-400/30 cursor-pointer">
        {/* Header */}
        <h3 className="text-2xl font-saira text-white mb-6 tracking-wide">
          {tokenPair}
        </h3>

        {/* Info section */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Address</span>
            <span className="text-cyan-400 underline underline-offset-2">
              {address}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Liquidity</span>
            <span className="text-white">{liquidity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">24h Volume</span>
            <span className="text-white">{volume24h}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">APY</span>
            <span className="text-green-500 font-semibold">{apy}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PoolBox;
