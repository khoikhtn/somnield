import Container from "../components/Container"
import CryptoElevator from "../components/trackDP/CryptoElavator";
import UserProfit from "../components/trackDP/UserProfit";
import blue_dots from '../assets/trackdp/blue_dots.png';
import user1 from '../assets/trackdp/user1.png';
import user2 from '../assets/trackdp/user2.png';
import user3 from '../assets/trackdp/user3.png';
import bitcoin from "../assets/trackdp/bitcoin.png";
import xrp_coin from "../assets/trackdp/xrp_coin.png";
import green_line from "../assets/trackdp/green_line.png";
import red_line from "../assets/trackdp/red_line.png";

const TrackDP = () => {
  return (
    <Container className="relative" background="bg-black">
      <div className="max-md:hidden blur-[100px] absolute w-[600px] h-[600px] rounded-full opacity-10 
        bg-gradient-to-r from-[#005ED3] via-[#02EBFD] to-[#02EBFD] 
        blur-extreme animate-glowingCircle">
      </div>

      <div className="flex flex-col gap-5 px-5 py-20 lg:flex-row bg-dark-transparent rounded-2xl mb-10">
        <div className="flex-1 flex gap-20">
          <div className="flex flex-col gap-10">
            <p className="text-white text-5xl lg:text-7xl w-[100px]">Track Digital Payments</p>
            <div className="text-white text-lg">Master your finances. Seamlessly monitor and manage digital payment transactions.</div>
          </div>
          <img src={blue_dots} alt="" />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <UserProfit image={user1} name="John Doe" profit="+$1945.52" profitable={true} />
          <UserProfit image={user2} name="Jane Doe" profit="-$92.45" profitable={false} />
          <UserProfit image={user3} name="John Doe" profit="+$1945.52" profitable={true} />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex-1 flex flex-col px-5 py-10 rounded-2xl bg-dark-transparent gap-10">
          <div className="flex justify-end">
            <CryptoElevator />
          </div>
          <div className="flex flex-col px-5">
            <p className="text-2xl text-white mb-5">Monitor Digital Currencies</p>
            <p className="text-[#92949F] text-lg">Master your finances. Seamlessly monitor and manage digital payment transactions.</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5 px-4 py-10 bg-dark-transparent rounded-2xl">
          <div className="px-5 py-3 bg-dark-custom text-white rounded-2xl flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={bitcoin} alt="" className="mr-5"/>
                <div className="flex flex-col">
                  <p>Bitcoin</p>
                  <p>USD 64,916.63</p>
                </div>
              </div>
              <div>BTC</div>
            </div>
            <div className="flex justify-between items-center">
              <img src={green_line} alt="" className="max-sm:w-50"/>
              <p>3.2%</p>
            </div>
          </div>

          <div className="px-5 py-3 bg-dark-custom text-white rounded-2xl flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={xrp_coin} alt="" className="mr-5"/>
                <div className="flex flex-col">
                  <p>Bitcoin</p>
                  <p>USD 64,916.63</p>
                </div>
              </div>
              <div>ETH</div>
            </div>
            <div className="flex justify-between items-center">
              <img src={red_line} alt="" className="max-sm:w-50"/>
              <p>3.2%</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default TrackDP;