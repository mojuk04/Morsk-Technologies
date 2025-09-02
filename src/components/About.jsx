import React from "react";
import "../styles/about.css";
import about from "/about-min.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-flex-container">
        <div className="about-text">
          <h2>Morsk Technologies</h2>
          <p>
            Morsk Technologies exist to bridge the gap between innovative
            technology and the real life business needs. We are here so your
            businesses don't struggle to adapt to the digital age.
          </p>
          <p>
            Whether you have a new business idea or you have your business
            running already, our services help you make the next best decisions
            for your brand.
          </p>
          <p>
            Our unified team of experts empower your business by providing
            seamless technological solutions through a holistic and integrated
            process.
          </p>
          <p>
            We are not just a vendor, we are your strategic business partner and
            we are dedicated to your success.
          </p>
        </div>
        <div className="about-img">
          <img src={about} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
