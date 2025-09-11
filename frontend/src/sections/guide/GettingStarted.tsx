import { Container, StageBox, GlowBackground } from "@components";
import { motion } from "framer-motion";

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

      <motion.div
        className="flex flex-col items-center text-center gap-8 px-5 py-20 mb-10 bg-dark-transparent rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl lg:text-5xl font-saira text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Maximize your yield with Somnield
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="w-1/2 text-gray-300 text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Somnield helps you unlock the full potential of your yield. Deposit STT,
          earn yield with stSTT, and explore advanced strategies through Principal
          & Yield Tokens.
        </motion.p>

        {/* Stage Boxes */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {stages.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <StageBox
                stage={idx + 1}
                name={item.label}
                desc={item.desc}
                src={item.src}
                goToStage={goToStage}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default GettingStarted;
