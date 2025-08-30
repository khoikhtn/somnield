import bannerBg from './assets/banner/banner-bg.png'
import Header from './sections/Header'
import Banner from './sections/Banner'
import TrackDP from './sections/TrackDP'
import Trusted from './sections/Trusted'
import BlockchainFirst from './sections/BlockchainFirst'
import OneClick from './sections/OneClick'
import Stripe from './sections/Stripe'
import BlockchainSecond from './sections/BlockchainSecond'
import Media from './sections/Media'
import HBW from './sections/HBW'

const Home = () => {
  return (
    <>
      <div className="bg-[#141516]">
        <div style={{ backgroundImage: `url(${bannerBg})` }} className="bg-cover bg-center">
          <Banner />
        </div>
      </div>
      <TrackDP />
      <Trusted />
      <BlockchainFirst />
      <OneClick />
      <Stripe />
      <BlockchainSecond />
      <Media />
      <HBW />
    </>
  )
}

export default Home