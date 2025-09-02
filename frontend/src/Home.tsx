import bannerBg from './assets/banner/banner-bg.png'
import Banner from './sections/Banner'
import WhySomnield from './sections/WhySomnield'
import VaultMarket from './sections/VaultMarket'
import Stats from './sections/Stats'
import Trusted from './sections/Trusted'
import Stripe from './sections/Stripe'

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