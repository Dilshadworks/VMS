import React from "react";
import Style from "./Style.css";

export default function DropDown({ name, id, Option, handle }) {
  return (
    <>
      <select name={name} id={id} className="dropdown" onChange={handle}>
        {Option.map((item, i) => {
          return (
            <option key={i} name={name} value={item.text}>
              {" "}
              {item.text}{" "}
            </option>
          );
        })}
      </select>
      <svg
        class="caret icon iconOutlined"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 10l5 5 5-5z"></path>
      </svg>
  </>
  );
}
