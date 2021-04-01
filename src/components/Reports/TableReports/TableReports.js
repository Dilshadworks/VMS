import React from "react";
import Tabs from "../../kitchen/Tabs/Tabs";
import { BsBook } from "react-icons/bs";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import { MyTable } from "../../kitchen/MyTable/MyTable";

let reportsHead = [
  "Month",
  "Year",
  "Total Guest",
  "Stay Days",
  "Official Guest",
  "Personal Guest",
  "Labor",
  "View Details",
];

let all = [
  [
    "Jan",
    "2021",
    "90",
    "5 weeks",
    "70",
    "10",
    "10",
    <>
      <CustomButton btnTitle="View Detail" />
    </>,
  ],
  [
    "Feb",
    "2020",
    "50",
    "2 weeks",
    "50",
    "10",
    "20",
    <>
      <CustomButton btnTitle="View Detail" />
    </>,
  ],
];
let official = [
  [
    "Jan",
    "2020",
    "10",
    "4 weeks",
    "20",
    "50",
    "10",
    <>
      <CustomButton btnTitle="View Detail" />
    </>,
  ],
  [
    "Feb",
    "2020",
    "50",
    "5 weeks",
    "60",
    "60",
    "25",
    <>
      <CustomButton btnTitle="View Detail" />
    </>,
  ],
];
let personal = [
  [
    "Jan",
    "2018",
    "45",
    "2 weeks",
    "55",
    "42",
    "55",
    <>
      <CustomButton btnTitle="View Detail" />
    </>,
  ],
  [
    "Feb",
    "2015",
    "22",
    "3 weeks",
    "45",
    "23",
    "28",
    <>
      <CustomButton btnTitle="View Detail" />
    </>,
  ],
];
let labor = [
  [
    "Jan",
    "2016",
    "32",
    "1 weeks",
    "49",
    "53",
    "56",
    <>
      <CustomButton btnTitle="View Detail" />
    </>,
  ],
  [
    "Feb",
    "2012",
    "53",
    "5 weeks",
    "25",
    "49",
    "34",
    <>
      <CustomButton btnTitle="View Detail" />
    </>,
  ],
];

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
            <MyTable data={all} heads={reportsHead} />
          </div>
          <div label="Official">
            <MyTable data={official} heads={reportsHead} />
          </div>
          <div label="Personal">
            <MyTable data={personal} heads={reportsHead} />
          </div>
          <div label="Labor">
            <MyTable data={labor} heads={reportsHead} />
          </div>
        </Tabs>
      </div>
    </div>
  );
}
