import React from "react";
import styled from "styled-components";
import MyBtn from "./MyBtn";
import Slider from "./Slider";
import { motion } from "framer-motion";
import logo from "../assets/images/STVC.svg";

const ShowcaseStyle = styled.section`
  position: relative;
  padding-top: 50px;

  .social-part {
    position: absolute;
    transform: rotate(-90deg);
    bottom: 115px;
    left: -75px;

    img {
      transform: rotate(90deg) !important;
    }
    a {
      color: var(--gray-1);
    }
  }

  .scroll-part {
    position: absolute;
    transform: rotate(-90deg);
    bottom: 4rem;
    right: -16px;

    img {
      transform: rotate(90deg) !important;
      width: 17px;
    }
    a {
      color: var(--gray-1);
    }
  }

  .show-case-content {
    .show-case-title {
      margin-bottom: -70px;
      z-index: 2;

      .showcase-title {
        font-size: 5rem;
        text-shadow: 0px 0px 20px black;
      }
      @media only screen and (max-width: 768px) {
        h2 {
          font-size: 1.5rem;
        }
        .showcase-title {
          font-size: 2rem;
        }
      }
    }
    .show-case-text {
      margin-top: -200px;
      z-index: 1;
    }
    @media only screen and (max-width: 768px) {
      .show-case-text {
        margin-top: 30px;
      }
    }
  }
`;

export default function Showcase() {
  return (
    <ShowcaseStyle className="w-100  mt-5 text-white">
      <div className="show-case-content container h-100 d-flex justify-content-md-center align-items-center flex-column mt-sm-5">
        <div className="d-flex flex-column align-items-center show-case-title">
          <img src={logo} alt="logo" width="200px" />
          <motion.h2
            className="showcase-title"
            initial={{ opacity: 0, y: -150 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.5 },
            }}
          >
            سایت شرکتی کرامتی
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
          >
            <MyBtn
              btnText={"محصولات"}
              outline={false}
              btnLink={"/projects"}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
            ></MyBtn>
          </motion.div>
        </div>

        <Slider />

        <div className="d-flex flex-column align-items-center show-case-text">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -10, transition: { duration: 1.2 } }}
          ></motion.div>
        </div>
      </div>
    </ShowcaseStyle>
  );
}
