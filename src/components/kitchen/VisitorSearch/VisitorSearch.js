import React from "react";
import Styles from "./Style.css";

function VisitorSearch({ searchStringHandler }) {
  const handleChange = (event) => {
    searchStringHandler(event.target.value);
  };
  return (
    <>
      <input className="serchField" placeholder="search" onChange={handleChange}></input>
    </>
  );
}

export default VisitorSearch;
