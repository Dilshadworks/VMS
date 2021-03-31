import React from "react";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import InputField from "../../kitchen/InputField/InputField";
import Label from "../../kitchen/Label/Label";

export default function VehicleDetail({
  handleChange,
  requestInfo,
  handleNext,
  handlePrev,
}) {
  return (
    <div className="tabsDetail">
    
        <h4 className="title">Vehicle Details</h4>
        <div className="formControl">
          <Label label="Make" />
          <InputField
            type="text"
            name="VehicleMake"
            value={requestInfo.VehicleMake}
            handle={handleChange}
          />
        </div>
        <div className="formControl">
          <Label label="Model" />
          <InputField
            type="text"
            name="VehicleModel"
            value={requestInfo.VehicleModel}
            handle={handleChange}
          />
        </div>
        <div className="formControl">
          <Label label="Registration" />
          <InputField
            type="text"
            name="VehicleRegistration"
            value={requestInfo.VehicleRegistration}
            handle={handleChange}
          />
        </div>
        <div className="formControl">
          <Label label="licenseDetail" />
          <InputField
            type="text"
            name="VehicleLicenseDetail"
            value={requestInfo.VehicleLicenseDetail}
            handle={handleChange}
          />
        </div>
        <div className="form-row formControl">
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
