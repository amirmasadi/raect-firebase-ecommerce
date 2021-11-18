import React from "react";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import ProjectSwiper from "../components/ProjectSwiper";
import Showcase from "../components/Showcase";
import HomeTestImonials from "../components/HomeTestImonials";
import DownloadCv from "../components/DownloadCv";
import TransitionAnimation from "../components/TransitionAnimation";
import Map from "../components/Map";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="position-relative" exit={{ opacity: 0 }}>
      <TransitionAnimation color="var(--gray-2)" delay="1.4" />
      <TransitionAnimation color="var(--blue)" delay="1.2" />
      <TransitionAnimation color="var(--dark-bg)" delay="1.1" />
      <Showcase />
      <HomeAbout />
      <HomeServices />
      <ProjectSwiper />
      <HomeTestImonials />
      <DownloadCv />
      <Map />
    </motion.div>
  );
}
