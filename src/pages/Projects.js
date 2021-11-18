import React from "react";
import SecHeading from "../components/SecHeading";
import ProjectPageSec from "../components/ProjectPageSec";
import TransitionAnimation from "../components/TransitionAnimation";

export default function Progects() {
  return (
    <div className="position-relative" style={{ paddingTop: "200px" }}>
      <TransitionAnimation color="var(--gray-2)" delay="1.4" />
      <TransitionAnimation color="var(--blue)" delay="1.2" />
      <TransitionAnimation color="var(--dark-bg)" delay="1.1" />

      <section className="container">
        <SecHeading
          h3Text="محصولات ما"
          subText="برخی از کالا ها"
          headingPos="text-center"
        />
        <ProjectPageSec />
      </section>
    </div>
  );
}
