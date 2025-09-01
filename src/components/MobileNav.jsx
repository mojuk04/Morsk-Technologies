import React from "react";
import "../styles/mobile-nav.css";

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
        <svg
          className="w-2 h-2 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isMenuOpen ? (
        <section className="mobile-links">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#about-morsk">
              <li>About Morsk</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </section>
      ) : undefined}
    </section>
  );
};
export default MobileNav;
