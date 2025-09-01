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
          <img src="/real int ad.jpg" alt="" loading="lazy" />
          <img src="/real max ad.jpg" alt="" loading="lazy" />
          <img src="/freight bunny.jpg" alt="" loading="lazy" />
          <img src="/gloryland.jpg" alt="" loading="lazy" />
          <img src="/gdg.jpg" alt="" loading="lazy" />
          <img src="/lacadous.jpg" alt="" loading="lazy" />
          <img src="/morsk.jpg" alt="" loading="lazy" />
          <img src="/shes-deemua.jpg" alt="" loading="lazy" />
          <img src="/kindred spirits.jpg" alt="" loading="lazy" />
          <img src="/neephia stitches.jpg" alt="" loading="lazy" />
        </div>
        <br /> <br />
        <p>Social Media Posts</p>
        <br />
        <div className="social-media-container">
          <img src="/nikee.jpg" alt="" loading="lazy" />
          <img src="/monsta or food 2.jpg" alt="" loading="lazy" />
          <img src="/robot.jpg" alt="" loading="lazy" />
        </div>
        <br />
      </section>

      {/* logos */}
      <section className="logos">
        <br />
        <p>Logo Designs</p>
        <br />
        <div className="logos-container">
          <img src="/eco-flare.jpg" alt="" loading="lazy" />
          <img src="/anhor-point.jpg" alt="" loading="lazy" />
          <img src="/beets.jpg" alt="" loading="lazy" />
          <img src="/fitclad.jpg" alt="" loading="lazy" />
          <img src="/illuminiq.jpg" alt="" loading="lazy" />
          <img src="/konnect-circuit.jpg" alt="" loading="lazy" />
          <img src="/next-pay.jpg" alt="" loading="lazy" />
          <img src="/thunder-forte.jpg" alt="" loading="lazy" />
          <img src="/uplink.jpg" alt="" loading="lazy" />
        </div>
        <br />
      </section>

      {/* brand identity */}
      <section className="brand-designs">
        <br />
        <p>Brand Designs</p>
        <br />
        <div className="brands-container">
          <img src="/real int ad.jpg" alt="" loading="lazy" />
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
            <img src="/solutions.jpg" alt="" loading="lazy" />
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
