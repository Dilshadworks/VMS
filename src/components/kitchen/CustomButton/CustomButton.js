import React from "react";
import Style from "./Style.css";

export default function CustomButton({ btnTitle, onClick, disabled }) {
  return (
    <>
      <button
        className="btnPrimary"
        type="submit"
        onClick={onClick}
        disabled={disabled}
      >
        {btnTitle}
      </button>
    </>
  );
}
