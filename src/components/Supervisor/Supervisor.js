import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from 'axios'
import Carrds from "../kitchen/Cards/Carrds";
import ModalBox from "../kitchen/ModalBox/ModalBox";
import { MyTable } from "../kitchen/MyTable/MyTable";
import CustomButton from "../kitchen/CustomButton/CustomButton";
import VisitorSearch from "../kitchen/VisitorSearch/VisitorSearch";
import ViewInformation from "../kitchen/CustomButton/ViewInformation/ViewInformation";
import { connect } from "react-redux";
import { getSupervisorList, supervisorStats } from "../../Redux/Actions/supervisorAction";

let supervisorData = [
  ["Ahmed", "54545677-5", "21-2-2021", "DHA", "Meeting", "..."],
  ["Ahmed", "54545677-5", "21-2-2021", "DHA", "Meeting", "..."],
  ["Ghumman", "54545677-5", "21-2-2021", "DHA", "Meeting", "..."],
];
function Supervisor(props) {
  // useEffect(async () => {
  //   await props.supervisorStats();
  //   await props.getSuperVisors();
    
  // }, []);
  const [apiData, setApiData] = useState('')
  const [modalToggle, setModalToggle] = useState(false);
  const tableData = supervisorData.map((data) => {
    return [
      ...data,
      <>
        <CustomButton
          btnTitle="View Information"
          onClick={() => setModalToggle(true)}
        />
      </>,
    ];
  });

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

  // useEffect(async () => {
  //   const result = await axios(
  //     'http://vmslocal:61966/api/Employee/GetEmployeesList',
  //   );
  //   setApiData(result.data);
  // },[]);

console.log('here is apidataaa', apiData)
  return (
    <>
      <div className="supervisor">
        <p>Supervisor</p>
        <span>Statistic</span>
        <div className="CardsList">
          <Carrds
            text1="Guest"
            value={8}
            text2="Checked in today"
          />
          <Carrds
            value={4}
            text2="Checked out today"
          />
          <Carrds
            text1="Out of 100"
            value={0}
            text2="Number of todayLabourPermitIssued"
          />
          {/* <Carrds value={30} text2="Number of expected visitor" /> */}
        </div>
        <div className="tableStructure">
          <div className="bannerBottom">
            <Link to="/CheckedIn"> Checked In</Link>
            <Link to="/CheckedOut"> Checked Out</Link>
          </div>
          <MyTable data={tableData} heads={supervisorHead} />
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

// const mapStateToProps = (state) => ({
//   todayCheckOutGuest: state.supervisor.todayCheckOutGuest,
//   supervisorList : state.supervisor.superVisorList
// });
// const mapDispatchToProps = (dispatch) => {
//   return {
//     supervisorStats: () => {
//       dispatch(supervisorStats());
//     },
//     getSuperVisors: () => {
//       dispatch(getSupervisorList());
//     },
//   };
// };
export default Supervisor;
