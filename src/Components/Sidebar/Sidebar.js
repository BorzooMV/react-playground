import React,{ useContext } from "react";
import './Sidebar.css';
import Profile from "../Profile/Profile";
import SidebarBox from "./SidebarBox/SidebarBox";
import DarkLightBtn from "../DarkLightBtn/DarkLightBtn";
import ThemeContext from "../../Context/themeContext";


const Sidebar = () => {
    return(
        <aside>
            <DarkLightBtn theme={useContext(ThemeContext)} />
            <SidebarBox>
                <Profile />
            </SidebarBox>
        </aside>
    )
}

export default Sidebar;