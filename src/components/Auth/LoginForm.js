import React, { useState } from "react";
import InputField from "../kitchen/InputField/InputField";
import "./Style.css";
import CustomButton from "../kitchen/CustomButton/CustomButton";
import ModalBox from "../kitchen/ModalBox/ModalBox";
import Label from "../kitchen/Label/Label";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [modalToggle, setModalToggle] = useState(false);
  const [addNewUserInfo, setAdNewUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setAdNewUserInfo({
      ...addNewUserInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="auth">
        <div className="tab-group">
          <Link className="authBtn" to="/auth/signup">
            Sign Up Here
          </Link>
        </div>
        <h1>Welcome Back!</h1>
        <div className="form-row pbottom">
          <div className="form-group">
            <Label label="Email Address" />
            <InputField
              placeholder="E-mail Address"
              type="text"
              name="email"
              value={addNewUserInfo.email}
              handle={handleChange}
            />
          </div>
        </div>
        <div className="form-row pbottom">
          <div className="form-group">
            <Label label="Password" />
            <InputField
              placeholder="Password"
              type="password"
              name="password"
              value={addNewUserInfo.password}
              handle={handleChange}
            />
          </div>
        </div>
        <Link className="forgotPass" to="/auth/forget">
          ForgetPassword?
        </Link>
        <br />
        <div className="formControl form-row">
          <div className="form-group">
            <CustomButton
              btnTitle="LOG IN"
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
