import React from "react";
import morsk from "../assets/morsk.png";
import "../styles/nav.css";
import { Morsk } from "./Morsk";

const Nav = () => {
  return (
    <nav class="container">
      <div className="image">
        <img src={morsk} alt="morsk logo" width="100px" />
      </div>
      <div class="nav-links">
        <div class="nav-item">
          <a href="#" class="nav-link">
            Why Morsk?
          </a>
          <div class="hover-content">
            <div class="pop-up-body">
              <Morsk />
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="#" class="nav-link">
            About Us
          </a>
          <div class="hover-content">
            <div class="pop-up-body">About us</div>
          </div>
        </div>

        <div class="nav-item">
          <a href="#" class="nav-link">
            Solutions
          </a>
          <div class="hover-content">
            <div class="pop-up-body">Solutions</div>
          </div>
        </div>
        <div class="nav-item">
          <a href="#" class="nav-link">
            Contact
          </a>
          <div class="hover-content">
            <div class="pop-up-body">contact</div>
          </div>
        </div>
      </div>

      <button>Hire us</button>
    </nav>
  );
};

export default Nav;
