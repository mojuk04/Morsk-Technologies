import React from "react";
import "../styles/morsk.css";

export const Morsk = () => {
  return (
    <section className="morsk-section">
      <div className="flex-container-morsk">
        {/* <h2 style={{ textAlign: "center" }} className="morsk-header">
          Why not Morsk?
          <br /> when we offer you
        </h2> */}
        <div className="cards-container">
          <div className="card card1 ">
            <h3>All in one solutions</h3>
            Morsk Technologies offer a complete suite of services in one place
            which means no more juggling multiple contracts, project managers
            and different communication styles.
            <br />
            Get unique solutions for your unique needs
          </div>
          <div className="card card2">
            <h3>Problem Solving and Expertise</h3>
            We don’t just create websites, or analyze your data, we create a
            digital experience and provide actionable insights to inform your
            next decisions Our talented experts make sure your experience with
            us is streamlined to your needs and hassle free
          </div>
          <div className="card card3">
            <h3>A Client-Centered Process</h3>
            <p>
              We offer you unmatched commitment. Our process includes a
              transparent communication system and a dedicated project manager
              for every project. Most importantly, we are committed to
              delivering our services on time and within your budget
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
