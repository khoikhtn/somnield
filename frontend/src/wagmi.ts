import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, Chain } from '@rainbow-me/rainbowkit';
import {
  sepolia,
} from 'wagmi/chains';

import somnia_logo from "./assets/somnia-logo.jpg";

const shannon = {
  id: 50312,
  name: 'Shannon',
  iconUrl: somnia_logo,
  iconBackground: '',
  nativeCurrency: { name: 'Somnia Test Token', symbol: 'STT', decimals: 18},
  rpcUrls: {
    default: { http: ['https://dream-rpc.somnia.network/'] }
  },
  blockExplorers: {
    default: { name: 'SomScan', url: 'https://somnia-testnet.socialscan.io/' },
  }
} as const satisfies Chain;

const hardhat = {
  id: 31337,
  name: "Hardhat",
  iconUrl: "",
  iconBackground: "",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545/"] },
  },
  blockExplorers: {
    default: { name: "Etherscan (local)", url: "http://127.0.0.1:8545/" },
  },
} as const satisfies Chain;



export const wagmiConfig = getDefaultConfig({
  appName: 'Somnield',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
  chains: [
    shannon,
    hardhat
  ],
})

