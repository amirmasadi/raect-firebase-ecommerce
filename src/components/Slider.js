import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../assets/images/home-slider1.jpeg";
import Slide2 from "../assets/images/home-slider2.jpeg";
import Slide3 from "../assets/images/home-slider3.jpeg";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow } from "swiper";
import styled from "styled-components";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([EffectCoverflow]);

export default function App() {
  const slides = [
    {
      img: Slide1,
      badge: "محصولات جدید",
      title: "شرکت کرامتی",
      to: "/Projects",
      linkTitle: "محصولات",
    },
    {
      img: Slide2,
      badge: "تماس",
      title: " برای اطلاعات بیشتر تماس بگیرید",
      to: "/contact",
      linkTitle: "تماس",
    },
    {
      img: Slide3,
      badge: "درباره ما",
      title: "درباره شرکت بیشتر بدانید",
      to: "/abour",
      linkTitle: "درباره",
    },
  ];
  return (
    <SliderStyle>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={1}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        className="mySwiper"
      >
        {slides.map((slid) => (
          <SwiperSlide>
            {/* <img src={Slide1} alt="slider-images" /> */}
            <div
              class="slider-item"
              style={{ backgroundImage: `url(${slid.img})` }}
            >
              <div>
                <span class="badge">{slid.badge}</span>
                <h3>{slid.title}</h3>
                <Link to={slid.to} class="p-sm text-hover">
                  {slid.linkTitle}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="15px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>{" "}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderStyle>
  );
}

const SliderStyle = styled.section`
  .swiper-container {
    width: 100vw;
    overflow: visible;
    padding-top: 200px;
    padding-bottom: 200px;
  }
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    /* background-position: center;
    background-size: cover; */
    width: 840px;
    height: 450px;
    border-radius: 50px;
    overflow: hidden;
  }
  .swiper-slide-active {
    box-shadow: 0px 0px 50px 15px #000000;
  }

  .slider-item {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    overflow: hidden;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 2;
  }

  .slider-item div {
    margin: 3rem;
    position: absolute;
    z-index: 1;
    width: 90%;
  }

  .slider-item div h3 {
    color: var(--white);
    width: 60%;
    margin: 2rem 0 6rem 0;
    font-weight: bold;
  }

  .slider-item div a {
    color: var(--white);
    font-size: 1rem;
    padding: 2px 5px;
    position: absolute;
    transition: all 0.2s ease;
  }
  .slider-item div a:hover {
    color: var(--blue2);
  }
  .badge {
    color: var(--white);
    background-color: var(--blue);
    border-radius: 5px;
    padding: 8px;
  }

  @media screen and (max-width: 1024px) {
    .swiper-container {
      overflow: hidden;
      padding-bottom: 0px;
    }
    .swiper-slide {
      width: 600px;
    }
  }
  @media screen and (max-width: 768px) {
    .swiper-slide {
      width: 95%;
      height: 300px;
    }
    .swiper-slide {
      border-radius: 10px;
    }
  }
`;
