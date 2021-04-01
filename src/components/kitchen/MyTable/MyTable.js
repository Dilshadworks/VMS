import React from "react";
import Styles from "./Style.css";

export function MyTable({ data, heads }) {
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
              {row.map((tcell, index) => (
                <td key={index}>{tcell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfooter>
          pagination
        </tfooter>
      </table>
    </>
  );
}
