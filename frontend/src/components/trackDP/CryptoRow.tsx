interface CryptoRowProps {
  image: string;
  coin: string;
  price: string;
}

const CryptoRow = ({image, coin, price}: CryptoRowProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 rounded-xl text-white bg-dark-custom w-full">
      <div className="flex gap-2 items-center">
        <img src={image} alt="" />
        <p>{coin}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default CryptoRow;