import Container from "../components/Container"
import Benefit from "../components/whySomnield/Benefit";
import blue_dots from '../assets/whysomnield/blue_dots.png';
import somnia_icon from "../assets/whysomnield/somnia_logo.jpg";
import yield_icon from "../assets/whysomnield/yield_icon.webp";
import security_icon from "../assets/whysomnield/security.png";

const WhySomnield = () => {
  return (
    <Container className="relative" background="bg-black">
      <div className="max-md:hidden blur-[100px] absolute w-[600px] h-[600px] rounded-full opacity-10 
        bg-gradient-to-r from-[#005ED3] via-[#02EBFD] to-[#02EBFD] 
        blur-extreme animate-glowingCircle">
      </div>

      <div className="flex flex-col gap-5 px-5 py-25 lg:flex-row bg-dark-transparent rounded-2xl">
        <div className="flex-1 flex gap-20">
            <div className="flex flex-col gap-10 w-[400px] justify-center ">
              <p className="text-white text-5xl lg:text-7xl text-center leading-snug">Why Somnield?</p>
            </div>
          <img src={blue_dots} alt="" />
        </div>

        <div className="flex-1 flex flex-col gap-9">
          <Benefit image={somnia_icon} name="Fast and Scalable" description="Built on Somnia, the current fastest blockchain in the world with 1M TPS"/>
          <Benefit image={yield_icon} name="Maximize yield" description="Enhance returns by trading Principal and Yield tokens to match your strategy."/>
          <Benefit image={security_icon} name="Secure and Transparent" description="Audited smart contracts and open on-chain data ensure safety and trust."/>
        </div>
      </div>
    </Container>
  )
}

export default WhySomnield;