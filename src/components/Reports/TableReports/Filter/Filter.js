import React, { useState } from "react";
// import InputField from "../../../kitchen/InputField/InputField";
import InputField from "../../../kitchen/InputField/InputField";
import Label from "../../../kitchen/Label/Label";
import DropDown from "../../../kitchen/DropDown/DropDown";
import Styles from "./Style.css";
// import CustomButton from "../../kitchen/CustomButton/CustomButton";
import CustomButton from "../../../kitchen/CustomButton/CustomButton";
import ModalBox from "../../../kitchen/ModalBox/ModalBox";
// import SuccessModal from "./SuccessModal/SuccessModal";

const stayType = [
  { id: 1, text: "All" },
  { id: 2, text: "Personal" },
  { id: 3, text: "Official" },
  { id: 4, text: "Labor" },
];

const monthlyReport = [
  { id: 1, text: "January" },
  { id: 2, text: "Febrary" },
  { id: 3, text: "March" },
  { id: 4, text: "April" },
  { id: 4, text: "May" },
  { id: 4, text: "June" },
  { id: 4, text: "July" },
  { id: 4, text: "August" },
  { id: 4, text: "September" },
  { id: 4, text: "October" },
  { id: 4, text: "November" },
  { id: 4, text: "December" },
];

const laborReport = [
  { id: 1, text: "s1" },
  { id: 2, text: "s2" },
  { id: 3, text: "s3" },
  { id: 4, text: "s4" },
];

const employeeWise = [
  { id: 1, text: "s1" },
  { id: 2, text: "s2" },
  { id: 3, text: "s3" },
  { id: 4, text: "s4" },
];
const guestType = [
  { id: 1, text: "s1" },
  { id: 2, text: "s2" },
  { id: 3, text: "s3" },
  { id: 4, text: "s4" },
];

export default function Filter() {
  const [modalToggle, setModalToggle] = useState(false);
  const [addFilter, setFilter] = useState({
    name: "",
    email: "",
    stayType: "",
    monthlyReport: "",
    employeeWise: "",
    laborType: "",
  });

  const handleChange = (e) => {
    setFilter({
      ...addFilter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="modalHeader">
        <p>Add New User</p>
      </div>
      <div className="modalContainer">
        <div className="form-row pbottom">
          <Label label="Date" />
          <div className="form-group">
            <InputField
              type="date"
              name="Date"
              value={addFilter.date}
              handle={handleChange}
            />
          </div>
          <div className="form-group">
            <InputField
              type="date"
              name="Date"
              value={addFilter.date}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="Stay Type" />
          <div className="form-group">
            <DropDown
              name="stayType"
              id="stayType"
              value={addFilter.stayType}
              Option={stayType}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="Monthly Report" />
          <div className="form-group">
            <DropDown
              name="monthlyReport"
              id="monthlyReport"
              value={addFilter.monthlyReport}
              Option={monthlyReport}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="Labor Report" />
          <div className="form-group">
            <DropDown
              name="laborReport"
              id="laborReport"
              value={addFilter.laborReport}
              Option={laborReport}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="Employee Wise" />
          <div className="form-group">
            <DropDown
              name="employeeWise"
              id="employeeWise"
              value={addFilter.employeeWise}
              Option={employeeWise}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="Guest Type" />
          <div className="form-group">
            <DropDown
              name="department"
              id="employeeWise"
              value={addFilter.guestType}
              Option={guestType}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="formControl form-row">
          <div className="form-group">
            <CustomButton
              btnTitle="Apply Filter"
              onClick={() => setModalToggle(true)}
            />
          </div>
        </div>
      </div>
      {modalToggle && (
        <ModalBox
          closeModal={() => {
            setModalToggle(false);
          }}
        >
          {/* <SuccessModal /> */}
        </ModalBox>
      )}
    </>
  );
}
