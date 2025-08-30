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


export const wagmiConfig = getDefaultConfig({
  appName: 'Somnield',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
  chains: [
    shannon,
    sepolia
  ],
  
})

