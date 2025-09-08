import { network } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

const { ethers } = await network.connect();

async function main() {
  const splitterAddress = process.env.SPLITTER_ADDRESS!;

  if (!splitterAddress) {
    throw new Error("❌ Missing SPLITTER_ADDRESS in .env");
  }

  const Splitter = await ethers.getContractAt("Splitter", splitterAddress);

  const ptAddress = await Splitter.ptToken();
  const ytAddress = await Splitter.ytToken();

  console.log("📜 PT Token Address:", ptAddress);
  console.log("📜 YT Token Address:", ytAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
