import { Container } from "@components";
import map from '@assets/blockchainfirst/map.png';

const BlockchainFirst = () => {
  return (
      <Container background='bg-black'>
        <div className='flex gap-10 flex-col lg:flex-row'>
          <div className='flex-1 flex flex-col gap-10 max-sm:gap-5'>
          <p className='text-6xl max-lg:text-5xl max-sm:text-3xl max-sm:w-[85%] max-lg:w-[80%]'>Blockchain spreads Trust everywhere</p>
          <p className='text-sm'>At quisque aliquam placerat massa quisque. Ut ut nunc lorem semper urna sociis ac. Lacus sit tortor tristique semper pellentesque lectus scelerisque euismod. Mauris suspendisse nam justo egestas quam velit dignissim.</p>
          <div className='flex justify-between'>
            <div className='flex flex-col items-center'>
            <span className="bg-gradient-to-r from-[#005ED3] to-[#02EBFD] bg-clip-text text-transparent 
              font-['Plus_Jakarta_Sans'] font-bold leading-[120%] tracking-[-2.1px] 
              text-[clamp(30px,3.594vw,118px)]">
              63M
            </span>

              <p className='text-center'>People Connected</p>
            </div>
            <div className='flex flex-col items-center'>
              <span className="bg-gradient-to-r from-[#005ED3] to-[#02EBFD] bg-clip-text text-transparent 
                font-['Plus_Jakarta_Sans'] font-bold leading-[120%] tracking-[-2.1px] 
                text-[clamp(30px,3.594vw,118px)]">
                11K
              </span>
              <p className='text-center'>Total Accounts</p>
            </div>
            <div className='flex flex-col items-center'>
              <span className="bg-gradient-to-r from-[#005ED3] to-[#02EBFD] bg-clip-text text-transparent 
                font-['Plus_Jakarta_Sans'] font-bold leading-[120%] tracking-[-2.1px] 
                text-[clamp(30px,3.594vw,118px)]">
                24%
              </span>
              <p className='text-center'>Companies use blockchain</p>
            </div>
          </div>
        </div>

        <div className='flex-1 flex justify-center'>
          <img 
            src={map} 
            alt="Map" 
          />
        </div>

      </div>
    </Container>
  )
}

export default BlockchainFirst