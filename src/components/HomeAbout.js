import React from "react";
import SecHeading from "../components/SecHeading";
import PText from "../components/PText";
import MyBtn from "../components/MyBtn";
import HAboutImg from "../assets/images/phoneTsbletDesktop.png";

export default function HomeAbout() {
  return (
    <section style={{marginTop:"200px"}} id="home-about" className="container-md d-flex flex-column flex-md-row align-items-center justify-content-around">
      <div>
        <SecHeading
          h3Text="درباره ما"
          subText="معرفی کوتاه شرکت"
        />
        <PText>
          سلام، من یه توسعه دهنده و طراح مستقل حوضه وب از تهران هستم، عاشق طراحی
          و کد زدن. سعی میکنم برای هر پروژه بهترین خودم رو ارائه بدم. هدفم طراحی
          صفحات وب و لندینگ پیج های خاص و کاربردی با استفاده از بروز ترین
          تکنولوژی هاست.
        </PText>
        <div className="d-grid d-md-flex gap-2 mt-4">
            <MyBtn className="" btnText="محصولات" btnLink="/projects"/>
            <MyBtn btnText="درباره ما" btnLink="/about" outline="true" />
        </div>
      </div>
      <div>
          <img className="img-fluid mt-5 mt-md-0 " src={HAboutImg} alt="" />
      </div>
    </section>
  );
}
