import React, { useState } from "react";
import DropDown from "../../kitchen/DropDown/DropDown";
import Label from "../../kitchen/Label/Label";
import InputField from "../../kitchen/InputField/InputField";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import Style from "./Style.css";
import ModalBox from "../../kitchen/ModalBox/ModalBox";
import PrintVisitorInfo from "./PrintVisitorInfo/PrintVisitorInfo";

const arrGuestType = [
  { id: 1, text: "permanent" },
  { id: 2, text: "temporary" },
  { id: 3, text: "part time" },
  { id: 4, text: "full time" },
];

const arrStayType = [
  { id: 1, text: "permanent" },
  { id: 2, text: "temporary" },
  { id: 3, text: "part time" },
  { id: 4, text: "full time" },
];

const arrsStayLocation = [
  { id: 1, text: "permanent" },
  { id: 2, text: "temporary" },
  { id: 3, text: "part time" },
  { id: 4, text: "full time" },
];

const arrStayDuration = [
  { id: 1, text: "1 Day" },
  { id: 2, text: "2 Day" },
  { id: 3, text: "3 Day" },
  { id: 4, text: "4 Day" },
];

const arrCheckOut = [
  { id: 1, text: "Day" },
  { id: 2, text: "Night" },
  { id: 3, text: "Evening" },
  { id: 4, text: "Morning" },
];

const arrCheckIn = [
  { id: 1, text: "Day" },
  { id: 2, text: "Night" },
  { id: 3, text: "Evening" },
  { id: 4, text: "Morning" },
];

export default function StayingDetails({
  handleChange,
  requestInfo,
  handleNext,
  handlePrev,
}) {
  const [modalToggle, setModalToggle] = useState(false);
  return (
    <div className="tabsDetail">
      <h4 className="title">Staying Details</h4>

      <div className="form-row formControl">
        <div className="form-group">
          <Label label="Type of guest" />
          <DropDown
            name="guestType"
            id="guestType"
            value={requestInfo.guestType}
            Option={arrGuestType}
            handle={handleChange}
          />
        </div>
        <div className="form-group">
          <Label label="Stay Type" />
          <DropDown
            name="stayType"
            id="stayType"
            value={requestInfo.stayType}
            Option={arrStayType}
            handle={handleChange}
          />
        </div>
      </div>
      <div className="form-row formControl">
        <div className="form-group">
          <Label label="Location of stay" />
          <DropDown
            name="stayLocation"
            id="stayLocation"
            value={requestInfo.stayLocation}
            Option={arrsStayLocation}
            handle={handleChange}
          />
        </div>
        <div className="form-group">
          <Label label="Duration of stay" />
          <DropDown
            name="stayDuration"
            id="stayDuration"
            value={requestInfo.stayDuration}
            Option={arrStayDuration}
            handle={handleChange}
          />
        </div>
      </div>
      <div className="form-row formControl">
        <div className="form-group">
          <Label label="Time In" />
          <DropDown
            name="checkIn"
            id="checkIn"
            value={requestInfo.checkIn}
            Option={arrCheckIn}
            handle={handleChange}
          />
        </div>
        <div className="form-group">
          <Label label="Time Out" />
          <DropDown
            name="checkOut"
            id="checkOut"
            value={requestInfo.checkOut}
            Option={arrCheckOut}
            handle={handleChange}
          />
        </div>
      </div>
      <div className="formControl">
        <Label label="Coming from city" />
        <InputField
          type="text"
          name="fromCity"
          value={requestInfo.fromCity}
          handle={handleChange}
        />
      </div>
      <div className="formControl form-row">
        <div className="form-group">
          <CustomButton btnTitle="PREVIOUS" onClick={handlePrev} />
        </div>
        <div className="form-group">
          <CustomButton
            btnTitle="SAVE"
            onClick={() => {
              console.log("saveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
              setModalToggle(true);
            }}
          />
        </div>
      </div>

      {modalToggle && (
        <ModalBox
          closeModal={() => {
            setModalToggle(false);
          }}
        >
          <PrintVisitorInfo />
        </ModalBox>
      )}
    </div>
  );
}
