import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <section className="graphics-design">
        <br />
        <h2>Flyers</h2>
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
        <br />
        <h2>Social Media Posts</h2>
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
        <h2>Logos</h2>
        <br />
        <div className="logos-container">
          <img src="src/assets/graphics projects/real int ad.jpg" alt="" />
        </div>
        <br />
      </section>

      {/* brand identity */}
      <section className="brand-designs">
        <br />
        <h2>Brand Designs</h2>
        <br />
        <div className="brands-container">
          <img src="src/assets/graphics projects/real int ad.jpg" alt="" />
        </div>
        <br />
      </section>

      {/* websites */}
      <section className="websites">
        <br />
        <h2>Websites</h2>
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
