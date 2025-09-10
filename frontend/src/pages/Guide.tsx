import { useSearchParams } from "react-router-dom";
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

  const level = Number(searchParams.get("level") || 0);

  const goToLevel = (newLevel: number) => { 
    setSearchParams({ level: String(newLevel) }); 
  };

  const steps = [
    <GettingStarted goToLevel={goToLevel} />,
    <Deposit />,
    <YieldTokenisation />,
    <PTStrategy />,
    <YTStrategy />,
  ];

  const currentStep = steps[level] ?? steps[0];

  return (
    <>
      {currentStep}

      <BottomNav
        level={level}
        totalSteps={steps.length}
        goToLevel={goToLevel}
      />
    </>
  );
};

export default Guide;
