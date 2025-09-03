import stripe from '@assets/stripe/stripe.png';
import binance from '@assets/stripe/binance.png';
import coinbase from '@assets/stripe/coinbase.png';
import paypal from '@assets/stripe/paypal.png';
import coinmarketcap from '@assets/stripe/coinmarketcap.png';

const Stripe = () => {
  return (
    <div className='bg-black pt-20'>
      <div className="relative overflow-x-hidden overflow-y-hidden stripe-first-padding">
        <div className="w-full h-[102px] bg-blue-custom absolute"></div>
        <div className="w-full bg-aqua-custom transform -rotate-4  py-4 px-45">
            <div className='flex justify-between items-center carousel overflow-hidden'>
              <div className='group'>
                <img src={stripe} alt="" />
                <img src={binance} alt="" className='w-40'/>
                <img src={coinbase} alt="" className='w-40'/>
                <img src={paypal} alt="" className='w-40'/>
                <img src={coinmarketcap} alt="" className='w-45'/>
              </div>
              <div className='group'>
                <img src={stripe} alt="" />
                <img src={binance} alt="" className='w-40'/>
                <img src={coinbase} alt="" className='w-40'/>
                <img src={paypal} alt="" className='w-40'/>
                <img src={coinmarketcap} alt="" className='w-45'/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stripe;
