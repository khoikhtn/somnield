import { Outlet } from "react-router-dom";
import { Header, Footer } from "@sections";

const Layout = () => {
  return (
    <div className="bg-[#141516] min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;