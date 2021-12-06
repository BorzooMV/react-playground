import React from "react";
import './Sidebar.css';
import Profile from "../Profile/Profile";
import SidebarBox from "./SidebarBox/SidebarBox";

const Sidebar = () => {
    return(
        <aside>
            <SidebarBox>
                <Profile />
            </SidebarBox>
        </aside>
    )
}

export default Sidebar;