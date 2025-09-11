import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import {
  GettingStarted,
  Deposit,
  YieldTokenisation,
  PTStrategy,
  YTStrategy,
} from "@sections";
import { BottomNav } from "@components";

const Guide = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const stage = Number(searchParams.get("stage") || 0);

  const goToStage = (newStage: number) => { 
    setSearchParams({ stage: String(newStage) }); 
  };

  const steps = [
    <GettingStarted goToStage={goToStage} />,
    <Deposit />,
    <YieldTokenisation />,
    <PTStrategy />,
    <YTStrategy />,
  ];

  const currentStep = steps[stage] ?? steps[0];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [stage]);

  return (
    <>
      {currentStep}

      <BottomNav
        stage={stage}
        totalSteps={steps.length}
        goToStage={goToStage}
      />
    </>
  );
};

export default Guide;
