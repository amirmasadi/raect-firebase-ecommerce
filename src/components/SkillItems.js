import React from "react";
import MyH2 from "./MyH2";
import PText from "./PText";

export default function SkillItems({ title, items }) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-start my-4">
      <div className="me-5">
        <MyH2>{title}</MyH2>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((itm, index) => {
          return (
            <div
              key={index}
              className="me-2 me-md-3 p-2 rounded-3 mb-3 mb-md-0"
              style={{ backgroundColor: "var(--deep-dark)" }}
            >
              <PText>{itm}</PText>
            </div>
          );
        })}
      </div>
    </div>
  );
}
