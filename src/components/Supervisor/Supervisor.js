import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Carrds from "../kitchen/Cards/Carrds";
import {MyTable} from "./MyTable/MyTable";
import VisitorSearch from "../kitchen/VisitorSearch/VisitorSearch";

function Supervisor() {
  useEffect(async () => {
    const result = await axios(
      "http://vmslocal:61966/api/Employee/GetEmployeesList"
    );

    setApiData(result.data);
  }, []);
  const [apiData, setApiData] = useState([]);
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
          <MyTable data={apiData} heads={supervisorHead}/>
        </div>
      </div>
    </>
  );
}
export default Supervisor;
