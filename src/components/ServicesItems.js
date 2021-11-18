import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import MyH2 from "./MyH2";

const ServItemsStyle = styled.div`
  .icon {
    color: var(--gray-1);
    width: 50px;
  }
`;

export default function ServicesItems({ itemIcon, itemTitle, itemText }) {
  return (
    <ServItemsStyle className="d-flex flex-column align-items-center">
      <span className="fs-1 fw-100 icon">{itemIcon}</span>
      <MyH2 className="mb-4">{itemTitle}</MyH2>
      <PText textPos="text-center w-75">{itemText}</PText>
    </ServItemsStyle>
  );
}
