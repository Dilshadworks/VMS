import React from "react";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import Styles from "./Style.css";

export function MyTable({ data, heads }) {
  console.log('here are props', data)
  return (
    <>
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            {heads.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((row, index) => (
            <tr key={index}>
              {/* {row.map((tcell, index) => (
                <td key={index}>{tcell}</td>
              ))} */}
              <td>{row.name}</td>
              <td>{row.name}</td>
              <td>{row.pNunber}</td>
              <td>{row.department}</td>
              <td>{row.status}</td>
              <td>{row.name}</td>
              {/* <td><CustomButton
          btnTitle="View Information"
          onClick={() => setModalToggle(true)}
        /></td> */}
            </tr>
          ))}
        </tbody>
        {/* <tfooter>
          pagination
        </tfooter> */}
      </table>
    </>
  );
}