import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../kitchen/CustomButton/CustomButton";
import Styles from "./Style.css";

export default function IdScanerModal() {
  return (
    <>
      <div className="modalHeader">
        <p>Scan CNIC</p>
      </div>
      <div className="modalContainer">
        <p>Place Guest CNIC to Scane</p>
        <div className="media">
          <img src="#"></img>
        </div>
        <div className="scanerButton">
          <Link to="/AddVisitorsInfo">
          <CustomButton btnTitle="Scane" />
          </Link>
        </div>
      </div>
    </>
  );
}
