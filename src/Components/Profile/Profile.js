import React from "react";
import './Profile.css';
import users from "./Users.js";

const Profile = () => {
    return(
        <div className="Profile">
            <div className="image-container">
                {users[0]["profile_img"]["isAvalable"] &&
                    <img src={users[0]["profile_img"].url} alt={users[0]["profile_img"].alt} />
                }
            </div>
            <div className="info">
                <div className="info-row">
                    <span>Firstname</span>
                    <span>{users[0]["first_name"] || "Unknown"}</span>
                </div>
                <div className="info-row">
                    <span>Lastname</span>
                    <span>{users[0]["last_name"] || "Unknown"}</span>
                </div>
                <div className="info-row">
                    <span>ID</span>
                    <span>{users[0]["id"] || "Unknown"}</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;