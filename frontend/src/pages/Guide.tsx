import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GettingStarted,
  Deposit,
  YieldTokenisation,
  PTStrategy,
  YTStrategy,
  Trading,
} from "@sections";
import { BottomNav } from "@components";

const Guide = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stage = Number(searchParams.get("stage") || 0);

  const [currentStage, setCurrentStage] = useState(stage);

  const goToStage = (newStage: number) => {
    setSearchParams({ stage: String(newStage) });
    setCurrentStage(newStage); // update only after transition
  };

  const steps = [
    <GettingStarted goToStage={goToStage} key="getting-started" />,
    <Deposit key="deposit" />,
    <YieldTokenisation key="yield-tokenisation" />,
    <PTStrategy key="pt-strategy" />,
    <YTStrategy key="yt-strategy" />,
    <Trading key="trading" />,
  ];

  const currentStep = steps[stage] ?? steps[0];

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <motion.div
          key={stage} // triggers re-mount when stage changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {currentStep}
        </motion.div>
      </AnimatePresence>

      <BottomNav stage={stage} totalSteps={steps.length} goToStage={goToStage} />
    </>
  );
};

export default Guide;
