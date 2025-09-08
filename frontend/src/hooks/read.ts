import { useReadContract, useBalance } from "wagmi"
import { stSTTContract, VaultContract, PTContract, YTContract } from "@contracts"

// Get STT balance
export const getSTTBalance = (walletAddress?: string) => {
  return useBalance({ 
    address: walletAddress as `0x${string}` | undefined,
    query: { enabled: Boolean(walletAddress) },
  })
}

// Get stSTT balance
export const getStSttBalance = (walletAddress?: string) => {
  return useReadContract({
    ...stSTTContract,
    functionName: "balanceOf",
    args: walletAddress ? [walletAddress] : undefined,
    query: { enabled: Boolean(walletAddress) },
  })
}

// Get vault exchange rate
export const getVaultExchangeRate = () => {
  return useReadContract({
    ...VaultContract,
    functionName: "exchangeRate",
  })
}

// Get PTstSTT balance
export const getPTBalance = (walletAddress?: string) => {
  return useReadContract({
    ...PTContract,
    functionName: "balanceOf",
    args: walletAddress ? [walletAddress] : undefined,
    query: { enabled: Boolean(walletAddress) },
  })
}

// Get PTstSTT balance
export const getYTBalance = (walletAddress?: string) => {
  return useReadContract({
    ...YTContract,
    functionName: "balanceOf",
    args: walletAddress ? [walletAddress] : undefined,
    query: { enabled: Boolean(walletAddress) },
  })
}
