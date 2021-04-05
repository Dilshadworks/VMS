import React, { useState } from "react";
import CustomButton from "../../kitchen/CustomButton/CustomButton";
import ModalBox from "../../kitchen/ModalBox/ModalBox";
import ViewInformation from "../../kitchen/CustomButton/ViewInformation/ViewInformation";
import Styles from "./Style.css";

export function MyTable({ data, heads }) {
  const [modalToggle, setModalToggle] = useState(false);
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
          {data.map((cellData, index) => (
            <tr key={index}>
              <td>{cellData.name}</td>
              <td>{cellData.hiringDate}</td>
              <td>{cellData.mobileNo}</td>
              <td>Value Not available</td>
              <td>{cellData.status}</td>
              <td>Value Not available</td>
              <td>
                <CustomButton
                  btnTitle="View Information"
                  onClick={() => setModalToggle(true)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfooter>Pagination</tfooter>
      </table>
      {modalToggle && (
        <ModalBox
          closeModal={() => {
            setModalToggle(false);
          }}
        >
          <ViewInformation />
        </ModalBox>
      )}
    </>
  );
}
