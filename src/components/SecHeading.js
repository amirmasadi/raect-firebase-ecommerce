import React from "react";
import styled from "styled-components";

const SecHeadingStyle = styled.div`
  h3 {
    font-size: 4rem;
  }
  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 2.8rem;
    }
}
`;

export default function SecHeading({
  h3Text= "تست",
  subText="تست",
  headingPos = "text-center text-md-start",
}) {
  return (
    <SecHeadingStyle className={headingPos}>
      <p className="mb-0">{subText}</p>
      <h3 className="text-white fw-bold mb-4">{h3Text}</h3>
    </SecHeadingStyle>
  );
}
