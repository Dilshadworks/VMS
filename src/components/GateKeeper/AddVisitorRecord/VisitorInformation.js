import React from "react";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import DropDown from "../../kitchen/DropDown/DropDown";
import InputField from "../../kitchen/InputField/InputField";
import Label from "../../kitchen/Label/Label";
import Style from "./Style.css";

const siteVisit = [
  { id: 1, text: "s1" },
  { id: 2, text: "s2" },
  { id: 3, text: "s3" },
  { id: 4, text: "s4" },
];
export default function VisitorInformation({
  handleNext,
  handleChange,
  requestInfo,
  handlePrev,
}) {
  return (
    <div className="tabsDetail">
      <h4 className="title">Visitor Details</h4>
  
        <div className="formControl">
          <Label label="Name" />
          <InputField
            type="text"
            name="name"
            value={requestInfo.name}
            handle={handleChange}
          />
        </div>
        <div className="formControl">
          <Label label="CNIC" />
          <InputField
            type="text"
            name="cnic"
            value={requestInfo.cnic}
            handle={handleChange}
          />
        </div>
        <div className="formControl form-row">
          <div className="form-group">
            <Label label="Guest token number" />
            <InputField
              type="text"
              name="gtNo"
              value={requestInfo.gtNo}
              handle={handleChange}
            />
          </div>
          <div className="form-group">
            <Label label="No of guest" />
            <InputField
              type="text"
              name="noOfGuest"
              value={requestInfo.noOfGuest}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="formControl">
          <Label label="Site of visit" />
          <DropDown
            name="siteVisit"
            id="siteVisit"
            value={requestInfo.siteVisit}
            Option={siteVisit}
            handle={handleChange}
          />
        </div>
        <div className="formControl form-row">
          <div className="form-group">
            <CustomButton btnTitle="PREVIOUS" onClick={handlePrev} />
          </div>
          <div className="form-group">
            <CustomButton btnTitle="NEXT" onClick={handleNext} />
          </div>
        </div>
   
    </div>
  );
}
