import React from "react";
import Styles from "./Style.css";

function VisitorSearch({ searchStringHandler }) {

  return (
    <>
      <input className="serchField" placeholder="search" onChange={(e)=> searchStringHandler(e.target.value)}></input>
    </>
  );
}

export default VisitorSearch;
