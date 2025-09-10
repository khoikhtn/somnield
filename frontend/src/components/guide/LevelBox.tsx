interface LevelBoxProps {
  level: number;
  name: string;
  desc: string;
  src: string;
  goToLevel?: (level: number) => void;
}

const LevelBox = ({ level, name, desc, src, goToLevel }: LevelBoxProps) => {
  const handleClick = () => {
    goToLevel?.(level);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        text-left
        flex flex-col w-56 min-h-[220px] rounded-lg border border-white/20 
        bg-black/50 p-4 z-10
        transition-all duration-300 ease-out
        hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20
        hover:scale-105 hover:bg-black/70
        active:scale-95
        cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
      "
    >
      {/* Header */}
      <div className="flex items-center font-saira w-full mb-4">
        <div className="text-4xl font-semibold text-blue-400 w-10 text-center">
          {level}
        </div>

        <div className="flex flex-col justify-between ml-1 leading-tight">
          <span className="text-xs uppercase text-gray-400 tracking-wider">
            Level {level}
          </span>
          <span className="text-sm font-semibold text-white tracking-wide">
            {name}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 text-sm font-saira text-gray-300 mb-10">{desc}</div>

      {/* Image */}
      <div className="flex justify-center">
        <img src={src} alt={name} className="max-h-40 object-contain" />
      </div>
    </button>
  );
};

export default LevelBox;
