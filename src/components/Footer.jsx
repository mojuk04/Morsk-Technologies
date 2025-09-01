import React from "react";
import "../styles/footer.css";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="footer" id="contact">
      <p>
        Have any questions?
        <br />
        Send us an <a href="mailto:morsktechnologies@gmail.com">email</a> or
        connect with us
      </p>
      <div className="icons-container">
        <a href="https://www.instagram.com/morsktechnologies/">
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://wa.me/qr/3FRVKSGKNSGOJ1">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <i class="fa-brands fa-linkedin"></i>
      </div>
      <div>
        <p className="text-gray-500 text-sm">
          &copy; 2025 Morsk Technologies. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
