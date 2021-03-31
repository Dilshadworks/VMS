import React from "react";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import DropDown from "../../kitchen/DropDown/DropDown";
import InputField from "../../kitchen/InputField/InputField";
import Label from "../../kitchen/Label/Label";
import Style from "./Style.css";

const locArray = [
  { id: 1, text: "permanent" },
  { id: 2, text: "temporary" },
  { id: 3, text: "part time" },
  { id: 4, text: "full time" },
];

const depArray = [
  { id: 1, text: "IT" },
  { id: 2, text: "Sales" },
  { id: 3, text: "Development" },
  { id: 4, text: "Admin" },
];

export function RequesterInformation({
  handleNext,
  requestInfo,
  handleChange,
}) {
  return (
    <div className="tabsDetail">
      <h4 className="title">Requester Details</h4>

      <div className="formControl">
        <Label label="Employee" />
        <DropDown
          name="empType"
          id="Employee"
          value={requestInfo.empType}
          Option={locArray}
          handle={handleChange}
        />
      </div>
      <div className="formControl">
        <Label label="Location" />
        <InputField
          type="text"
          name="location"
          value={requestInfo.location}
          handle={handleChange}
        />
      </div>
      <div className="formControl">
        <Label label="P.no" />
        <InputField
          type="number"
          name="phNo"
          value={requestInfo.phNo}
          handle={handleChange}
        />
      </div>
      <div className="formControl">
        <Label label="Department" />
        <DropDown
          name="department"
          id="Employee"
          value={requestInfo.department}
          Option={depArray}
          handle={handleChange}
        />
      </div>
      <div className="formControl">
        <CustomButton btnTitle="NEXT" onClick={handleNext} />
      </div>
    </div>
  );
}
