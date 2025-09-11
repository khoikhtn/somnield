import { Container, StageBox, GlowBackground } from "@components";

import mascot_1 from "@assets/guide/gettingStarted/mascot_1.png";
import mascot_2 from "@assets/guide/gettingStarted/mascot_2.png";
import mascot_3 from "@assets/guide/gettingStarted/mascot_3.png";
import mascot_4 from "@assets/guide/gettingStarted/mascot_4.png";
import mascot_5 from "@assets/guide/gettingStarted/mascot_5.png";

const stages = [
  {
    src: mascot_1,
    label: "Vault Deposit",
    desc: "Deposit STT and receive yield-bearing stSTT.",
  },
  {
    src: mascot_2,
    label: "Yield Tokenisation",
    desc: "Turn stSTT into PT and YT for flexibility.",
  },
  {
    src: mascot_3,
    label: "Fix Yield with PT",
    desc: "Lock in a guaranteed return by holding PT until maturity.",
  },
  {
    src: mascot_4,
    label: "Boost Yield with YT",
    desc: "Gain extra upside or hedge exposure by trading YT.",
  },
  {
    src: mascot_5,
    label: "Yield Trading",
    desc: "Mix PT and YT to create custom yield strategies.",
  },
];


interface GettingStartedProps {
  goToStage: (stage: number) => void;
}

const GettingStarted = ({ goToStage }: GettingStartedProps) => {
  return (
    <Container className="relative" background="bg-black">

      <div className="relative">
        <GlowBackground />
      </div>

      <div className="flex flex-col items-center text-center gap-8 py-20 px-5 bg-dark-transparent rounded-2xl">
        <h1 className="text-4xl lg:text-5xl font-saira text-white">
          Maximize your yield with Somnield
        </h1>

        <p className="w-1/2 text-gray-300 text-base">
          Somnield helps you unlock the full potential of your yield. Deposit STT,
          earn yield with stSTT, and explore advanced strategies through Principal
          & Yield Tokens.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {stages.map((item, idx) => (
            <StageBox
              stage={idx + 1}
              name={item.label}
              desc={item.desc}
              src={item.src}
              goToStage={goToStage}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default GettingStarted;
