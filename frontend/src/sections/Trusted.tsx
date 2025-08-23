import Container from '../components/Container';

import dovetail from '../assets/trusted/dovetail.png';
import livestorm from '../assets/trusted/livestorm.png';
import linear from '../assets/trusted/linear.png';
import graphy from '../assets/trusted/graphy.png';
import fathom from '../assets/trusted/fathom.png';
import heap from '../assets/trusted/heap.png';
import insided from '../assets/trusted/insided.png';
import planetscale from '../assets/trusted/planetscale.png';

const images = [
  { src: dovetail },
  { src: livestorm },
  { src: linear },
  { src: graphy },
  { src: fathom },
  { src: heap },
  { src: insided },
  { src: planetscale },
]

const Trusted = () => {
  return (
      <Container className='py-30' background='bg-black'>
        <div className='flex flex-col items-center gap-15 bg-dark-custom text-white rounded-2xl px-4 py-7'>
          <p className='text-3xl lg:text-5xl text-center'>Trusted By Over 1K Companies</p>
          <div className='flex flex-wrap justify-between w-full gap-5 '>
            {images.map(image => (
              <img src={image.src} alt="" />
            ))}
          </div>
        </div>
      </Container>
  )
}

export default Trusted