import { artifacts, network } from "hardhat";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContractInfo {
  name: string;
  envKey: string;
}

async function main() {
  const contracts: ContractInfo[] = [
    { name: "PT", envKey: "PT_ADDRESS" },
    { name: "YT", envKey: "YT_ADDRESS" },
    { name: "Splitter", envKey: "SPLITTER_ADDRESS" },
    { name: "Vault", envKey: "VAULT_ADDRESS" },
    { name: "stSTT", envKey: "STSTT_ADDRESS" },
  ];

  const exportDir = path.join(__dirname, "../../frontend/src/contracts");
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }

  for (const { name, envKey } of contracts) {
    const address = process.env[envKey];
    if (!address) {
      console.warn(`⚠️ Skipping ${name}: missing ${envKey} in .env`);
      continue;
    }

    const artifact = await artifacts.readArtifact(name);

    const data = {
      address,
      abi: artifact.abi,
    };

    const filePath = path.join(exportDir, `${name}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log(`✅ Exported ${name} ABI & address to ${filePath}`);
  }

  console.log(`\n✨ Export complete for network: ${network.connect.name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
