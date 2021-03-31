import React from 'react'

import  {VscReport} from 'react-icons/vsc';
import {RiDashboardLine} from 'react-icons/ri';
import {AiOutlineSafetyCertificate} from 'react-icons/ai';
import {MdSupervisorAccount} from 'react-icons/md';
import {RiAdminFill} from 'react-icons/ri';
import Navbar from "../../kitchen/NavBar/Navbar";
import Styles from "./Style.css";

const sidaNavItems = [
    {
        title: 'Dashoard',
        path: '/dashboard',
        icon: <RiDashboardLine />,
        cName:'nav-text'
    },
    {
        title: 'Gate Keeper',
        path: '/gatekeeper',
        icon: <AiOutlineSafetyCertificate />,
        cName:'nav-text'
    },
    {
        title: 'Supervisor',
        path: '/supervisor',
        icon: <MdSupervisorAccount />,
        cName:'nav-text'
    },
    {
        title: 'Administrator',
        path: '/admin',
        icon: <RiAdminFill />,
        cName:'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <VscReport />,
        cName:'nav-text'
    }
  ]

function SidebarData() {
    return(
        <div className="sideBar">
            <header>
                Visitor Management System
            </header>
            <Navbar navItems={sidaNavItems} />
        </div>
    )
}
export default SidebarData


