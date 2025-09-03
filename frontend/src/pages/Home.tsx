import bannerBg from '@assets/banner/banner-bg.png'
import { Banner, WhySomnield, VaultMarket, Stats, Trusted, Stripe } from '@sections'

const Home = () => {
  return (
    <>
      <div className="bg-[#141516]">
        <div style={{ backgroundImage: `url(${bannerBg})` }} className="bg-cover bg-center">
          <Banner />
        </div>
      </div>
      <WhySomnield />
      <VaultMarket />
      <Stats />
      <Stripe />
      <Trusted />
    </>
  )
}

export default Home