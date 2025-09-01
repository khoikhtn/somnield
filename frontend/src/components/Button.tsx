import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;
  hasChevron?: boolean | false;
  padding?: string;
  className?: string;
  path?: string;
}

const Button = ({ text, hasChevron, padding, className = "", path }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  }

  return (
    <div 
      className={`rounded-3xl bg-white text-black text-sm inline-block cursor-pointer select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`relative rounded-3xl h-full overflow-hidden ${padding}`}>
        <div className="w-full h-full  flex items-center justify-center px-4 z-20">
          {text}
          {hasChevron && <span className="ml-2"><i className='fa-solid fa-chevron-right'></i></span>}
        </div>
        
        <div 
          className={`absolute z-21 left-0 top-0 w-full h-full rounded-3xl bg-blue-custom text-white transition-all duration-300 ease-in-out 
            ${isHovered 
              ? 'translate-y-0' 
              : 'translate-y-full'}`}
        >
          <div className="h-full flex items-center justify-center px-4">
            {text}
            {hasChevron && <span className="ml-2"><i className='fa-solid fa-chevron-right'></i></span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;