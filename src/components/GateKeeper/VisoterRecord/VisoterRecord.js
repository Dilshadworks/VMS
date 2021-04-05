import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./Style.css";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import ModalBox from "../../kitchen/ModalBox/ModalBox";
import IdScanerModal from "./IdScanerModal/IdScanerModal";
import {MyTable} from "./MyTable/MyTable";
import VisitorSearch from "../../kitchen/VisitorSearch/VisitorSearch";

const VisitorData = [
  [
    "Ahmed",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "In 12:00pm Out 02:00am",
  ],
  [
    "Zeeshan",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "In 12:00pm Out 02:00am",
  ],
  [
    "Ghumman",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "In 12:00pm Out 02:00am",
  ],
  [
    "salman",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "In 12:00pm Out 02:00am",
  ],
];

export function VisoterRecord() {
  useEffect(async () => {
    const result = await axios(
      "http://vmslocal:61966/api/Employee/GetEmployeesList"
    );

    setApiData(result.data);
  }, []);
  const [apiData, setApiData] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);

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
          <MyTable data={apiData} heads={visitorHead} />
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
