import Container from "../components/Container"
import FeatureBox from "../components/vaultMarket/FeatureBox";
import vault from "../assets/vaultmarket/vault.png"
import market from "../assets/vaultmarket/market.png"

const VaultMarket = () => {
  return (
    <Container className="relative" background="bg-black">
      <div className="max-md:hidden blur-[100px] absolute w-[600px] h-[600px] rounded-full opacity-10 
        bg-gradient-to-r from-[#005ED3] via-[#02EBFD] to-[#02EBFD] 
        blur-extreme animate-glowingCircle">
      </div>

      <div className="flex flex-col xl:flex-row gap-10">
        <FeatureBox
          title="Vault"
          description="Deposit your assets and receive yield-bearing tokens."
          image={vault}
          link="/vault"
          color="border-blue-500 text-blue-500"
        />

        <FeatureBox
          title="Market"
          description="Unlock liquidity by trading Principal and Yield tokens seamlessly."
          image={market}
          link="/market"
          color="border-purple-500 text-purple-500"
        />
      </div>
    </Container>
  )
}

export default VaultMarket;