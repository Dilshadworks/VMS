import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../kitchen/InputField/InputField";
import "./Style.css";
import CustomButton from "../kitchen/CustomButton/CustomButton";
import ModalBox from "../kitchen/ModalBox/ModalBox";
import Label from "../kitchen/Label/Label";

export default function ForgetPassword() {
  const [modalToggle, setModalToggle] = useState(false);
  const [addNewUserInfo, setAdNewUserInfo] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setAdNewUserInfo({
      ...addNewUserInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="form auth">
        <div className="tab-group">
          <Link className="authBtn" to="/auth/login">
            Go to login
          </Link>
        </div>
        <h1>Reset Password</h1>
        <div className="form-row pbottom">
          <div className="form-group loginicon">
            <Label label="E-mail Address" />
            <InputField
              placeholder="E-mail Address"
              type="text"
              name="email"
              value={addNewUserInfo.email}
              handle={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="formControl form-row">
          <div className="form-group">
            <CustomButton
              btnTitle="Forget Password"
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
