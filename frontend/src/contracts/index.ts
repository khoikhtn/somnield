// contracts/index.ts

import PTJson from "./PT.json"
import YTJson from "./YT.json"
import stSTTJson from "./stSTT.json"
import VaultJson from "./Vault.json"
import SplitterJson from "./Splitter.json"

export const PTContract = {
  address: PTJson.address as `0x${string}`,
  abi: PTJson.abi,
} as const

export const YTContract = {
  address: YTJson.address as `0x${string}`,
  abi: YTJson.abi,
} as const

export const stSTTContract = {
  address: stSTTJson.address as `0x${string}`,
  abi: stSTTJson.abi,
} as const

export const VaultContract = {
  address: VaultJson.address as `0x${string}`,
  abi: VaultJson.abi,
} as const

export const SplitterContract = {
  address: SplitterJson.address as `0x${string}`,
  abi: SplitterJson.abi,
} as const
