import Container from "../components/Container";
import Button from "../components/Button";

const AnimatedCircle = () => {
  return (
    <div className="relative -translate-y-15">
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
      <div className="hidden xl:block">
        <AnimatedCircle />
      </div>

      {/* Content */}
      <div className="flex flex-col xl:flex-row justify-between py-[50px] xl:py-[90px]">

        {/* Middle Section */}
        <div className="flex-2 p-4 flex flex-col items-center justify-center z-40 xl:py-[70px]">
          <p className="text-center max-w-[800px] text-3xl md:text-[50px] font-saira leading-snug mb-8">The Leading Yield Platform On Somnia Blockchain</p>
          
          <p className="text-center text-gray-300 mb-15">
            Unlock your yield potential on Somnia - the fastest blockchain in the world
          </p>

          <Button text="Get Started" hasChevron={true} className="mb-20" padding="px-2 py-3.5" path="/about"/>
        </div>
      </div>
    </Container>
  );
};

export default Banner;