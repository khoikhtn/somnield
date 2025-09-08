import { useReadContract } from "wagmi"
import { stSTTContract, VaultContract } from "@contracts"

// Read stSTT balance
export const getStSttBalance = (walletAddress?: string) => {
  const { data } = useReadContract({
    ...stSTTContract,
    functionName: "balanceOf",
    args: walletAddress ? [walletAddress] : undefined,
    query: { enabled: Boolean(walletAddress) },
  })

  return data
}

// Read vault exchange rate
export const getVaultExchangeRate = () => {
  const { data } = useReadContract({
    ...VaultContract,
    functionName: "exchangeRate",
  })

  return data
}

