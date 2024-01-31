import { useState } from 'react';
import IconMain from "../../assets/logo512.png";
import "./index.css";

import {ReactComponent as MenuIcon } from '../../assets/menu-svgrepo-com.svg'

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar flex">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="logo">
            <img src={IconMain} alt="Logo" className="logo-img" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <MenuIcon />
          </div>
          <ul className={`menu ${isMobileMenuOpen ? 'open' : 'close'}`}>
            <li>
              <a href="#" className="font-bold text-lg" onClick={() => setMobileMenuOpen(false)}>
                Главная
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-lg" onClick={() => setMobileMenuOpen(false)}>
                Проблема
              </a>
            </li>
            <li>
              <a href="/scans" className="font-bold text-lg" onClick={() => setMobileMenuOpen(false)}>
                Решение
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-lg" onClick={() => setMobileMenuOpen(false)}>
                Команда
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
