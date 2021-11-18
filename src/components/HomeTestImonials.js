// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Autoplay, Navigation } from "swiper/core";
import styled from "styled-components";
import SecHeading from "./SecHeading";
import TestimonialsItems from "./TestimonialsItems";
import Testimonials from "../assets/data/testimonials";

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay, Navigation]);

const HomeTesStyle = styled.div`
  width: 100%;
  .swiper-container {
    max-width: 700px;
    height: 400px;
  }

  .swiper-slide {
    height: auto;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-button-next {
    right: 30px;
    top: auto;
    bottom: 0px;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    padding: 28px;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 100px;
  }
`;
const HomeTesStyleSec = styled.section`
  width: 100%;
  height: 680px;
`;

export default function App() {
  return (
    <HomeTesStyleSec style={{ marginTop: "115px" }} className="container-sm">
      <SecHeading
        h3Text="نظرات"
        subText="مشتریان در مورد ما چی میگن"
        headingPos="text-center"
      />
      <HomeTesStyle>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          className="mySwiper"
        >
          {Testimonials.map((Testis) => {
            return (
              <SwiperSlide key={Testis.id}>
                <TestimonialsItems
                  testiText={Testis.desc}
                  testiName={Testis.name}
                  testiTitle={Testis.title + Testis.org}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </HomeTesStyle>
    </HomeTesStyleSec>
  );
}
