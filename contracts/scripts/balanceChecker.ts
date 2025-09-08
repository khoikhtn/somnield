import { network } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

const { ethers } = await network.connect();

async function main() {
  const vaultAddress = process.env.VAULT_ADDRESS!;
  const splitterAddress = process.env.SPLITTER_ADDRESS!;

  if (!vaultAddress || !splitterAddress) {
    throw new Error("❌ Missing VAULT_ADDRESS or SPLITTER_ADDRESS in .env");
  }

  const vaultETH = await ethers.provider.getBalance(vaultAddress);
  const splitterETH = await ethers.provider.getBalance(splitterAddress);

  console.log("💰 ETH Balances:");
  console.log("  Vault:", ethers.formatEther(vaultETH), "ETH");
  console.log("  Splitter:", ethers.formatEther(splitterETH), "ETH");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
