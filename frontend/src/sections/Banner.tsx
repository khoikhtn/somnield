import Container from "../components/Container";
import Button from "../components/Button";
import ethereum from '../assets/banner/ethereum.png';
import user1 from '../assets/banner/user1.png';
import user2 from '../assets/banner/user2.png';
import user3 from '../assets/banner/user3.png';
import anna from '../assets/banner/anna.png';
import phone from '../assets/banner/phone.png';

const AnimatedCircle = () => {
  return (
    <div className="relative">
      {/* Larger Circle - Rotating Counterclockwise */}
      <div 
        className="absolute top-1/2 left-1/2 mt-[200px] sm:mt-[500px] xl:mt-[25%]
                   w-[38.448vw] h-[38.448vw] 
                   border-[5px] border-[#02EBFD] border-r-transparent border-l-transparent 
                   rounded-full 
                   opacity-90 
                   animate-spinPulse"
      >
        {/* Before Circle */}
        <div 
          className="absolute w-[clamp(16px,1.302vw,48px)] h-[clamp(16px,1.302vw,48px)] 
                     right-[4.75vw] bottom-[13%] 
                     bg-[#02EBFD] 
                     rounded-full 
                     blur-sm"
        />
        
        {/* After Circle */}
        <div 
          className="absolute w-[clamp(16px,1.302vw,48px)] h-[clamp(16px,1.302vw,48px)] 
                     left-[4.75vw] top-[13%] 
                     bg-[#02EBFD] 
                     rounded-full 
                     blur-sm"
        />
      </div>

      {/* Smaller Circle - Rotating Clockwise */}
      <div 
        className="absolute top-1/2 left-1/2 mt-[200px] sm:mt-[500px] xl:mt-[25%]
                   w-[26.281vw] h-[26.281vw] 
                   border-[3px] border-blue-500 border-r-transparent border-l-transparent 
                   rounded-full 
                   opacity-80 
                   animate-spinPulseReverse"
      >
        {/* Before Circle */}
        <div 
          className="absolute w-[clamp(16px,1.302vw,48px)] h-[clamp(16px,1.302vw,48px)] 
                     right-[3vw] bottom-[12%] 
                     bg-blue-500 
                     rounded-full 
                     blur-sm"
        />
        
        {/* After Circle */}
        <div 
          className="absolute w-[clamp(16px,1.302vw,48px)] h-[clamp(16px,1.302vw,48px)] 
                     left-[3vw] top-[12%] 
                     bg-blue-500 
                     rounded-full 
                     blur-sm"
        />
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <Container className="w-10/11 max-w-[1600px]">
      {/* Circle */}
      <div>
        <AnimatedCircle />
      </div>

      {/* Content */}
      <div className="flex flex-col xl:flex-row justify-between py-[50px] xl:py-[100px]">
        {/* Left Section */}
        <div className="flex-1 hidden sm:flex flex-row xl:flex-col gap-4 p-4 justify-between">
          {/* Ethereum Info */}
          <div className="bg-[#0C0C0D] text-white rounded-lg xl:p-4 flex items-center xl:gap-3 w-full max-w-[180px] xl:max-w-[240px]">
            <img src={ethereum} alt="Ethereum Logo" className="w-8 h-8 mr-2 xl:-translate-y-7"/>
            <div className="flex-1 flex flex-col gap-3">
              <div className="text-lg xl:text-md font-semibold">Ethereum (ETH)</div>
              <div className="text-lg font-bold">$452.00</div>
              <div className="text-sm">+14.24%</div>
            </div>
          </div>

          {/* Crypto People */}
          <div className="bg-[#0C0C0D] text-white rounded-lg p-7 flex flex-col gap-4 w-full max-w-[300px] xl:max-w-[240px] items-center">
            <Button text="Crypto People" padding="px-2 py-3.5"/>
            <div className="text-lg text-center mt-2 mb-3">
              We’ve collaborated with over companies to create
            </div>
            <div className="flex">
              <img 
                src={user1} 
                alt="User 1" 
                className="w-10 h-10 rounded-full object-cover relative z-10" 
              />
              <img 
                src={user2} 
                alt="User 2" 
                className="w-10 h-10 rounded-full object-cover relative -ml-4 z-20" 
              />
              <img 
                src={user3} 
                alt="User 3" 
                className="w-10 h-10 rounded-full object-cover relative -ml-4 z-30" 
              />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-2 p-4 flex flex-col items-center justify-center z-50 xl:py-[70px]">
          <div className="text-white text-center text-3xl md:text-[55px] font-semibold mb-8">A reliable and safe platform for cryptocurrency trading</div>
          <p className="text-white text-center mb-15 font-semibold">
            We’ve collaborated with over 400 companies to create customized blockchain solutions for their businesses, and our growth shows no signs of slowing down.
          </p>
          <Button text="Get Started Today" hasChevron={true} className="mb-20" padding="px-2 py-3.5"/>
          <div className="hidden sm:flex items-center w-5/7 min-w-[500px] px-10 py-4 text-white bg-dark-transparent opacity-90 rounded-3xl border-t border-l border-white">
            <div className="flex-3 flex flex-col gap-5">
              <p className="text-2xl">Crypto & Fintech Specialist</p>
              <p>Personal</p>
            </div>
            <div className="flex-2 flex gap-3">
              <img src={anna} alt="" className="w-12 h-12"/>
              <div className="flex flex-col items-center">
                <p>Anna Alex</p>
                <p>Specialist</p>
              </div>
            </div>
            <div className="flex-1">
              <img src={phone} alt="" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col max-sm:items-center sm:flex-row xl:flex-col mt-10 xl:mt-0 gap-4 p-4 justify-around">
          {/* Ethereum Info */}
          <div className="bg-[#0C0C0D] text-white rounded-lg p-4 flex items-center gap-3 w-full max-w-[270px]">
            <img src={ethereum} alt="Ethereum Logo" className="w-8 h-8 -translate-y-9" />
            <div className="flex-1 flex flex-col gap-2">
              <div className="text-lg xl:text-md font-semibold">Ethereum (ETH)</div>
              <div className="flex justify-between items-center">
                <div className="text-xs xl:text-base text-gray-400">Low</div>
                <div className="text-xs xl:text-base text-gray-400">High</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs xl:text-base text-aqua-custom">$2500.56</div>
                <div className="text-xs xl:text-base text-aqua-custom">$2500.56</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-7 bg-white-custom rounded-full overflow-hidden">
                  <div className="w-4/11 h-full bg-cyan-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Info */}
          <div className="bg-[#0C0C0D] text-white rounded-lg p-4 flex items-center gap-3 w-full max-w-[270px]">
            <img src={phone} alt="" />
            <div className="text-lg">We’ve had to collaborated</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;