import React from "react";
import "../styles/mobile-nav.css";
import { Morsk } from "./Morsk";
import About from "./About";
import Solutions from "./Solutions";
import { Contact } from "./Contact";

export const MobileNav = () => {
  // mobile hamburger
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="hamburger-menu">
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        <div className={isMenuOpen ? "active" : "inactive"}></div>
        <div className={isMenuOpen ? "active" : "inactive"}></div>
        <div className={isMenuOpen ? "active" : "inactive"}></div>
      </button>

      {isMenuOpen ? (
        <section className="mobile-links">
          {/* <div class="mobile-nav-item"> */}

          <ul>
            <a href="#">
              <li>Why Morsk?</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Solutions</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>

          {/* </div> */}
        </section>
      ) : undefined}
    </section>
  );
};
export default MobileNav;
