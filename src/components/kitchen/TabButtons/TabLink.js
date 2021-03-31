import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Style from "./Style.css";

export default function TabLink({ item, id, activeTab }) {
  return (
    <>
      <div
        className="tablinks"
        id={id}
      >
        <img
          className="figure"
          src={item.url}
          alt="bio"
          height="80px"
          width="80px"
        />
        <AiFillCheckCircle
          size="2rem"
          style={{
            paddingTop: 10,
            color: activeTab === id ? "green" : "#369afc",
          }}
        />
        <h6>{item.title}</h6>
      </div>
     
    </>
  );
}
