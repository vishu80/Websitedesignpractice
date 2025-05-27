import React from "react";
import "./Header.css";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { ICON_COLOR, ICON_SIZE } from "../constant";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerDiv">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.Dz0oWVCLZQGg0ZQTBKZjIwHaHa&pid=Api&P=0&h=220"
            alt="Health care"
          />
        </div>
        <div className="flexGrow">
          <div className="searchWrapper">
            <CiSearch className="searchIcon" size={ICON_SIZE} />
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
            />
            <IoIosNotifications size={ICON_SIZE} color={ICON_COLOR} />
          </div>

          <div className="pushRight">
            <div className="pushRightdiv">
              <div className="avatar">
                <RxAvatar
                  size={ICON_SIZE}
                  color="white"
                  style={{ alignItems: "center" }}
                />
              </div>
              <button className="btnSize">
                <span style={{ color: "white", fontSize: "20px" }}>+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
