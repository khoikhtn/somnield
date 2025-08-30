import { Outlet } from "react-router-dom";
import Header from "./sections/Header";

const Layout = () => {
  return (
    <div className="bg-[#141516] min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;