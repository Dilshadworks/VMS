import React from "react";
import Tabs from "../../kitchen/Tabs/Tabs";
import VisitorThead from "../../kitchen/VisitorThead/VisitorThead";
import VisitorTbody from "../../kitchen/VisitorTbody/VisitorTbody";
import { BsBook } from "react-icons/bs";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import Table from "../../kitchen/Table/Table"
let all = [
  "Month",
  "Year",
  "Total Guest",
  "Stay Days",
  "Official Guest",
  "Personal Guest",
  "Labor",
  "View Details",
];
let official = [
  "Month",
  "Year",
  "Total Guest",
  "Stay Days",
  "Official Guest",
  "Personal Guest",
  "Labor",
  "View Details",
];
let personal = [
  "Month",
  "Year",
  "Total Guest",
  "Stay Days",
  "Official Guest",
  "Personal Guest",
  "Labor",
  "View Details",
];
let labor = [
  "Month",
  "Year",
  "Total Guest",
  "Stay Days",
  "Official Guest",
  "Personal Guest",
  "Labor",
  "View Details",
];
let tbody = [
  {
    month: "March",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
  {
    month: "Feb",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
  {
    month: "Jan",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
  {
    month: "Dec",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
  {
    month: "Nov",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
  {
    month: "Oct",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
];
let offictbody = [
  {
    month: "March",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
  {
    month: "Feb",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
  {
    month: "Jan",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
];
let personalTbody = [
  {
    month: "Oct",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
  {
    month: "Nov",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
];
let laborTbody = [
  {
    month: "Nov",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
  {
    month: "Oct",
    year: "2021",
    totalGuest: "90",
    stayDay: "5 weeks",
    offiGuest: "70",
    persGuest: "10",
    labor: "10",
    VDetail: "",
  },
];
// let tepObj ={
//   tilte: 'view Details',
//   route: '/myNewRoute'
// }
export default function TableReports() {
  return (
    <div className="visitorRecord">
      <div className="bannerTop">
        <p>
          <BsBook size={32} style={{ color: "#414141", marginRight: "15px" }} />
          Reports
        </p>
        <div className="scanButton">
          <CustomButton btnTitle="Filter" />
        </div>
      </div>
      <div className="tableStructure">
        <Tabs>
          <div label="All">
            {/* <table className="table">
              <thead className="thead">
                <tr className="tr">
                  <VisitorThead TheadItem={all} />
                </tr>
              </thead>
              <tbody className="tbody">
                <VisitorTbody TbodyItems={tbody} myButtonTitle="view Details" />
              </tbody>
            </table> */}
             <Table Columns={all} rows={tbody} isAdministorCompTable="false" />
            {/* <div><VisitorPagination/></div> */}
          </div>
          <div label="Official">
            <table className="table">
              <thead className="thead">
                <tr className="tr">
                  <VisitorThead TheadItem={official} />
                </tr>
              </thead>
              <tbody className="tbody">
                <VisitorTbody
                  TbodyItems={offictbody}
                  myButtonTitle="view Details"
                />
              </tbody>
            </table>
            <div>{/*<VisitorPagination/>*/}</div>
          </div>
          <div label="Personal">
            <table className="table">
              <thead className="thead">
                <tr className="tr">
                  <VisitorThead
                    TheadItem={personal}
                    myButtonTitle="view Details"
                  />
                </tr>
              </thead>
              <tbody className="tbody">
                <VisitorTbody
                  TbodyItems={personalTbody}
                  myButtonTitle="view Details"
                />
              </tbody>
            </table>
          </div>
          <div label="Labor">
            <table className="table">
              <thead className="thead">
                <tr className="tr">
                  <VisitorThead
                    TheadItem={labor}
                    myButtonTitle="view Details"
                  />
                </tr>
              </thead>
              <tbody className="tbody">
                <VisitorTbody
                  TbodyItems={laborTbody}
                  myButtonTitle="view Details"
                />
              </tbody>
            </table>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
