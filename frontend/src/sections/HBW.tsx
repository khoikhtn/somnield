import Container from "../components/Container";

const HBW = () => {
  return (
    <Container background="bg-black">
      <div className="flex flex-col justify-center gap-5 sm:gap-15 pt-30 max-sm:pt-10">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          How Blockchain Works?
        </p>
        <video 
          src="https://uiparadox.co.uk/public/templates/deficoin/assets/media/crypto-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full rounded-3xl lg:rounded-4xl h-full object-cover"
        ></video>
      </div>
    </Container>
  )
}

export default HBW;