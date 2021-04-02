import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Carrds from "../kitchen/Cards/Carrds";
import ModalBox from "../kitchen/ModalBox/ModalBox";
import { MyTable } from "../kitchen/MyTable/MyTable";
import CustomButton from "../kitchen/CustomButton/CustomButton";
import VisitorSearch from "../kitchen/VisitorSearch/VisitorSearch";
import ViewInformation from "../kitchen/CustomButton/ViewInformation/ViewInformation";


let supervisorData = [
  [
    "Ahmed",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "...",
  ],
  [
    "Ahmed",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "...",
  ],
  [
    "Ghumman",
    "54545677-5",
    "21-2-2021",
    "DHA",
    "Meeting",
    "...",
  ],
];

function Supervisor() {
  const [modalToggle, setModalToggle] = useState(false);
  const tableData = supervisorData.map((data) =>{
    return[
      ...data,
    <>
      <CustomButton btnTitle="View Information" onClick={() => setModalToggle(true)}/>
    </>,
    ]
  })

  const [filtered, setFiltered] = useState(tableData);

  const searchStringHandler = (value) => {
    const searchResult = tableData.filter((data) => {
      return data[0].toLowerCase().includes(value.toLowerCase());
    });
    setFiltered(searchResult);
  };


  let supervisorHead = [
    <>
      <VisitorSearch searchStringHandler={searchStringHandler} />
    </>,
    "Requested Date",
    "P.No",
    "Department",
    "Status",
    "Rejection reason",
    "Visitor Information",
  ];

  return (
    <>
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
        <MyTable data={filtered} heads={supervisorHead} />
      </div>
    </div>
    {modalToggle && (
      <ModalBox
        closeModal={() => {
          setModalToggle(false);
        }}
      >
        <ViewInformation />
      </ModalBox>
    )}
    </>
  );
}
export default Supervisor;
