import React from "react";
import "../App.css";
import Projects from "./Projects";
import Introduction from "./Introduction";
import { AboutMorsk } from "./AboutMorsk";
import { Outro } from "./Outro";

const Main = () => {
  return (
    <main>
      <Introduction />
      <AboutMorsk />
      <Projects />
      <Outro />
    </main>
  );
};
// https://www.youtube.com/playlist?list=PLpwngcHZlPae68z_mLFNfbJFIJVJ_Zcx2
export default Main;
