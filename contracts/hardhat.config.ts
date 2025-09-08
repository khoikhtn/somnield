import type { HardhatUserConfig } from "hardhat/config";

import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import hardhatKeystorePlugin from "@nomicfoundation/hardhat-keystore";
import hardhatEthers from "@nomicfoundation/hardhat-ethers"
import { configVariable } from "hardhat/config";

const config: HardhatUserConfig = {
  plugins: [
    hardhatToolboxMochaEthersPlugin,
    hardhatKeystorePlugin,
    hardhatEthers
  ],
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY")],
    },
    shannon: {
      type: "http",
      chainType: "l1",
      url: configVariable("SHANNON_RPC_URL"),
      accounts: [configVariable("SHANNON_PRIVATE_KEY")],
    },
    // Remember to run `npx hardhat keystore set SHANNON_RPC_URL/SHANNON_PRIVATE_KEY` to load the variables into scripts
  },
};

export default config;
