import React from "react";
import { Link } from "react-router-dom";
// import { IconContext } from "react-icons";
import Styles from "./Style.css";

function Navbar({ navItems }) {
  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            {navItems.map((item, i) => (
              <li key={i} className="nav-text active">
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}
export default Navbar;
