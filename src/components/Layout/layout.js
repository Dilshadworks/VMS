import React from "react";
import LoginForm from "../Auth/LoginForm";
import SidebarData from "./AsideBar/SidebarData";
import Styles from "./layout.css";

export default function Layout(props) {
  return (
    <>
      <div className="vms-layout">
          <SidebarData />
          <section className="header-top">
            {/* <LoginForm /> */}
          </section>
          <main className="main-body">
                {props.children}
          </main>
      </div>
    </>
  );
}
