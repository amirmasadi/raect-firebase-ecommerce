import React from "react";
import PText from "./PText";
import MyH2 from "./MyH2";
import AboutPic from "../assets/images/about_pic.jpg";
import { motion } from "framer-motion";

export default function AboutShowcase() {
  return (
    <section className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 gap-md-0">
      <div className="d-flex flex-column align-items-start">
        <PText>درباره سايت</PText>
        <MyH2 className="mb-5">شرکتی کرامتی</MyH2>
        <PText textPos="text-right" maxwidth="700px">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          متنوع با هدت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان
          را می طلبد
          <br></br>
          <br></br>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
          <br></br>
          <br></br>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
          <br></br>
          <br></br>
        </PText>
      </div>
      <div className="d-flex justify-content-center position-relative">
        <img
          src={AboutPic}
          className="img-fluid w-75 border border-3 border-secondary rounded "
          alt="about-img"
        />
        <motion.div
          className="position-absolute bg-light top-0 w-0 h-100"
          initial={{ width: "100%", left: "0%" }}
          animate={{
            width: "0%",
            left: "100%",
            transition: {
              duration: 0.2,
              delay: 1.3,
            },
          }}
        ></motion.div>
        <motion.div
          className="position-absolute top-0 w-0 h-100"
          initial={{ width: "100%", left: "0%", background: "var(--blue)" }}
          animate={{
            width: "0%",
            left: "100%",
            transition: {
              duration: 0.3,
              delay: 1.2,
            },
          }}
        ></motion.div>
        <motion.div
          className="position-absolute bg-dark top-0 w-0 h-100"
          initial={{ width: "100%", left: "0%" }}
          animate={{
            width: "0%",
            left: "100%",
            transition: {
              duration: 0.3,
              delay: 1.1,
            },
          }}
        ></motion.div>
      </div>
    </section>
  );
}
