import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import VaultModule from "./VaultModule.js";

export default buildModule("SplitterModule", (m) => {
  
  // 1. Import from VaultModule
  const { stSTT, vault } = m.useModule(VaultModule);
  
  // 2. Get maturity parameter
  const maturity = m.getParameter("maturity");

  // 3. Deploy Splitter
  const splitter = m.contract("Splitter", [stSTT, vault, maturity]);

  return { splitter, stSTT, vault };

});
