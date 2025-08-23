interface UserProfitProps {
  image: string;
  name: string;
  profit: string;
  profitable: boolean;
}

const UserProfit = ({ image, name, profit, profitable }: UserProfitProps) => {
  return (
    <div className="flex justify-around items-center py-6 text-white bg-dark-custom rounded-2xl">
      <div className="flex items-center">
        <img src={image} alt="" className="w-10 h-10 mr-3"/>
        <div className="flex flex-col">
          <p>{name}</p>
          <p>Received, Nov 10th 10:25 AM</p>
        </div>
      </div>

      <div>
        <span className={`${profitable ? 'text-aqua-custom' : 'text-white'}`}>{profit}</span>
      </div>

      <div>
        <span>USD</span>
      </div>
    </div>
  )
}

export default UserProfit;