import React from "react";
import morsk from ".././assets/morsk.png";
import "../styles/nav.css";
import { Morsk } from "./Morsk";
import About from "./About";
import Solutions from "./Solutions";
import { Contact } from "./Contact";

const Nav = () => {
  return (
    <nav class="nav-container">
      <div className="image">
        <img src={morsk} alt="morsk logo" width="100px" />
      </div>
      <div class="nav-links">
        <div class="nav-item">
          <a href="#" class="nav-link">
            Why Morsk
          </a>
          <div class="hover-content">
            <div class="pop-up-body">
              <Morsk />
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="#" class="nav-link">
            About Morsk
          </a>
          <div class="hover-content">
            <div class="pop-up-body">
              <About />
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="#" class="nav-link">
            Solutions
          </a>
          <div class="hover-content">
            <div class="pop-up-body">
              <Solutions />
            </div>
          </div>
        </div>
        <div class="nav-item">
          <a href="#" class="nav-link">
            Contact
          </a>
          <div class="hover-content">
            <div class="pop-up-body">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      <button>Hire us</button>
    </nav>
  );
};

export default Nav;
