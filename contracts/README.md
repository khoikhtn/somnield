# Contracts

This folder contains the **smart contracts** for Somnield, the comprehensive yield platform built on the **Somnia network**.  The contracts define the core logic behind the platform, including asset deposits, yield tokenization, and trading mechanisms that power the **Vault** and **Market** features.

---

## 🚀 Deployment

- This project utilized Hardhat Ignition for the deployment process. For further insight, please refer to their official [documentation](https://hardhat.org/ignition/docs/getting-started#overview).

- The project includes 5 contracts to be deployed:
  - stSTT 
  - Vault
  - Splitter
  - PT Token (deployed with Splitter)
  - YT Token (deployed with Splitter)

- For **quick deployments**, run this script:
  ```bash
  npx hardhat ignition deploy ./ignition/modules/SomnieldModule.ts \
  --network shannon \
  --parameters ignition/parameters.json
  ```

- For parameters configuration, make your changes in `parameters.json` file:
  ```bash
  {
    "SomnieldModule": {
      "oracle": <ORACLE_ADDRESS>,
      "maturity": <MATURITY_DATE>
    }
  }
  ```
- For chains configuration, make your changes in `hardhat.config.ts` file.
---

## 🌟 Built-in Scripts

#### 1. Configure Hardhat Keystore Keys
- To deploy and interact with contracts on the **Shannon (Somnia Testnet)**, you need to set your RPC endpoint and private key in Hardhat’s keystore.  

- Run the following commands:  
  ```bash
  npx hardhat keystore set SHANNON_RPC_URL
  npx hardhat keystore set SHANNON_PRIVATE_KEY
  ```

#### 2. Deployment script
- For a quick contract deployment, use the following command:
  ```bash
  npx hardhat ignition deploy ./ignition/modules/SomnieldModule.ts \
  --network shannon \
  --parameters ignition/parameters.json
  ```

#### 3. Retrieve PT and YT Addresses
- To fetch the deployed PT and YT token addresses, run:
  ```bash
  npx hardhat run scripts/getPTYTaddresses.ts --network shannon
  ```

#### 4. Fund Vault and Splitter Contracts
- Both the **Vault** and **Splitter** contracts require STT tokens to process refunds for users. To fund these contracts, run:
  ```bash
  npx hardhat run scripts/fundVaultSplitter.ts --network shannon
  ```

#### 5. Export ABIs and Contract Addresses to the Frontend
- The **Frontend module** requires both ABIs and contract addresses to interact with the blockchain. To streamline this process, you can use the export script instead of updating them manually

- Add your deployed contract addresses to the `.env` file:
  ```bash
  VAULT_ADDRESS=
  SPLITTER_ADDRESS=
  STSTT_ADDRESS=
  PT_ADDRESS=
  YT_ADDRESS=
  ```

- Run the export script:
  ```bash
  npx hardhat run scripts/exportABIs.ts
  ```