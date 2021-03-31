import React from "react";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import { VisitorStats } from "../../kitchen/VisitorStats/VisitorStats";
import "./Style.css";

const monVisitors = [
  {
    imgSrc: "./square.png",
    statslabel: "Total number of Visitors",
    subLabel: "March 2021",
    dateStats: "30",
  },
  {
    imgSrc: "./square.png",
    statslabel: "Total number of Visitors Checked in",
    subLabel: "March 2021",
    dateStats: "30",
  },
];

export const MonthlyVisitors = () => {
  return (
    <>
      <img src="./monthly-visitors.png" width="100%" height="250px" />
      <p className="main-title">Monthly visitors</p>
      <span className="sub-title">March 2021</span>
      <VisitorStats items={monVisitors} />
      <div className="mthBtn">
        <CustomButton btnTitle="View Details" />
      </div>
    </>
  );
};
