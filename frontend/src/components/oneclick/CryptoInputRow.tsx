import { useState, useRef, useEffect } from "react";
import bitcoin from "@assets/oneclick/bitcoin.png";
import xrp_coin from "@assets/oneclick/xrp_coin.png";
import eth_coin from "@assets/oneclick/eth_coin.png";
import thr_coin from "@assets/oneclick/tether_coin.png";

interface CryptoInputRowProps {
  placeholder: string;
  initialItem: { image: string; coin: string };
}

const CryptoInputRow = ({ placeholder, initialItem }: CryptoInputRowProps) => {
  const items = [
    { image: bitcoin, coin: 'BTC'},
    { image: xrp_coin, coin: 'XRP'},
    { image: eth_coin, coin: 'ETH'},
    { image: thr_coin, coin: 'THR'}
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialItem);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: { image: string; coin: string }) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex justify-between items-center bg-crypto-oneclick rounded-2xl px-6 py-5 max-sm:px-2">
      <input type="text" placeholder={placeholder} className="w-1/2 text-xl outline-none bg-transparent" />
      <div className="w-[1px] h-full bg-white"></div>
      <div className="flex-1 flex justify-end relative" ref={dropdownRef}>
        <div className="flex items-center gap-2">
          <img src={selectedItem.image} alt="" className="w-9 h-9" />
          <p>{selectedItem.coin}</p>
          <div onClick={toggleDropdown} className="cursor-pointer">
            <span className={`ml-2 inline-block transition-transform duration-300 ${isOpen ? "-rotate-180" : "rotate-0"}`}>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>
        </div>
        <div className={`absolute z-1 top-12 left-10 bg-crypto-dropdown rounded-sm shadow-lg transition-all duration-200 ease-in-out ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          } origin-top`}
        >
          {isOpen &&
            items.map((item) => (
              <div
                key={item.coin}
                className="flex gap-5 items-center px-3 py-2 w-[140px] hover:bg-blue-500 cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <div>
                  <img src={item.image} alt="" className="w-9 h-9" />
                </div>
                <div>{item.coin}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoInputRow;
