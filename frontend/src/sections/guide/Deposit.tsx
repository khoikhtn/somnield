import { Container, GlowBackground } from "@components";

import deposit_1 from "@assets/guide/deposit/deposit_1.png";
import deposit_2 from "@assets/guide/deposit/deposit_2.png";

const Deposit = () => {
  return (
    <Container className="relative" background="bg-black">

      <div className="relative">
        <GlowBackground />
      </div>

      <h1 className="text-4xl font-saira items-center text-center text-white mt-5 mb-10">
        Stage 1: Vault Deposit
      </h1>

      <div className="flex flex-col gap-5 px-5 py-5 mb-20 bg-dark-transparent rounded-2xl border border-white/20">
        <Container>
          <p className="text-gray-300 leading-relaxed mb-10">
            Deposit <span className="font-bold text-white">STT</span> into the vault to receive 
            <span className="font-bold text-white"> stSTT</span>, a yield-bearing version of your token. 
            Unlike rebasing tokens, <span className="font-bold text-white">stSTT</span> does not increase 
            in quantity over time. Instead, its value grows internally, reflected through a steadily rising 
            <span className="font-bold text-white"> exchange rate</span>.
          </p>

          <div className="flex justify-center mb-20">
            <img src={deposit_1} className="w-4/5 rounded-lg shadow-lg" />
          </div>

          <p className="text-gray-300 leading-relaxed mb-10">
            When you withdraw, the higher <span className="font-bold text-white">exchange rate </span> 
            ensures you receive <span className="font-bold text-white">more STT</span> than you originally 
            deposited, representing the yield you’ve earned.
          </p>

          <div className="flex justify-center mb-10">
            <img src={deposit_2} className="w-4/5 rounded-lg shadow-lg" />
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default Deposit;
