import React from "react";
import styled from "styled-components";
import PText from "./PText";

const ContactitemsStyle = styled.div`
  background-color: var(--deep-dark);
  border-radius: 12px;
  div {
    width: 70px;
    height: 70px;
    background-color: var(--blue);
    font-size: 2.5rem;
    border-radius: 50%;

    p {
      color: var(--white) !important;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default function Contactitems({ icon, text }) {
  return (
    <ContactitemsStyle className="d-flex align-items-center my-4 p-3">
      <div className="me-4 position-relative">
        {" "}
        <p>{icon}</p>{" "}
      </div>
      <PText>{text}</PText>
    </ContactitemsStyle>
  );
}
