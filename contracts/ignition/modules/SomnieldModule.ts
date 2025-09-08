import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SomnieldModule", (m) => {
  // 1. Deploy stSTT
  const stSTT = m.contract("stSTT", []);

  // 2. Deploy Vault with stSTT + Oracle (parameterized)
  const oracle = m.getParameter("oracle");
  const vault = m.contract("Vault", [stSTT, oracle]);

  // 3. Set allowed Vault on stSTT
  m.call(stSTT, "setVault", [vault]);

  // 4. Get maturity parameter
  const maturity = m.getParameter("maturity");

  // 5. Deploy Splitter with stSTT, vault, maturity
  const splitter = m.contract("Splitter", [stSTT, vault, maturity]);

  return { splitter, stSTT, vault };
});
