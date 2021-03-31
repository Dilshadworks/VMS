import React from "react";
import Style from "./Style.css";

export default function CustomButton({ btnTitle, onClick }) {
  return (
    <>
      <button
        className="btnPrimary"
        type="submit"
        onClick={onClick}
      >
        {btnTitle}
      </button>
    </>
  );
}
