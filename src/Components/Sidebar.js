import React from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { ICON_SIZE } from "../constant";
import { MdOutlineContactSupport } from "react-icons/md";

import { IoSettingsOutline } from "react-icons/io5";
import { PiChatsCircle } from "react-icons/pi";
import { FcStatistics } from "react-icons/fc";
import { SiGotomeeting } from "react-icons/si";


import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sideBar">
     
      <nav className="nav-container"> 
        <div>
          <h5>General</h5>
          <ul className="no-bullet ">
            {/* <li style={{display:'flex',flexDirection:'row',gap:'15px',alignItems:'center'}}><AiTwotoneAppstore size={ICON_SIZE}/>DashBoard</li> */}
                        <li className="list"><AiTwotoneAppstore size={ICON_SIZE}/>DashBoard</li>

             <li className="list"><FaHistory size={ICON_SIZE}/>History</li>
             <li className="list"><SlCalender size={ICON_SIZE}/>Calender</li>
             <li className="list"><SiGotomeeting size={ICON_SIZE}/>Appointments</li>
             <li className="list"><FcStatistics size={ICON_SIZE}/>Statistics</li>
          </ul>
        </div>
         <div>
          <h5>Tools</h5>
          <ul className="no-bullet ">
             <li className="list"><PiChatsCircle size={ICON_SIZE}/>Chats</li>
                          <li className="list"><MdOutlineContactSupport size={ICON_SIZE}/>Support</li>

          
          </ul>
        </div>
        <div>
          <ul className="no-bullet ">
             <li className="list"><IoSettingsOutline size={ICON_SIZE}/>Settings</li>
          
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
