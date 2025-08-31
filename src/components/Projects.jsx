import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <p style={{ fontSize: "2rem" }}> Explore our Projects</p>
      <section className="graphics-design">
        <br />
        <p>Flyers</p>
        <br />
        <div className="flyers-container">
          <img src="src/assets/graphics projects/real int ad.jpg" alt="" />
          <img src="src/assets/graphics projects/real max ad.jpg" alt="" />
          <img src="src/assets/graphics projects/freight bunny.jpg" alt="" />
          <img src="src/assets/graphics projects/gloryland.jpg" alt="" />
          <img src="src/assets/graphics projects/gdg.jpg" alt="" />
          <img src="src/assets/graphics projects/lacadous.jpg" alt="" />
          <img src="src/assets/graphics projects/morsk.jpg" alt="" />
          <img src="src/assets/graphics projects/shes-deemua.jpg" alt="" />
          <img src="src/assets/graphics projects/kindred spirits.jpg" alt="" />
          <img src="src/assets/graphics projects/neephia stitches.jpg" alt="" />
        </div>
        <br /> <br />
        <p>Social Media Posts</p>
        <br />
        <div className="social-media-container">
          <img src="src/assets/graphics projects/nikee.jpg" alt="" />
          <img src="src/assets/graphics projects/monsta or food 2.jpg" alt="" />
          <img src="src/assets/graphics projects/robot.jpg" alt="" />
        </div>
        <br />
      </section>

      {/* logos */}
      <section className="logos">
        <br />
        <p>Logo Designs</p>
        <br />
        <div className="logos-container">
          <img src="src/assets/logos/eco-flare.jpg" alt="" />
          <img src="src/assets/logos/anhor-point.jpg" alt="" />
          <img src="src/assets/logos/beets.jpg" alt="" />
          <img src="src/assets/logos/fitclad.jpg" alt="" />
          <img src="src/assets/logos/illuminiq.jpg" alt="" />
          <img src="src/assets/logos/konnect-circuit.jpg" alt="" />
          <img src="src/assets/logos/next-pay.jpg" alt="" />
          <img src="src/assets/logos/thunder-forte.jpg" alt="" />
          <img src="src/assets/logos/uplink.jpg" alt="" />
        </div>
        <br />
      </section>

      {/* brand identity */}
      <section className="brand-designs">
        <br />
        <p>Brand Designs</p>
        <br />
        <div className="brands-container">
          <img src="src/assets/graphics projects/real int ad.jpg" alt="" />
        </div>
        <br />
      </section>

      {/* websites */}
      <section className="websites">
        <br />
        <p>Websites</p>
        <br />
        <div className="websites-container">
          <div className="website">
            <img src="src/assets/solutions.jpg" alt="" />
            <p>Tenzies Game</p>
          </div>
          <div className="website"></div>
          <div className="website"></div>
          <div className="website"></div>
        </div>
        <br />
      </section>
    </section>
  );
};

export default Projects;
