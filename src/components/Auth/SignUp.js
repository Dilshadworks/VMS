import React, { useState } from "react";
import { Link } from "react-router-dom";
import Label from "../kitchen/Label/Label";
import InputField from "../kitchen/InputField/InputField";
import CustomButton from "../kitchen/CustomButton/CustomButton";
import "./Style.css";

export function SignUp() {
  const [addNewUserInfo, setAdNewUserInfo] = useState({
    fname: " ",
    lname: " ",
    email: " ",
    password: " ",
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
          <Link className="authBtn" to="/auth/login">
            Go to Login
          </Link>
        </div>
        <h1>Registor Now!</h1>
        <div className="form-row pbottom">
          <div className="form-group signupForm">
            <Label label="First Name" />
            <InputField
              placeholder="First Name"
              type="text"
              name="fname"
              value={addNewUserInfo.fname}
              handle={handleChange}
            />
          </div>
          <div className="form-group signupForm">
            <Label label="Last Name" />
            <InputField
              placeholder="Last Name"
              type="text"
              name="lname"
              value={addNewUserInfo.lname}
              handle={handleChange}
            />
          </div>
        </div>
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
        <br />
        <div className="formControl form-row">
          <div className="form-group">
            <CustomButton btnTitle="Submit Form" />
          </div>
        </div>
      </div>
    </>
  );
}
