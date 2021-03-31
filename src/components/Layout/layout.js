import React from "react";
import SidebarData from "./AsideBar/SidebarData";
import Styles from "./layout.css";

export default function Layout(props) {
  return (
    <>
      <div className="vms-layout">
          <SidebarData />
          <main className="main-body">
                {props.children}
          </main>
      </div>
    </>
  );
}
