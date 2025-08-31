import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("VaultModule", (m) => {
  
  // 1. Deploy stSTT
  const stSTT = m.contract("stSTT", []);

  // 2. Deploy Vault with stSTT + Oracle (Hardhat account #0)
  const oracle = m.getParameter("oracle");
  const vault = m.contract("Vault", [stSTT, oracle]);

  // 3. Set allowed Vault
  m.call(stSTT, "setVault", [vault]);

  return { stSTT, vault };

});
