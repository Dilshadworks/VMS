import React, { useState } from "react";
import Styles from "./Style.css";
import VisitorThead from "../../kitchen/VisitorThead/VisitorThead";
import VisitorTbody from "../../kitchen/VisitorTbody/VisitorTbody";
import VisitorSearch from "../../kitchen/VisitorSearch/VisitorSearch";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import ModalBox from "../../kitchen/ModalBox/ModalBox";
import IdScanerModal from "./IdScanerModal/IdScanerModal";
import { PaginationComponent } from "../../kitchen/Pagination/Pagination";
import Table from "../../kitchen/Table/Table";

let thead = [
  "CNIC",
  "Arrival Date",
  "Site of visit",
  "Visit Type",
  "Time In",
  "Requester information",
];

let tbody = [
  {
    name: "Ahmed",
    cnic: "54545677-5",
    date: "21-2-2021",
    site: "DHA",
    visit: "Meeting",
    timeInOut: "In 12:00 pm -out 1:00 pm",
  },
  {
    name: "Ahmed",
    cnic: "54545677-5",
    date: "21-2-2021",
    site: "DHA",
    visit: "Meeting",
    timeInOut: "In 12:00 pm -out 1:00 pm",
  },
  {
    name: "Ahmed",
    cnic: "54545677-5",
    date: "21-2-2021",
    site: "DHA",
    visit: "Meeting",
    timeInOut: "In 12:00 pm -out 1:00 pm",
  },
  {
    name: "Ahmed",
    cnic: "54545677-5",
    date: "21-2-2021",
    site: "DHA",
    visit: "Meeting",
    timeInOut: "In 12:00 pm -out 1:00 pm",
  },
  {
    name: "Ahmed",
    cnic: "54545677-5",
    date: "21-2-2021",
    site: "DHA",
    visit: "Meeting",
    timeInOut: "In 12:00 pm -out 1:00 pm",
  },

  {
    name: "Ghumman",
    cnic: "54545677-5",
    date: "21-2-2021",
    site: "DHA",
    visit: "Meeting",
    timeInOut: "In 12:00 pm -out 1:00 pm",
  },
  {
    name: "Riqza",
    cnic: "54545677-5",
    date: "21-2-2021",
    site: "DHA",
    visit: "Meeting",
    timeInOut: "In 12:00 pm -out 1:00 pm",
  },
  {
    name: "M.Razi",
    cnic: "54545677-5",
    date: "21-2-2021",
    site: "DHA",
    visit: "Meeting",
    timeInOut: "In 12:00 pm -out 1:00 pm",
  },
];

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
          {/* <table className="table abcd">
            <thead className="thead">
              <tr className="tr">
                <th>
                  <VisitorSearch />
                </th>
                <VisitorThead TheadItem={thead} />
              </tr>
            </thead>
            <tbody className="tbody">
              <VisitorTbody
                TbodyItems={tbody}
                myButtonTitle="View Informatio"
              />
            </tbody> 
            <PaginationComponent tableValues={tbody} />
          </table>*/}
          <Table Columns={thead} rows={tbody} isAdministorCompTable="false" />
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
