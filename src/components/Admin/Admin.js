import React, { useState } from "react";
import "./Style.css";
import VisitorThead from "../kitchen/VisitorThead/VisitorThead";
import VisitorTbody from "../kitchen/VisitorTbody/VisitorTbody";
import { BsBook } from "react-icons/bs";
import Carrds from "../kitchen/Cards/Carrds";
import CustomButton from "../kitchen/CustomButton/CustomButton";
import ModalBox from "../kitchen/ModalBox/ModalBox";
import AddNewUserModal from "./AddNewUserModal/AddNewUserModal";
import Table from "../kitchen/Table/Table";

let thead = [
  "Account Type",
  "Name",
  "User name",
  "CNIC",
  "Mobile",
  "Role",
  "Account Created on",
  "Action",
];
let tbody = [
  {
    accountType: "Gate Keeper",
    name: "Ahmed",
    userName: "ahmed@gmail.com",
    cnic: "17303-765437-05",
    mobile: "03336748721",
    role: "Data Entry",
    accountCreatedOn: "2-March-2021",
  },
  {
    accountType: "Gate Keeper",
    name: "Ahmed",
    userName: "ahmed@gmail.com",
    cnic: "17303-765437-05",
    mobile: "03336748721",
    role: "Data Entry",
    accountCreatedOn: "2-March-2021",
  },
  {
    accountType: "Gate Keeper",
    name: "Ahmed",
    userName: "ahmed@gmail.com",
    cnic: "17303-765437-05",
    mobile: "03336748721",
    role: "Data Entry",
    accountCreatedOn: "2-March-2021",
  },
  {
    accountType: "Gate Keeper",
    name: "Ahmed",
    userName: "ahmed@gmail.com",
    cnic: "17303-765437-05",
    mobile: "03336748721",
    role: "Data Entry",
    accountCreatedOn: "2-March-2021",
  },
  {
    accountType: "Gate Keeper",
    name: "Ahmed",
    userName: "ahmed@gmail.com",
    cnic: "17303-765437-05",
    mobile: "03336748721",
    role: "Data Entry",
    accountCreatedOn: "2-March-2021",
  },
];

export default function Administrator() {
  const [modalToggle, setModalToggle] = useState(false);
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
                onClick={() => setModalToggle(true)}
              />
            </div>
          </div>
          {/* <table className="table">
            <thead className="thead">
              <tr className="tr">
                <VisitorThead TheadItem={thead} />
              </tr>
            </thead>
            <tbody className="tbody">
              <VisitorTbody TbodyItems={tbody} isAdministorCompTable={true} />
            </tbody>
          </table> */}
          <Table Columns={thead} rows={tbody} isAdministorCompTable="true" />
        </div>
      </div>
      {modalToggle && (
        <ModalBox
          closeModal={() => {
            setModalToggle(false);
          }}
        >
          <AddNewUserModal />
        </ModalBox>
      )}
    </>
  );
}
