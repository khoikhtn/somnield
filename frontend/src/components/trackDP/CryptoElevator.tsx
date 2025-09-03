import CryptoRow from "./CryptoRow";

import eth_coin from "@assets/trackdp/eth_coin.png";
import tether_coin from "@assets/trackdp/tether_coin.png";
import xrp_coin from "@assets/trackdp/xrp_coin.png";
import bitcoin from "@assets/trackdp/bitcoin.png";

const cryptos = [
  { image: eth_coin, coin: "Ethereum (ETH)", price: "$382.00" },
  { image: tether_coin, coin: "Tether (THR)", price: "$382.00" },
  { image: bitcoin, coin: "Bitcoin (BTC)", price: "$382.00" },
  { image: xrp_coin, coin: "XRP Coin", price: "$382.00" }
]

const CryptoElevator = () => {

  return (
    <div className="w-full sm:w-5/8 flex flex-col gap-4">
      {cryptos.map(crypto => (
        <CryptoRow image={crypto.image} coin={crypto.coin} price={crypto.price}/>
      ))}
    </div>
  )
}

export default CryptoElevator