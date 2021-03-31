import React from "react";
import "./Style.css";

export const VisitorStats = ({ items }) => {
  return (
    <div className="Visitors">
      {items.map((item, i) => (
        <div key={i} className="Vmain">
          <div className="avatar">
            <img src={item.imgSrc} width="50px" />
            <div className="visitorInfo">
              <p>{item.statslabel} </p>
              <span>{item.subLabel} </span>
            </div>
          </div>
          <p className="counter">{item.dateStats}</p>
        </div>
      ))}
    </div>
  );
};
