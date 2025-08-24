import React from "react";
import morsk from "../assets/morsk.png";
import "../styles/nav.css";

const Nav = () => {
  return (
    // <nav>
    // 		<div className="image"><img src={morsk} alt="morsk logo" width="125px" /></div>
    // 		<div className="nav-links">
    // 		<ul className='nav-items'>
    // 			<li><a href="#">Why Morsk?</a></li>
    // 			<li><a href="#">About us</a></li>
    // 			<li><a href="#">Solutions</a></li>
    // 			<li><a href="#">Contact</a></li>
    // 		</ul>
    // 		</div>
    // 		<button>Hire us</button>
    // 		</nav>

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
            <div class="pop-up-body">Why morsk</div>
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
