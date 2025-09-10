import { Container, GlowBackground } from "@components";

const Deposit = () => {
  return (
    <Container className="relative" background="bg-black">

      {/* <div className="relative">
        <GlowBackground />
      </div> */}

      <div className="flex flex-col gap-5 px-5 py-10 bg-dark-transparent rounded-2xl">
        <h1 className="text-4xl font-saira items-center text-center text-white">
          Level 1: Vault Deposit
        </h1>

        <Container>
          Hello
        </Container>
      </div>
    </Container>
  );
};

export default Deposit;
