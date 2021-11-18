import React from "react";
import styled from "styled-components";
import SecHeading from "./SecHeading";
import TopoPic from "../assets/images/topo-lines.png";
import MyBtn from "./MyBtn";

const DownloadCvStyle = styled.div`
  background-color: var(--deep-dark);
  border-radius: 12px;
  background-image: url(${TopoPic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 50px;
`;

export default function DownloadCv() {
  return (
    <DownloadCvStyle className="container d-flex flex-column align-items-center py-5 w-100">
      <SecHeading
        h3Text="تماس"
        subText="برای همکاری های بیشتر..."
        headingPos="text-center"
      />
      <MyBtn className="" btnText="تماس با ما" btnLink="/contact" />
    </DownloadCvStyle>
  );
}
