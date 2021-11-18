import React from "react";
import Contactitems from "../components/Contactitems";
import SecHeading from "../components/SecHeading";
import MapImg from "../assets/images/map.jpg";
import styled from "styled-components";
import MyH2 from "../components/MyH2";
import PText from "../components/PText";
import ContactForm from "../components/ContactForm";
import TransitionAnimation from "../components/TransitionAnimation";
import { motion } from "framer-motion";

const ContactStyle = styled.section`
  .map-sec {
    background-image: url(${MapImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;

    & > div {
      position: absolute;
      background-color: var(--deep-dark);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 30px;
      border-radius: 12px;
      top: 40%;
      right: 27%;

      div {
        font-size: 2rem;
        position: absolute;
        top: -20px;
        right: 60px;
      }
    }
  }
`;

const parentVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const childVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.7,
    },
  },
};

export default function Contact() {
  return (
    <div className="position-relative" style={{ paddingTop: "200px" }}>
      <TransitionAnimation color="var(--gray-2)" delay="1.4" />
      <TransitionAnimation color="var(--blue)" delay="1.2" />
      <TransitionAnimation color="var(--dark-bg)" delay="1.1" />
      <ContactStyle>
        <div className="container">
          <SecHeading
            subText="درارتباط باشید"
            h3Text="تماس"
            headingPos="text-center"
          />
          <div className="d-flex flex-column flex-md-row align-items-start justify-content-around">
            <motion.div
              className="w-100 p-1 p-md-5"
              variants={parentVariant}
              initial={"initial"}
              animate={"animate"}
            >
              <motion.div variants={childVariant}>
                <Contactitems icon="&#9742;" text="0912333444" />
              </motion.div>
              <motion.div variants={childVariant}>
                <Contactitems icon="&#9993;" text="malware1378@gmail.com" />
              </motion.div>
              <motion.div variants={childVariant}>
                <Contactitems icon="&#9872;" text="تهران، دماوند" />
              </motion.div>
            </motion.div>
            <div className="w-100 p-1 p-md-5">
              <ContactForm />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="map-sec container-fluid position-relative">
          <div>
            <div>&#128204;</div>
            <MyH2>محل شرکت</MyH2>
            <PText>تهران، دماوند</PText>
            <br />
            <a
              href="https://goo.gl/maps/BT4Rk5ighkocdjQT6"
              target="_blank"
              rel="noreferrer"
            >
              دیدن در نقشه
            </a>
          </div>
        </div>
      </ContactStyle>
    </div>
  );
}
