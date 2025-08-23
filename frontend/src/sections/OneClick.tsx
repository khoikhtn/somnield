import { useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import CryptoInputRow from "../components/oneclick/CryptoInputRow";
import bitcoin from "../assets/oneclick/bitcoin.png";
import xrp_coin from "../assets/oneclick/xrp_coin.png";
import credit_card from "../assets/oneclick/creditcard.png";

const OneClick = () => {
  const [isBuying, setIsBuying] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleToggle = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsBuying((prev) => !prev);
      setIsFlipping(false);
    }, 250);
  };

  return (
    <Container background="bg-black" className="max-sm:w-full">
      <div className="flex flex-col items-center gap-15 max-sm:gap-8 pt-30 max-sm:pt-0">
        <p className="text-5xl text-center max-md:text-3xl px-5">One click, instant payout with credit or debit card.</p>
        <div className="flex justify-center relative max-sm:w-full px-5 max-sm:justify-end">
          <div className="absolute transform -translate-x-1/3 sm:-translate-y-8 max-sm:-translate-x-3/8">
            <img src={credit_card} alt="" className="max-sm:w-85"/>
          </div>
          <div
            className={`w-[350px]  p-5 bg-crypto-oneclick rounded-4xl flex flex-col gap-5 transition-transform duration-700 ease-in-out ${
              isFlipping ? "rotate-y-180" : "rotate-y-0"
            }`}
          >
            <div className="flex justify-between items-center px-10 py-2 font-semibold cursor-pointer">
              <div
                className={`transition-colors duration-300 ${isBuying ? "text-aqua-custom" : "text-white"}`}
                onClick={handleToggle}
              >
                Buy
              </div>
              <div className="w-[1px] h-full bg-white"></div>
              <div
                className={`transition-colors duration-300 ${!isBuying ? "text-aqua-custom" : "text-white"}`}
                onClick={handleToggle}
              >
                Sell
              </div>
            </div>

            <div className="flex flex-col items-center font-semibold mb-5 max-sm:mb-2">
              <div className="text-2xl max-sm:text-xl">1BTC is roughly</div>
              <div className="text-3xl max-sm:text-2xl">
                53,210 <span className="text-[#92949F]">USD</span>
              </div>
            </div>

            {/* Input Fields */}
            <div className="mb-5 flex flex-col gap-6 max-sm:gap-4">
              <CryptoInputRow placeholder="0.985" initialItem={{ image: bitcoin, coin: "BTC" }} />
              <CryptoInputRow placeholder="0.985" initialItem={{ image: xrp_coin, coin: "XRP" }} />
            </div>

            {/* Buy Now Button */}
            <div className="flex justify-center mb-2">
              <Button text="Buy Now" padding="px-6 py-2" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OneClick;
