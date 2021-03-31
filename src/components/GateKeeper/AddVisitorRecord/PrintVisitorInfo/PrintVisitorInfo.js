import React from "react";
import CustomButton from "../../../kitchen/CustomButton/CustomButton";
import Styles from "./Style.css";

export default function PrintVisitorInfo() {
  return (
    <>
      <div className="modalHeader">
        <p>Entry Slip</p>
      </div>
      <div className="modalContainer">
        <h2 className="entryTitle">Entry Slip</h2>
        <div className="printSlipBtn">
          <div className="btnItems">
            <CustomButton btnTitle="Cancel" />
          </div>
          <div className="btnItems">
            <CustomButton btnTitle="Print Slip" />
          </div>
        </div>
      </div>
    </>
  );
}
