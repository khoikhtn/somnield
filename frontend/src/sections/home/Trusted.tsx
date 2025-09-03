import { Container } from '@components';

import dovetail from '@assets/trusted/dovetail.png';
import livestorm from '@assets/trusted/livestorm.png';
import linear from '@assets/trusted/linear.png';
import graphy from '@assets/trusted/graphy.png';
import fathom from '@assets/trusted/fathom.png';
import heap from '@assets/trusted/heap.png';
import insided from '@assets/trusted/insided.png';
import planetscale from '@assets/trusted/planetscale.png';

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
    <Container className="py-30" widthClass="w-3/5" background="bg-black">

      <div className="flex flex-col items-center gap-15 bg-dark-custom text-white rounded-2xl px-20 py-15">
        <h2 className="text-3xl lg:text-5xl mb-5 text-center font-saira text-white/80">
          Trusted By Over 100 Partners
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-40 h-20 rounded-lg border border-white/20 bg-black/50 p-4"
            >
              <img src={image.src} alt="" className="max-h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>

    </Container>
  );
};


export default Trusted