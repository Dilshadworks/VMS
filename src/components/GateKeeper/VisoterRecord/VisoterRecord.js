import React, { useState } from "react";
import Styles from "./Style.css";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import ModalBox from "../../kitchen/ModalBox/ModalBox";
import IdScanerModal from "./IdScanerModal/IdScanerModal";
import { MyTable } from "../../kitchen/MyTable/MyTable";
import VisitorSearch from "../../kitchen/VisitorSearch/VisitorSearch";



export function VisoterRecord() {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
      <div className="visitorRecord">
        <div className="bannerTop">
          <p>
            <BsBook
              size={32}
              style={{ color: "#414141", marginRight: "15px" }}
            />
            Gate Keeper
          </p>
          <div className="scanButton">
            <CustomButton
              btnTitle="Scan CNIC"
              onClick={() => setModalToggle(true)}
            />
          </div>
        </div>
        <div className="tableStructure">
          <div className="bannerBottom">
            <Link to="/currentlyCheckedIn">Currently Checked In</Link>
          </div>
          <MyTable data={VisitorData} heads={visitorHead} />
        </div>
      </div>
      {modalToggle && (
        <ModalBox
          closeModal={() => {
            setModalToggle(false);
          }}
        >
          <IdScanerModal />
        </ModalBox>
      )}
    </>
  );
}



let visitorHead = [
  <>
    <VisitorSearch />
  </>,
  "CNIC",
  "Arrival Date",
  "Site of visit",
  "Visit Type",
  "Time In",
  "Requester information",
];

let VisitorData = [
  [
    "Ahmed",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "In 12:00pm Out 02:00am",
    <>
      <CustomButton btnTitle="View Information" />
    </>,
  ],
  [
    "Ahmed",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "In 12:00pm Out 02:00am",
    <>
      <CustomButton btnTitle="View Information" />
    </>,
  ],
];