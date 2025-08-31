import React from "react";
import "../styles/introduction.css";

const Introduction = () => {
  return (
    <>
      <section className="introduction">
        <h1>
          Got some tech needs? <br />
          don't fret <br />
          let's solve them with you.
        </h1>
        <h3>same place, all in one solutions</h3>
        <a href="mailto:morsktechnologies@gmail.com">
          <button>Send an email to get started</button>
        </a>
      </section>
    </>
  );
};

export default Introduction;
