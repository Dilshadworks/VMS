import React from "react";
import CustomButton from "../../../kitchen/CustomButton/CustomButton";
import Styles from "./SuccessModal.css";

export default function SuccessModal() {
  return (
    <>
     <div className="modalHeader">
        <p>Successfully Added</p>
      </div>
      <div className="modalContainer">
        <div className="success">
          <strong>Success!</strong> You have successfully added a new user
        </div>
        <p>A email has been sent to the new user contains a link from where new user can access his account</p>
        <CustomButton btnTitle="Ok" />
      </div>
    </>
  );
}
