import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Carrds from "../kitchen/Cards/Carrds";
import { MyTable } from "../kitchen/MyTable/MyTable";
import CustomButton from "../kitchen/CustomButton/CustomButton";
import VisitorSearch from "../kitchen/VisitorSearch/VisitorSearch";

let supervisorHead = [
  <>
    <VisitorSearch />
  </>,
  "Requested Date",
  "P.No",
  "Department",
  "Status",
  "Rejection reason",
  "Visitor Information",
];
let supervisorBody = [
  [
    "Ahmed",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "...",
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
    "...",
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
    "...",
    <>
      <CustomButton btnTitle="View Information" />
    </>,
  ],
];
function Supervisor() {
  return (
    <div className="supervisor">
      <p>Supervisor</p>
      <span>Statistic</span>
      <div className="CardsList">
        <Carrds text1="Guest" value={24} text2="Checked in today" />
        <Carrds value={30} text2="Checked out today" />
        <Carrds
          text1="Out of 100"
          value={20}
          text2="Number of guest checked In"
        />
        <Carrds value={30} text2="Number of expected visitor" />
      </div>
      <div className="tableStructure">
        <div className="bannerBottom">
          <Link to="/CheckedIn"> Checked In</Link>
          <Link to="/CheckedOut"> Checked Out</Link>
        </div>
        <MyTable data={supervisorBody} heads={supervisorHead} />
      </div>
    </div>
  );
}
export default Supervisor;
