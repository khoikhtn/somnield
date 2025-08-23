import { useEffect, useState } from "react";
import Container from "../components/Container";

type Blog = {
  brand: string;
  comment: string;
};

const blogs: Blog[] = [
  { brand: "Forbes", comment: "Sed vel tincidunt tristique et fermentum. Crastempor scelerisque at malesuada in dolor massa ut eu. Purus cursus" },
  { brand: "Bloomberg", comment: "“A global authority on financial markets, Bloomberg offers in-depth analysis of business, technology, and market trends.”" },
  { brand: "Business Insider", comment: "“This site provides comprehensive coverage of markets, technology, economy, and innovation..”" },
  { brand: "CNBC", comment: "“Known for its real-time market updates and extensive business news coverage”" },
];

const Media = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [])

  const handleNext = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % blogs.length);
      setAnimate(false);
    }, 300); // Match the transition duration
  };

  const handlePrev = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
      setAnimate(false);
    }, 300);
  };

  return (
    <Container background="bg-black">
      <div className="flex flex-col justify-center gap-5 sm:gap-15 pt-20 max-sm:pt-0">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          What media says about Blockchain?
        </p>
        <div className="flex justify-between items-center max-lg:px-8 max-sm:px-0">
          {/* Left Arrow */}
          <svg
            className="w-8 max-lg:hidden cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            onClick={handlePrev}
          >
            <path d="M47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47C36.7025 47 47 36.7025 47 24Z" stroke="#FAFAFA" strokeWidth="2"></path>
            <path d="M28.6805 12.3195C29.1065 12.7455 29.1065 13.4362 28.6804 13.8623L18.5428 23.9997L28.6805 34.1377C29.1065 34.5637 29.1065 35.2544 28.6804 35.6805C28.2544 36.1065 27.5637 36.1065 27.1377 35.6805L16.2286 24.7711C16.024 24.5665 15.9091 24.2891 15.9091 23.9997C15.9091 23.7104 16.0241 23.4329 16.2287 23.2284L27.1377 12.3196C27.5637 11.8935 28.2545 11.8935 28.6805 12.3195Z" fill="#FAFAFA"></path>
          </svg>

          {/* Content Box with Transition */}
          <div className="flex flex-col items-center bg-blue-custom lg:max-w-[50%] px-10 lg:px-30 py-4 rounded-3xl gap-6">
            <p className={`text-xl sm:text-3xl font-bold transition-opacity duration-300 ${animate ? "opacity-0" : "opacity-100"}`}>
              {blogs[index].brand}
            </p>
            <p className={`text-sm sm:text-lg font-semibold text-center transition-opacity duration-300 ${animate ? "opacity-0" : "opacity-100"}`}>
              {blogs[index].comment}
            </p>
          </div>

          {/* Right Arrow */}
          <svg
            className="w-8 max-lg:hidden cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            onClick={handleNext}
          >
            <path d="M1 24C1 11.2975 11.2975 1 24 1C36.7025 1 47 11.2975 47 24C47 36.7025 36.7025 47 24 47C11.2975 47 1 36.7025 1 24Z" stroke="#FAFAFA" strokeWidth="2"></path>
            <path d="M19.3195 12.3195C18.8935 12.7455 18.8935 13.4362 19.3196 13.8623L29.4572 23.9997L19.3195 34.1377C18.8935 34.5637 18.8935 35.2544 19.3196 35.6805C19.7456 36.1065 20.4363 36.1065 20.8623 35.6805L31.7714 24.7711C31.976 24.5665 32.0909 24.2891 32.0909 23.9997C32.0909 23.7104 31.9759 23.4329 31.7713 23.2284L20.8623 12.3196C20.4363 11.8935 19.7455 11.8935 19.3195 12.3195Z" fill="#FAFAFA"></path>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default Media;
