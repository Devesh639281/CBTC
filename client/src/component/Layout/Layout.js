import React, { useState } from "react";
import Home from "../../pages/Home";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "./Layout.css";
import Menu from "../Menu/Menu";

const Layout = () => {
  const [toggle, setToggel] = useState(true);

  const handleToggel = () => {
    setToggel(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggel}>
              {toggle ? (
                <MdOutlineKeyboardDoubleArrowLeft size={30} />
              ) : (
                <MdKeyboardDoubleArrowRight size={30} />
              )}
            </p>
          </div>
          {/* as a props we use toggle frist we pass the  value of toggele and we use this in menu.js */}
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
