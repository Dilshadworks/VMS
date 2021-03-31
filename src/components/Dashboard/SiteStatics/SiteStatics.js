import React from "react";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import { VisitorStats } from "../../kitchen/VisitorStats/VisitorStats";
import "./Style.css";

const siteStats = [
  {
    imgSrc: "./square.png",
    statslabel: "Office Visitors",
    subLabel: "Total Number of Visitors",
    dateStats: "30",
  },
  {
    imgSrc: "./square.png",
    statslabel: "Plant Visitors",
    subLabel: "Total Number of Visitors",
    dateStats: "30",
  },
  {
    imgSrc: "./square.png",
    statslabel: "Township Visitors",
    subLabel: "Total Number of Visitors",
    dateStats: "30",
  },
];

export const SiteStatics = () => {
  return (
    <>
      <img
        src="./visitor-statics.png"
        width="44%"
        style={{ margin: "0 auto", display: "block" }}
      />
      <p className="main-title">Site Statistic</p>
      <VisitorStats items={siteStats} />
      <div className="mthBtn">
        <CustomButton btnTitle="View Details" />
      </div>
    </>
  );
};
