# Frontend

This repository contains the **frontend application** for Somnield, the comprehensive yield platform built on Somnia network. The frontend provides an intuitive interface to interact with the **Vault** and **Market** features of the platform.

---

## ⚡ Getting Started

#### 1. Navigate to the frontend directory
```bash
cd frontend
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Run the Development Server
```bash
npm run dev
```
---

## ⚙️ Configuration
Before running the frontend, ensure the following configuration settings are updated:
#### 1. Environment variables
- Create a `.env` file based on the `.env.example` and configure the necessary variables
  ```bash
  VITE_WALLETCONNECT_PROJECT_ID=
  ```

#### 2. Deployed Contracts

- To enable the frontend to interact with the Shannon blockchain, make sure that **all ABIs and contract addresses are properly defined** in the `src/contracts` folder.  
<br>

- You can either redeploy the contracts and manually update the `"address"` field in each corresponding `.json` file.
<br>

- Or use the built-in script `exportABIs.ts` provided in the [contracts module](../contracts/README.md) to automatically export and update them.  
