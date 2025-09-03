import { Container, Portfolio, Stats } from "@components";

const PortfolioStats = () => {
  return (
    <Container className="relative" background="bg-black">

      {/* <GlowBackground /> */}

      <div className="flex flex-col xl:flex-row gap-10">
          <Portfolio
            sttBalance={1200}
            stSttBalance={800}
            exchangeRate={1.5}
            sttPriceUsd={1.2}
            walletAddress="0x1234567890abcdef1234567890abcdef12345678"
          />

          <Stats
            tvl={1200000}
            stakers={5400}
            stSttMarketCap={850000}
            exchangeRate={1.52}
            estimatedApr={4.85}
          />
      </div>
    </Container>
  )
}

export default PortfolioStats