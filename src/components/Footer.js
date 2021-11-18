import React from "react";
import styled from "styled-components";
import FooterList from "./FooterList";
import MyH2 from "./MyH2";
import PText from "./PText";
import logo from "../assets/images/STVC.svg";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding: 70px 0px 100px 0px;
  margin-top: 50px;
  p {
    text-align: justify;
  }
`;

export default function Footer() {
  return (
    <FooterStyle className="container-fluid w-100 position-relative">
      <div className="w-75 d-flex flex-column flex-lg-row justify-content-around align-items-center m-auto gap-5 gap-lg-0">
        <div>
          <MyH2 className="mb-4 flex-grow-2 ">سايت شرکتی كرامتی</MyH2>
          <PText textPos="text-right">
            تیم شرکت جدید از سال 1386 فعالیت خود را با طراحی و اجرای پروژه های
            اتوماسیون صنعتی آغاز کرد و در طی این سالها با تکمیل کادر مهندسی و
            افزایش توانایی ها، هدف خود را از سال 1395 به طراحی و تولید سیستم های
            کنترل از راه دور، ایمنی و امنیتی و هوشمند سازی تغییر داد.
          </PText>
        </div>
        <FooterList
          footerli={[
            {
              type: "link",
              text: "درباره ما",
              path: "/about",
            },
            {
              type: "link",
              text: "تماس با ما",
              path: "/contact",
            },
            {
              type: "link",
              text: "محصولات",
              path: "/project",
            },
          ]}
        >
          لینک های مهم
        </FooterList>

        <FooterList
          footerli={[
            {
              type: "a",
              text: "09129994",
              path: "tel:+09129994",
            },
            {
              type: "a",
              text: "malware1378@gmail.com",
              path: "mailto:malware1378@gmail.com",
            },
            {
              type: "a",
              text: "تهران- دماوند",
              path: "https://goo.gl/maps/BT4Rk5ighkocdjQT6",
            },
          ]}
        >
          راه ای ارتباطی
        </FooterList>

        <img src={logo} alt="logo" width="100px"/>
      </div>

      <div
        className="position-absolute bottom-0 py-2 px-0 px-md-5 w-100"
        style={{
          backgroundColor: "var(--dark-bg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          &copy; تمامی حقوق مادی و معنوی این وب سایت به علیرضا اسدی تعلق دارد.
        </p>
      </div>
    </FooterStyle>
  );
}
