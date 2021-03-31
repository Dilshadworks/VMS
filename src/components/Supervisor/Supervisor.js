import React from "react";
import "./style.css";
import "./style.css";
import VisitorThead from "../kitchen/VisitorThead/VisitorThead";
import VisitorTbody from "../kitchen/VisitorTbody/VisitorTbody";
import CustomButton from "../kitchen/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import Carrds from "../kitchen/Cards/Carrds";
import VisitorSearch from "../kitchen/VisitorSearch/VisitorSearch";
import Table from "../kitchen/Table/Table";
// import { PaginatedTable } from "../kitchen/PaginatedTable/PaginatedTable";
import {PaginatedTable} from "../kitchen/PaginatedTable/PaginatedTable";

let thead = [
  "Requested Date",
  "P.No",
  "Department",
  "Status",
  "Rejection reason",
  "Visitor Information",
];
let tbody = [
  {
    name: "M Razi",
    date: "21 Mar 2021",
    pNo: "4342",
    dep: "JC",
    status: "Approved",
    rejectionReason: " . ",
  },
  {
    name: "Alex Jon",
    date: "21 Mar 2021",
    pNo: "4342",
    dep: "JC",
    status: "Approved",
    rejectionReason: " . ",
  },
  {
    name: "Alex Jon",
    date: "21 Mar 2021",
    pNo: "4342",
    dep: "JC",
    status: "Approved",
    rejectionReason: " . ",
  },
  {
    name: "Alex Jon",
    date: "21 Mar 2021",
    pNo: "4342",
    dep: "JC",
    status: "Approved",
    rejectionReason: " . ",
  },
  {
    name: "M Razi",
    date: "21 Mar 2021",
    pNo: "4342",
    dep: "JC",
    status: "Approved",
    rejectionReason: " . ",
  },
];
function Supervisor() {
  const [searchString, setSearchString] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);

  React.useEffect(() => {
    let results = [];
    if (searchString === "") results = tbody;
    else
      results = tbody.filter((person) => {
        return person.name.toLowerCase().includes(searchString.toLowerCase());
      });
    setSearchResult(results);
  }, [searchString]);
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
        {/* <table className="table abcd">
          <thead className="thead">
            <tr className="tr">
              <th>
                <VisitorSearch searchStringHandler={setSearchString} />
              </th>
              <VisitorThead TheadItem={thead} />
            </tr>
          </thead>
          <tbody className="tbody">
            <VisitorTbody TbodyItems={searchResult} myButtonTitle="View Information"/>
          </tbody>
        </table> */}
        {/* <Table Columns={thead} rows={tbody} isAdministorCompTable="false" isButton="true"/> */}
        <PaginatedTable  Columns={thead} rows={tbody} isAdministorCompTable="false" />
      </div>
    </div>
  );
}
export default Supervisor;
