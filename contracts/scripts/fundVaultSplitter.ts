import { network } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

const { ethers } = await network.connect();

const vaultAddress = process.env.VAULT_ADDRESS!;
const splitterAddress = process.env.SPLITTER_ADDRESS!;
const sendAmount = process.env.SEND_AMOUNT || "1";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Funding from:", deployer.address);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Deployer balance:", ethers.formatEther(balance), "ETH");

  const amount = ethers.parseEther(sendAmount);

  try {
    // --- Send to Vault ---
    console.log(`Sending ${ethers.formatEther(amount)} STT to Vault...`);
    const vaultGasEstimate = await ethers.provider.estimateGas({
      to: vaultAddress,
      value: amount,
      from: deployer.address
    });
    console.log("Vault gas estimate:", vaultGasEstimate.toString());

    let tx = await deployer.sendTransaction({
      to: vaultAddress,
      value: amount,
      gasLimit: vaultGasEstimate * BigInt(2)
    });
    await tx.wait();
    console.log(`✅ Sent ${ethers.formatEther(amount)} STT to Vault at ${vaultAddress}`);
    console.log(`Transaction hash: ${tx.hash}`);

    // --- Send to Splitter ---
    console.log(`Sending ${ethers.formatEther(amount)} STT to Splitter...`);
    tx = await deployer.sendTransaction({
      to: splitterAddress,
      value: amount,
      gasLimit: vaultGasEstimate * BigInt(2)
    });
    await tx.wait();
    console.log(`✅ Sent ${ethers.formatEther(amount)} STT to Splitter at ${splitterAddress}`);
    console.log(`Transaction hash: ${tx.hash}`);

  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
