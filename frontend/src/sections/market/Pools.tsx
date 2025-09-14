import { Container, GlowBackground, PoolBox } from "@components";

const Pools = () => {
  return (
    <Container className="relative" background="bg-black">
      <div className="relative">
        <GlowBackground />
      </div>

      <div className="flex-col gap-5 px-5 py-10 mt-10 lg:flex-row lg:items-center bg-dark-transparent rounded-2xl">
        <h2 className="text-3xl lg:text-5xl mb-15 leading-snug text-center tracking-widest text-white/80 font-saira">
          POOLS
        </h2>

        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex-1 flex justify-center relative overflow-hidden">
            <div className="w-full mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {pools.map((pool, i) => (
                  <PoolBox
                    key={i}
                    tokenPair={pool.tokenPair}
                    address={pool.address}
                    liquidity={pool.liquidity}
                    volume24h={pool.volume24h}
                    apy={pool.apy}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pools;

// Mock pool data
  const pools = [
    {
      tokenPair: "PT-stSTT / STT",
      address: "0x1234...abcd",
      liquidity: "$45.7M",
      volume24h: "$3.2M",
      apy: "5.4%",
    },
    {
      tokenPair: "PT-stSTT / USDC",
      address: "0xabcd...5678",
      liquidity: "$28.1M",
      volume24h: "$1.8M",
      apy: "4.9%",
    },
    {
      tokenPair: "STT / stSTT",
      address: "0x9876...cdef",
      liquidity: "$12.3M",
      volume24h: "$620K",
      apy: "3.2%",
    },
  ];