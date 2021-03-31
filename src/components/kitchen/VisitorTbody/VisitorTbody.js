import React from "react";
import "./Style.css";
import CustomButton from "../../kitchen/CustomButton/CustomButton";

export default function VisitorTbody({ TbodyItems, isAdministorCompTable }) {
  return (
    <>
      {isAdministorCompTable == "true" 
        ? TbodyItems.map((items, key) => {
            return (
              <tr key={key}>
                {Object.keys(items).map((item) => (
                  <td>{items[item]}</td>
                ))}
                <td>
                  <CustomButton btnTitle="Edit" />
                </td>
                <td>
                  <CustomButton btnTitle="Delete" />
                </td>
              </tr>
            );
          })
        : TbodyItems.map((items, key) => {
            return (
              <tr key={key}>
                {Object.keys(items).map((item) => (
                  <td>{items[item]}</td>
                ))}
                <td>
                  <CustomButton btnTitle="View Information" />
                </td>
              </tr>
            );
          })}

    </>
  );
}
