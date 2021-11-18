import React from "react";
import AboutShowcase from "../components/AboutShowcase";
import AboutSkills from "../components/AboutSkills";
import DownloadCv from "../components/DownloadCv";
import TransitionAnimation from "../components/TransitionAnimation";
import Map from "../components/Map";

export default function About() {
  return (
    <div className="position-relative" style={{ paddingTop: "200px" }}>
      <TransitionAnimation color="var(--gray-2)" delay="1.4" />
      <TransitionAnimation color="var(--blue)" delay="1.2" />
      <TransitionAnimation color="var(--dark-bg)" delay="1.1" />
      <section>
        <AboutShowcase />
        <AboutSkills />
        <br />
        <br />
        <br />
        <br />
        <br />
        <DownloadCv />
        <Map />
      </section>
    </div>
  );
}
