import { network } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

const { ethers } = await network.connect();

const vaultAddress = process.env.VAULT_ADDRESS!;
const splitterAddress = process.env.SPLITTER_ADDRESS!;
const vaultAmount = process.env.VAULT_SEND_AMOUNT || "0";
const splitterAmount = process.env.SPLITTER_SEND_AMOUNT || "0";

async function fundContract(name: string, address: string, amount: bigint, deployer: any) {
  console.log(`\nSending ${ethers.formatEther(amount)} STT to ${name}...`);

  const gasEstimate = await ethers.provider.estimateGas({
    to: address,
    value: amount,
    from: deployer.address,
  });
  console.log(`${name} gas estimate:`, gasEstimate.toString());

  const tx = await deployer.sendTransaction({
    to: address,
    value: amount,
    gasLimit: gasEstimate * BigInt(2),
  });
  await tx.wait();

  console.log(`✅ Sent ${ethers.formatEther(amount)} STT to ${name} at ${address}`);
  console.log(`Transaction hash: ${tx.hash}`);
}

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Funding from:", deployer.address);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Deployer balance:", ethers.formatEther(balance), "ETH");

  try {
    // --- Fund Vault if configured ---
    if (vaultAmount && Number(vaultAmount) > 0) {
      const amount = ethers.parseEther(vaultAmount);
      await fundContract("Vault", vaultAddress, amount, deployer);
    } else {
      console.log("⚠️  VAULT_SEND_AMOUNT not set or is 0 — skipping Vault funding.");
    }

    // --- Fund Splitter if configured ---
    if (splitterAmount && Number(splitterAmount) > 0) {
      const amount = ethers.parseEther(splitterAmount);
      await fundContract("Splitter", splitterAddress, amount, deployer);
    } else {
      console.log("⚠️  SPLITTER_SEND_AMOUNT not set or is 0 — skipping Splitter funding.");
    }

  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
