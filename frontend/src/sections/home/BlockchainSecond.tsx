import { Container, Button } from "@components";

const BlockchainFirst = () => {
  return (
    <div className='bg-black text-white pt-20'>
      <Container>
        <div className='flex gap-10 flex-col lg:flex-row'>
          <div className='flex-1 flex flex-col gap-10'>
            <p className='text-6xl max-lg:text-5xl max-sm:text-3xl max-sm:w-[85%] max-lg:w-[80%]'>Blockchain spreads Trust everywhere</p>
            <p className='text-sm'>At quisque aliquam placerat massa quisque. Ut ut nunc lorem semper urna sociis ac. Lacus sit tortor tristique semper pellentesque lectus scelerisque euismod. Mauris suspendisse nam justo egestas quam velit dignissim.</p>
            <div>
              <Button text="Get Started Today" hasChevron={true} padding="px-2 py-3"/> 
            </div>
          </div>

          <div className='flex-1 flex justify-center relative overflow-hidden'>
            <svg className="circle-vector animate-[spin_8s_linear_infinite] absolute blur-lg" width="424" height="414" viewBox="0 0 424 414" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M207.565 52.9563C255.134 49.156 300.586 73.3755 331.025 110.053C362.198 147.613 379.783 197.576 366.552 244.525C353.929 289.317 310.091 313.538 268.025 333.603C226.175 353.566 180.063 371.865 137.329 353.864C92.5026 334.982 60.2927 291.463 53.7536 243.346C47.7622 199.259 78.6498 162.615 106.631 127.98C134.334 93.6895 163.57 56.4712 207.565 52.9563Z" stroke="url(#paint0_linear_11568_7928)" stroke-opacity="0.6" stroke-width="24.9412"></path>
              <defs>
                  <filter id="filter0_f_11568_7928" x="0.528809" y="0.0922852" width="422.954" height="413.584" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_11568_7928"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_11568_7928" x1="145.692" y1="360.364" x2="189.602" y2="28.2662" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#005ED3"></stop>
                      <stop offset="1" stop-color="#02EBFD"></stop>
                  </linearGradient>
              </defs>
            </svg>

            <div className="w-full">
              <div className="flex justify-start max-lg:justify-center max-lg:w-full">
                <div className="bg-dark-transparent px-15 py-8 rounded-3xl flex flex-col items-center max-lg:w-full">
                  <span className="italic bg-gradient-to-r from-[#005ED3] to-[#02EBFD] bg-clip-text text-transparent 
                    font-['Plus_Jakarta_Sans'] font-bold leading-[120%] tracking-[-2.1px] 
                    text-[clamp(30px,3.594vw,50px)]">
                    500M
                  </span>
                  <p className="italic text-xl font-semibold">Users</p>
                </div>
              </div>

              <div className="flex justify-center max-lg:w-full">
                <div className="bg-dark-transparent px-15 py-8 rounded-3xl flex flex-col items-center max-lg:w-full">
                  <span className="italic bg-gradient-to-r from-[#005ED3] to-[#02EBFD] bg-clip-text text-transparent 
                    font-['Plus_Jakarta_Sans'] font-bold leading-[120%] tracking-[-2.1px] 
                    text-[clamp(30px,3.594vw,50px)]">
                    48,158,600
                  </span>
                  <p className="italic text-xl font-semibold">Transactions</p>
                </div>
              </div>

              <div className="flex justify-end max-lg:justify-center max-lg:w-full">
                <div className="bg-dark-transparent px-15 py-8 rounded-3xl flex flex-col items-center max-lg:w-full">
                  <span className="italic bg-gradient-to-r from-[#005ED3] to-[#02EBFD] bg-clip-text text-transparent 
                    font-['Plus_Jakarta_Sans'] font-bold leading-[120%] tracking-[-2.1px] 
                    text-[clamp(30px,3.594vw,50px)]">
                    100+
                  </span>
                  <p className="italic text-xl font-semibold">Countries</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </div>
  )
}

export default BlockchainFirst