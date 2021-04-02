import React, { useState } from "react";
import TabLink from "../../kitchen/TabButtons/TabLink";
import Style from "../Style.css";

import user from "../../../images/user.png";
import { RequesterInformation } from "../AddVisitorRecord/RequesterInformation";
import VisitorInformation from "../AddVisitorRecord/VisitorInformation";
import VehicleDetail from "../AddVisitorRecord/VehicleDetail";
import StayingDetails from "../AddVisitorRecord/StayingDetails";

const Visitor = [
  { url: user, title: "1: Requester Information" },
  { url: user, title: "2: Visitor Information" },
  { url: user, title: "3: Visitor Vehicle Information" },
  { url: user, title: "4: Visitor Staying Details" },
];

export default function AddVisitorRecord() {
  const [activeTab, setActiveTab] = useState(0);
  const [percentage, setPercentage] = useState(25);
  const [reqeInfo, setReqInfo] = useState({
    empType: "",
    location: "",
    phNo: "",
    department: "",
    name: "",
    cnic: "",
    gtNo: "",
    noOfGuest: "",
    siteVisit: "",
    VehicleMake: "",
    VehicleModel: "",
    VehicleRegistration: "",
    VehicleLicenseDetail: "",
    guestType: "",
    stayLocation: "",
    checkIn: "",
    fromCity: "",
  });
  const handleNext = (e) => {
    e.preventDefault();
    setActiveTab(activeTab + 1);
    setPercentage(percentage + 25);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setActiveTab(activeTab - 1);
    setPercentage(percentage - 25);
  };
  const handleChangeRequest = (e) => {
    setReqInfo({
      ...reqeInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeVisitor = (e) => {
    console.log("cliclk", e);
    setReqInfo({
      ...reqeInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeVehicle = (e) => {
    console.log("cliclk", e);
    setReqInfo({
      ...reqeInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeStayingDetails = (e) => {
    console.log("cliclk", e);
    setReqInfo({
      ...reqeInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <div className="tabs">
        {Visitor.map((item, i) => {
          return <TabLink item={item} key={i} id={i} activeTab={activeTab} />;
        })}
      </div>
      <div
        className="progressBar"
        style={{
          width: `${percentage}%`,
        }}
      >
        {percentage} %
      </div>
      {activeTab === 0 && (
        <RequesterInformation
          handleNext={handleNext}
          requestInfo={reqeInfo}
          handleChange={handleChangeRequest}
        />
      )}
      {activeTab === 1 && (
        <VisitorInformation
          handleNext={handleNext}
          handleChange={handleChangeVisitor}
          requestInfo={reqeInfo}
          handlePrev={handlePrev}
        />
      )}

      {activeTab === 2 && (
        <VehicleDetail
          handleNext={handleNext}
          handleChange={handleChangeVehicle}
          requestInfo={reqeInfo}
          handlePrev={handlePrev}
        />
      )}

      {activeTab === 3 && (
        <StayingDetails
          handleNext={handleNext}
          handleChange={handleChangeStayingDetails}
          requestInfo={reqeInfo}
          handlePrev={handlePrev}
        />
      )}
    </React.Fragment>
  );
}
