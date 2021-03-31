import React from "react";
import "./style.css";

function Carrds(props) {
  return (
    <div className="card">
      <div className="cardTitle">
      <b>{props.value}</b>
      <p>{props.text1}</p>
      </div>
      {props.percent}
      <p className="cardSubTitle">{props.text2}</p>
    </div>
  );
}
export default Carrds;
