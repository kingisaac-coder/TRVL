import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWindowClose, FaTypo3, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              TRVL <FaTypo3 />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaWindowClose className="menu-btn" />
            ) : (
              <FaBars className="menu-btn" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
          </ul>
          {button && <Button ButtonbuttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
