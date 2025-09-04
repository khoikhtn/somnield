import { Container, GlowBackground, Benefit } from "@components";
import { motion } from "framer-motion";

import blue_dots from '@assets/whysomnield/blue_dots.png';
import somnia_icon from "@assets/whysomnield/somnia_logo.jpg";
import yield_icon from "@assets/whysomnield/yield_icon.webp";
import security_icon from "@assets/whysomnield/security.png";

const WhySomnield = () => {
  return (
    <Container className="relative" background="bg-black">
      <GlowBackground />

      <div className="flex flex-col gap-5 px-5 py-25 mt-10 lg:flex-row bg-dark-transparent rounded-2xl">
        {/* Left Section */}
        <div className="flex-1 flex gap-20">
          <motion.div
            className="flex flex-col gap-10 w-[400px] justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-5xl lg:text-7xl text-center font-saira leading-snug">
              Why Somnield?
            </p>
          </motion.div>

          {/* Floating Blue Dots */}
          <motion.img
            src={blue_dots}
            alt=""
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </div>

        {/* Right Section - Benefit Cards */}
        <motion.div
          className="flex-1 flex flex-col gap-9"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.8 },
            },
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <Benefit
              image={somnia_icon}
              name="Fast and Scalable"
              description="Built on Somnia, the current fastest blockchain in the world with 1M TPS"
            />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <Benefit
              image={security_icon}
              name="Stable Earnings"
              description="Simply deposit your assets into Vault and lock in a guaranteed yield — no active trading required."
            />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <Benefit
              image={yield_icon}
              name="Maximize yield"
              description="Enhance returns by trading Principal and Yield tokens in Market to match your strategy."
            />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default WhySomnield;
