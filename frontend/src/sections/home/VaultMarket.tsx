import { Container, GlowBackground, FeatureBox } from "@components";

import vault from "@assets/vaultmarket/vault.png";
import market from "@assets/vaultmarket/market.png";
import { motion } from "framer-motion";

const VaultMarket = () => {
  return (
    <Container className="relative" background="bg-black">
      <GlowBackground />

      <div className="flex flex-col xl:flex-row gap-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FeatureBox
            title="Vault"
            description="Deposit your assets and receive yield-bearing tokens."
            image={vault}
            link="/vault"
            color="border-blue-500 text-blue-500"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <FeatureBox
            title="Market"
            description="Unlock liquidity by trading Principal and Yield tokens seamlessly."
            image={market}
            link="/market"
            color="border-purple-500 text-purple-500"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default VaultMarket;
