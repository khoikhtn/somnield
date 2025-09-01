interface BenefitProps {
  image: string;
  name: string;
  description: string;
}

const Benefit = ({ image, name, description }: BenefitProps) => {
  return (
    <div className="flex items-center gap-6 p-6 text-white bg-dark-custom rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Icon */}
      <div className="flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover border border-gray-600" 
        />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-300 leading-snug">{description}</p>
      </div>
    </div>
  )
}

export default Benefit;
