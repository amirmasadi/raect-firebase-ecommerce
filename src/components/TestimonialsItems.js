import React from "react";
import styled from "styled-components";
import PText from "./PText";

const TestisItemsStyle = styled.div`
  background-color: var(--deep-dark);
  padding: 50px 70px;
  border-radius: 12px;
`;

export default function TestimonialsItems({testiText="تعریف و تمجید", testiName="امیراسدی", testiTitle="مدیر فلان جا"}) {
  return (
    <TestisItemsStyle className="text-center">
      <PText textPos="text-center" >
        {testiText}
      </PText>
      <h4 className="mt-4 fw-bold">{testiName}</h4>
      <span>{testiTitle}</span>
    </TestisItemsStyle>
  );
}
