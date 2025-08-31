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
          <img src="/real int ad.jpg" alt="" />
          <img src="/real max ad.jpg" alt="" />
          <img src="/freight bunny.jpg" alt="" />
          <img src="/gloryland.jpg" alt="" />

          <img src="/gdg.jpg" alt="" />

          <img src="/lacadous.jpg" alt="" />

          <img src="/morsk.jpg" alt="" />

          <img src="/shes-deemua.jpg" alt="" />

          <img src="/kindred spirits.jpg" alt="" />

          <img src="/neephia stitches.jpg" alt="" />
        </div>
        <br /> <br />
        <p>Social Media Posts</p>
        <br />
        <div className="social-media-container">
          <img src="/nikee.jpg" alt="" />
          <img src="/monsta or food.jpg" alt="" />
          <img src="/robot.jpg" alt="" />
        </div>
        <br />
      </section>

      {/* logos */}
      <section className="logos">
        <br />
        <p>Logo Designs</p>
        <br />
        <div className="logos-container">
          <img src="/eco-flare.jpg" alt="" />
          <img src="/anhor-point.jpg" alt="" />
          <img src="/beets.jpg" alt="" />
          <img src="/fitclad.jpg" alt="" />
          <img src="/illuminiq.jpg" alt="" />
          <img src="/konnect-circuit.jpg" alt="" />
          <img src="/next-pay.jpg" alt="" />
          <img src="/thunder-forte.jpg" alt="" />
          <img src="/uplink.jpg" alt="" />
        </div>
        <br />
      </section>

      {/* brand identity */}
      <section className="brand-designs">
        <br />
        <p>Brand Designs</p>
        <br />
        <div className="brands-container">
          <img src="/real int ad.jpg" alt="" />
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
            <img src="/solutions.jpg" alt="" />
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
