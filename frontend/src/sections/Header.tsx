import Container from "../components/Container";
import Button from "../components/Button";
import NavItem from "../components/header/NavItem";
import logo from '../assets/header/somnield_logo.png';
import hamburger from '../assets/header/hamburger.png';
import { useState } from "react";

const navLinks = [
  { text: "Home", isAqua: true },
  { text: "About Us" },
  { text: "Market" },
  { text: "Blog", subMenu: ["Blog Grid", "Blog Grid Sidebar", "Blog Detail"] },
  { text: "Pages", subMenu: ["FAQ's", "404", "Contact"] },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Container className="max-w-[1700px] text-white">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-50 rounded-full"/>
          </div>

          {/* Navigation Menu */}
          <div className="hidden xl:block">
            <ul className="flex gap-x-6">
              {navLinks.map((item, index) => (
                <NavItem key={index} text={item.text} subMenu={item.subMenu} isAqua={item.isAqua} />
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="flex items-center gap-x-6">
            <Button text="Learn More" hasChevron={true} className="max-md:hidden" padding="px-1.5 py-3.5"/>
            <img className="xl:hidden" src={hamburger} alt="" onClick={() => setIsDrawerOpen(true)}/>
          </div>
        </nav>
      </Container>

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
                subMenu={item.subMenu}
                isDrawer={true}
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