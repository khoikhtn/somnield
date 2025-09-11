import { useReadContract, useBalance } from "wagmi"
import { stSTTContract, VaultContract, PTContract, YTContract } from "@contracts"

// Get STT balance
export const useSTTBalance = (walletAddress?: string) => {
  return useBalance({ 
    address: walletAddress as `0x${string}` | undefined,
    query: { enabled: Boolean(walletAddress) },
  })
}

// Get stSTT balance
export const useStSttBalance = (walletAddress?: string) => {
  return useReadContract({
    ...stSTTContract,
    functionName: "balanceOf",
    args: walletAddress ? [walletAddress] : undefined,
    query: { enabled: Boolean(walletAddress) },
  })
}

// Get vault exchange rate
export const useVaultExchangeRate = () => {
  return useReadContract({
    ...VaultContract,
    functionName: "exchangeRate",
  })
}

// Get PTstSTT balance
export const usePTBalance = (walletAddress?: string) => {
  return useReadContract({
    ...PTContract,
    functionName: "balanceOf",
    args: walletAddress ? [walletAddress] : undefined,
    query: { enabled: Boolean(walletAddress) },
  })
}

// Get YTstSTT balance
export const useYTBalance = (walletAddress?: string) => {
  return useReadContract({
    ...YTContract,
    functionName: "balanceOf",
    args: walletAddress ? [walletAddress] : undefined,
    query: { enabled: Boolean(walletAddress) },
  })
}
