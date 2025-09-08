import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { VaultContract, stSTTContract, SplitterContract } from "@contracts"

// Deposit STT
export const useDeposit = () => {
  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const deposit = async (amount: bigint) => {
    return await writeContractAsync({
      ...VaultContract,
      functionName: 'deposit',
      value: amount,
    })
  }

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash })

  return { deposit, hash, error, isPending, isLoading, isSuccess}
}

// Withdraw stSTT
export const useWithdraw = () => {
  const { writeContractAsync, data: hash, error, isPending } = useWriteContract() 

  const withdraw = async (amount: bigint) => {
    return await writeContractAsync({
      ...VaultContract,
      functionName: "withdraw",
      args: [amount],
    })
  }

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash })

  return { withdraw, hash, error, isPending, isLoading, isSuccess }
}

// Approve Splitter to spend user's stSTT
export const useApproveStSTT = () => {
  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const approve = async (amount: bigint) => {
    return await writeContractAsync({
      ...stSTTContract,
      functionName: "approve",
      args: [SplitterContract.address, amount],
    })
  }

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash })

  return { approve, hash, error, isPending, isLoading, isSuccess }
}

// Split stSTT -> PT + YT
export const useSplit = () => {
  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const split = async (amount: bigint) => {
    return await writeContractAsync({
      ...SplitterContract,
      functionName: "split",
      args: [amount],
    })
  }

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash })

  return { split, hash, error, isPending, isLoading, isSuccess }
}

// Recombine PT + YT -> stSTT
export const useRecombine = () => {
  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const recombine = async (amount: bigint) => {
    return await writeContractAsync({
      ...SplitterContract,
      functionName: "recombine",
      args: [amount],
    })
  }

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash })

  return { recombine, hash, error, isPending, isLoading, isSuccess }
}
