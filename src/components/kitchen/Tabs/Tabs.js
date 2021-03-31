import React from "react";
import { useState } from "react";
import "./Style.css";

export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };
  return (
    <>
      <ul className="bannerBottom tabsBtn noPadding">
        <p>Monthaly Visitor Reports</p>
        {props.children.map((tab) => {
          const label = tab.props.label;
          return (
            <li className={label == activeTab ? "current" : ""} key={label}>
              <a href="#" onClick={(e) => handleClick(e, label)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      {props.children.map((one) => {
        if (one.props.label == activeTab)
          return (
            <div key={one.props.label}>
              {one.props.children}
            </div>
          );
      })}
    </>
  );
}
