import { Container, Portfolio, Stats } from "@components";

const PortfolioStats = () => {
  return (
    <Container className="relative" background="bg-black">
      <div className="flex flex-col xl:flex-row gap-10">
          <Portfolio
            sttPriceUsd={1.2}
          />

          <Stats
            tvl={1200000}
            stakers={5400}
            stSttMarketCap={850000}
            estimatedApr={4.85}
          />

      </div>
    </Container>
  )
}

export default PortfolioStats