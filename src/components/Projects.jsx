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
          <img src="public/real int ad.jpg" alt="" />
          <img src="public/real max ad.jpg" alt="" />
          <img src="public/freight bunny.jpg" alt="" />
          <img src="public/gloryland.jpg" alt="" />

          <img src="public/gdg.jpg" alt="" />

          <img src="public/lacadous.jpg" alt="" />

          <img src="public/morsk.jpg" alt="" />

          <img src="public/shes-deemua.jpg" alt="" />

          <img src="public/kindred spirits.jpg" alt="" />

          <img src="public/neephia stitches.jpg" alt="" />
        </div>
        <br /> <br />
        <p>Social Media Posts</p>
        <br />
        <div className="social-media-container">
          <img src="public/nikee.jpg" alt="" />
          <img src="public/monsta or food.jpg" alt="" />
          <img src="public/robot.jpg" alt="" />
        </div>
        <br />
      </section>

      {/* logos */}
      <section className="logos">
        <br />
        <p>Logo Designs</p>
        <br />
        <div className="logos-container">
          <img src="public/eco-flare.jpg" alt="" />
          <img src="public/anhor-point.jpg" alt="" />
          <img src="public/beets.jpg" alt="" />
          <img src="public/fitclad.jpg" alt="" />
          <img src="public/illuminiq.jpg" alt="" />
          <img src="public/konnect-circuit.jpg" alt="" />
          <img src="public/next-pay.jpg" alt="" />
          <img src="public/thunder-forte.jpg" alt="" />
          <img src="public/uplink.jpg" alt="" />
        </div>
        <br />
      </section>

      {/* brand identity */}
      <section className="brand-designs">
        <br />
        <p>Brand Designs</p>
        <br />
        <div className="brands-container">
          <img src="public/real int ad.jpg" alt="" />
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
            <img src="public/solutions.jpg" alt="" />
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
