import React from "react";
import { MonthlyVisitors } from "./MonthlyVisitors/MonthlyVisitors";
import { SiteStatics } from "./SiteStatics/SiteStatics";
import "./Style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="monthlyVisitors">
        <MonthlyVisitors />
      </div>
      <div className="siteStatics">
        <SiteStatics />
      </div>
    </div>
  );
};
