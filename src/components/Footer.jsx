import React from "react";
import "../styles/footer.css";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="footer">
      <p>
        Have any questions?
        <br />
        Send us an <a href="mailto:morsktechnologies@gmail.com">email</a> or
        connect with us on social media
      </p>
      <div>
        <img src={FaInstagram} alt="" />
      </div>
    </section>
  );
};

export default Footer;
