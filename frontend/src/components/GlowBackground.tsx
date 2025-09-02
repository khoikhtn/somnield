const GlowBackground = () => {
  return (
    <div
      className="absolute max-md:hidden blur-[100px] w-[600px] h-[600px] rounded-full opacity-10 
      bg-gradient-to-r from-[#005ED3] via-[#02EBFD] to-[#02EBFD] 
      blur-extreme animate-glowingCircle"
    />
  );
};

export default GlowBackground;
