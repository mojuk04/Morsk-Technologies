import React from "react";
import "../styles/solutions.css";

const Solutions = () => {
  return (
    <section className="solutions-section">
      <div className="flex-container-solutions">
        <div
          className="solutions-card"
          style={{ backgroundColor: "#383838", color: "#D1D1CF" }}
        >
          <h2>Web Development</h2>
          <p>
            Blog posts, Landing pages <br />
            Responsive web apps <br />
            Shopping and <br />
            E-commerce websites <br />
            Secure - scalable custom websites
          </p>
        </div>
        <div
          className="solutions-card"
          style={{ backgroundColor: "#838383", color: "#212121" }}
        >
          <h2>Graphics Design</h2>
          <p>
            Logos and Flyers <br />
            Business Cards <br />
            Social media Designs <br />
            Brand identities and guidelines <br />
            Web design
          </p>
        </div>
        <div
          className="solutions-card "
          style={{ backgroundColor: "#282828", color: "#d1d1df" }}
        >
          <h2>Data Analysis</h2>
          <p>
            Data visualization <br /> Predictive analytics <br />
            Actionable reports generation
          </p>
        </div>
        <div
          className="solutions-card"
          style={{ backgroundColor: "#212121", color: "#d1d1df" }}
        >
          <h2>Animations and Motion Design</h2>
          <p>
            Texturing <br />
            Rigging <br /> Modelling <br /> Redering <br /> Animation
          </p>
        </div>
        <div
          className="solutions-card"
          style={{ backgroundColor: "#353535", color: "#d1d1df" }}
        >
          <h2>UI/UX Design</h2>
          <p>
            VIsual Design <br /> Usability Testing <br /> Prototyping <br />{" "}
            User Experiience strategy{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
