import { Container, GlowBackground } from "../components";
import StatCard from "../components/stats/StatCard";

const Stats = () => {
  return (
    <Container className="relative" background="bg-black">

      <GlowBackground />

      <div className="flex-col gap-5 px-5 py-20 mt-10 lg:flex-row lg:items-center bg-dark-transparent rounded-2xl">
        <h2 className="text-3xl lg:text-5xl mb-20 leading-snug text-center tracking-widest text-white/80 font-saira">
          SOMNIELD IN FIGURES
        </h2>

        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex-1 flex justify-center relative overflow-hidden">
            <div className="w-3/4 mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <StatCard value={5.37} prefix="$ " suffix=" B" label="Total Value Locked" />
                <StatCard value={26.84} prefix="$ " suffix=" B" label="Trading Volume" />
                <StatCard value={204.98} suffix=" K" label="Total Addresses Interacted" />
                <StatCard value={7.56} prefix="$ " suffix=" B" label="Fixed Yield Settled" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stats;
