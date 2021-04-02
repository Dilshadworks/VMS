import React, { useState } from "react";
import InputField from "../../kitchen/InputField/InputField";
import Label from "../../kitchen/Label/Label";
import DropDown from "../../kitchen/DropDown/DropDown";
import "./Style.css";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import ModalBox from "../../kitchen/ModalBox/ModalBox";
import SuccessModal from "./SuccessModal/SuccessModal";

const accounType = [
  { id: 1, text: "s1" },
  { id: 2, text: "s2" },
  { id: 3, text: "s3" },
  { id: 4, text: "s4" },
];

const cnic = [
  { id: 1, text: "s1" },
  { id: 2, text: "s2" },
  { id: 3, text: "s3" },
  { id: 4, text: "s4" },
];

const roleType = [
  { id: 1, text: "s1" },
  { id: 2, text: "s2" },
  { id: 3, text: "s3" },
  { id: 4, text: "s4" },
];

const departmentType = [
  { id: 1, text: "s1" },
  { id: 2, text: "s2" },
  { id: 3, text: "s3" },
  { id: 4, text: "s4" },
];

export default function AddNewUserModal({ onSuccess }) {
  const [addNewUserInfo, setAdNewUserInfo] = useState({
    name: "",
    email: "",
    accounType: "",
    cnic: "",
    departmentType: "",
    roleType: "",
  });

  const handleChange = (e) => {
    setAdNewUserInfo({
      ...addNewUserInfo,
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
          <Label label="Employee" />
          <div className="form-group ">
            <InputField
              type="text"
              name="name"
              value={addNewUserInfo.name}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="Email" />
          <div className="form-group">
            <InputField
              type="text"
              name="email"
              value={addNewUserInfo.email}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="Accout Type" />
          <div className="form-group">
            <DropDown
              name="accounType"
              id="accounType"
              value={addNewUserInfo.accounType}
              Option={accounType}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="CNIC" />
          <div className="form-group">
            <DropDown
              name="cnic"
              id="cnic"
              value={addNewUserInfo.cnic}
              Option={cnic}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="ROle" />
          <div className="form-group">
            <DropDown
              name="roleType"
              id="roleType"
              value={addNewUserInfo.roleType}
              Option={roleType}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <Label label="Department" />
          <div className="form-group">
            <DropDown
              name="department"
              id="departmentType"
              value={addNewUserInfo.departmentType}
              Option={departmentType}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="formControl mainModalBtn">
          <div className="modalBtn">
            <CustomButton btnTitle="Cancel" />
          </div>
          <div className="modalBtn">
            <CustomButton
              btnTitle="Add User"
              onClick={() => {
                onSuccess();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
