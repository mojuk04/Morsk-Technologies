import React from "react";
import "../App.css";
import Projects from "./Projects";
import Introduction from "./Introduction";
import { AboutMorsk } from "./AboutMorsk";

const Main = () => {
  return (
    <main>
      <Introduction />
      <AboutMorsk />
      <Projects />
    </main>
  );
};
// https://www.youtube.com/playlist?list=PLpwngcHZlPae68z_mLFNfbJFIJVJ_Zcx2
export default Main;
