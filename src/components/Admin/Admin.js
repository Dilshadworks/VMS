import React, { useState } from "react";
import "./Style.css";
import { BsBook } from "react-icons/bs";
import Carrds from "../kitchen/Cards/Carrds";
import CustomButton from "../kitchen/CustomButton/CustomButton";
import ModalBox from "../kitchen/ModalBox/ModalBox";
import AddNewUserModal from "./AddNewUserModal/AddNewUserModal";
import { MyTable } from "../kitchen/MyTable/MyTable";
import SuccessModal from "./AddNewUserModal/SuccessModal/SuccessModal";

let adminHead = [
  "Account Type",
  "Name",
  "User name",
  "CNIC",
  "Mobile",
  "Role",
  "Account Created on",
  "Action",
];
let adminBody = [
  [
    "Gate Keeper",
    "Ahmed",
    "ahmed@gmail.com",
    "17303-765437-05",
    "03336748721",
    "Data Entry",
    "2-March-2021",
    <>
      <CustomButton btnTitle="Edit" />
      <CustomButton btnTitle="Delete" />
    </>,
  ],
  [
    "Gate Keeper",
    "Ahmed",
    "ahmed@gmail.com",
    "17303-765437-05",
    "03336748721",
    "Data Entry",
    "2-March-2021",
    <>
      <CustomButton btnTitle="Edit" />
      <CustomButton btnTitle="Delete" />
    </>,
  ],
  [
    "Gate Keeper",
    "Ahmed",
    "ahmed@gmail.com",
    "17303-765437-05",
    "03336748721",
    "Data Entry",
    "2-March-2021",
    <>
      <CustomButton btnTitle="Edit" />
      <CustomButton btnTitle="Delete" />
    </>,
  ],
];

export default function Administrator() {
  const [modalToggle, setModalToggle] = useState(false);
  const [successToggle, setSuccessToggle] = useState(false);
  return (
    <>
      <div className="administrator">
        <div className="bannerTop">
          <p>
            <BsBook
              size={32}
              style={{ color: "#414141", marginRight: "15px" }}
            />
            Administrator IT
          </p>
        </div>
        <div className="CardsList adminCardList">
          <Carrds value={17} text2="Total No of Users" />
          <Carrds value={10} text2="Active Users" />
          <Carrds value={4} text2="Gate Keeper" />
        </div>
        <div className="tableStructure">
          <div className="bannerBottom">
            <p>User Accounts Information</p>
            <div className="AddUserBtn">
              <CustomButton
                btnTitle="Add New User"
                onClick={() => {
                  setModalToggle(true);
                }}
              />
            </div>
          </div>
          <MyTable data={adminBody} heads={adminHead} />
        </div>
      </div>
      {modalToggle && (
        <ModalBox
          closeModal={() => {
            setModalToggle(false);
          }}
        >
          {successToggle ? (
            <SuccessModal
              closeModal={() => {
                setSuccessToggle(false);
              }}
            />
          ) : (
            <AddNewUserModal
              onSuccess={() => {
                setSuccessToggle(true);
              }}
            />
          )}
        </ModalBox>
      )}
    </>
  );
}
