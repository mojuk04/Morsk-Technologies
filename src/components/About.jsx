import React from "react";
import "../styles/about.css";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <section className="morsk-section">
      <div className="flex-container-about">
        <div className="about-text">
          <h2>Morsk Technologies</h2>
          <p>
            Morsk Technologies exists to empower your business by providing
            seamless technological solutions that drive growth and solve complex
            problems. Morsk Technologies exists to empower your business by
            providing seamless technological solutions that drive growth and
            solve complex problems.
            {/* tyle="height:2px;border-width:0;color:gray;background-color:gray" */}
            <hr
              style={{
                height: "2px",
                width: "100%",
                border: "1px solid #1a1a1a",
                textAlign: "center",
                marginTop: "15px",
              }}
            />
          </p>
          <p>
            A unified team of experts who provide a holistic, integrated
            approach. We are not just a vendor, we are a strategic partner
            dedicated to their success.
            <hr
              style={{
                height: "0.1px",
                width: "100%",
                border: "0.1px solid #1a1a1a",
                textAlign: "center",
                marginTop: "15px",
              }}
            />
          </p>
          <p>
            We envision a future where every business, regardless of size, has
            the technological tools and support to thrive in the digital age.
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
