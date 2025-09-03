import { useLocation, useNavigate } from "react-router-dom";
import { Container, NavItem } from "@components"
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import logo from '@assets/header/favicon.png';
import hamburger from '@assets/header/hamburger.png';

const navLinks = [
  { text: "HOME", path: '/' },
  { text: "GUIDE", path: '/guide' },
  { text: "VAULT", path: '/vault' },
  { text: "MARKET", path: '/market' },

  // { text: "Blog", subMenu: ["Blog Grid", "Blog Grid Sidebar", "Blog Detail"] },
  // { text: "Pages", subMenu: ["FAQ's", "404", "Contact"] },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    navigate("/");
  }

  return (
    <>
      <Container className="max-w-[1700px] text-white">
        <nav className="grid grid-cols-2 xl:grid-cols-3 items-center">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full -translate-x-5 cursor-pointer"
              onClick={handleClick}
            />
            <span
              className="text-4xl tracking-[0.2em] -translate-y-1 cursor-pointer"
              onClick={handleClick}
            >
              SOMNIELD
            </span>
          </div>

          {/* Center: Nav (only show on xl and above) */}
          <div className="hidden xl:flex justify-center">
            <ul className="flex gap-x-20">
              {navLinks.map((item, index) => (
                <NavItem
                  key={index}
                  text={item.text}
                  subMenu={undefined}
                  isAqua={location.pathname === item.path}
                  path={item.path}
                />
              ))}
            </ul>
          </div>

          {/* Right: Button (always visible, flex-end) */}
          <div className="flex justify-end items-center gap-x-6">
            <img
              className="xl:hidden cursor-pointer"
              src={hamburger}
              alt=""
              onClick={() => setIsDrawerOpen(true)}
            />
            <ConnectButton />
          </div>
        </nav>

      </Container>

      {/* Drawer section */}
      <div
        className={`
          fixed top-0 left-0 w-70 h-full bg-black text-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Drawer logo */}
        <div className="p-4 flex justify-between items-center">
          <img src={logo} alt="" className="h-10"/>
        </div>

        {/* Drawer items */}
        <div>
          <ul className="space-y-4">
            {navLinks.map(item => (
              <NavItem 
                text={item.text}
                subMenu={undefined}
                isDrawer={true}
                path={item.path}
              />
            ))}
          </ul>
        </div>

        {/* Drawer Contact */}
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
              <i className="fa-solid fa-envelope text-white text-sm"></i>
            </div>
            <span>example@company.com</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
              <i className="fa-solid fa-phone text-white text-sm"></i>
            </div>
            <span>+123 (4567) -890</span>
          </div>

          <div className="flex space-x-4 pt-4">
            <i className="fa-solid fa-xmark text-white text-lg cursor-pointer"></i>
            <i className="fa-brands fa-facebook text-white text-lg cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-white text-lg cursor-pointer"></i>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Header;