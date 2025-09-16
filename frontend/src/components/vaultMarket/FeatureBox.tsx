import { Link } from "react-router-dom"

interface FeatureBoxProps {
  title: string
  description: string
  image: string
  link: string
  color: string
}

const FeatureBox = ({ title, description, image, link, color }: FeatureBoxProps) => {
  return (
    <div className="flex-1 flex flex-col items-center text-center px-5 py-20 rounded-2xl bg-dark-transparent border-1 border-gray-500">
      <div className="w-32 h-32 rounded-xl mb-15 flex items-center justify-center border border-white bg-gray-800/50">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 object-contain"
        />
      </div>

      <h2 className={`text-3xl font-asimovian mb-3 uppercase ${color}`}>{title}</h2>

      <p className="text-gray-400 mb-10">{description}</p>

      <Link
        to={link}
        className={`px-6 py-2 z-10 border rounded-lg text-white hover:bg-white hover:border-white hover:text-black transition-colors duration-300 ${color}`}
      >
        Explore {title}
      </Link>
    </div>
  )
}

export default FeatureBox
