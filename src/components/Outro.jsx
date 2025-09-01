import React from "react";
import "../styles/outro.css";

export const Outro = () => {
  return (
    <section className="outro">
      <div className="outro-card card-1">
        <p>Get started</p>
        <p className="p1">
          Don't leave food on the table. <br />
          Build with Morsk Technologies and watch your business make the maximum
          gains.
        </p>
        <a href="">
          <button>Contact us</button>
        </a>
      </div>
      <div className="outro-card card-1">
        <p>Not sure where to start?</p>
        <p className="p1">
          Still unsure? <br />
          Schedule a call today and hear what experts think about your needs
        </p>
        <a href="">
          <button>Schedule a Call</button>
        </a>
      </div>
    </section>
  );
};
