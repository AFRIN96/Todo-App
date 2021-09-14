import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./menubar.css";
const navLinks = [
  "Local State Management",
  "Redux State Management",
  "Context State Management",
];

function Menubar() {
  const [menuStatus, setmenuStatus] = useState("open");
  const [style, setStyle] = useState("menu");

  const handleClick = () => {
    switch (menuStatus) {
      case "open":
        setmenuStatus("close");
        setStyle("menu active");
        break;
      case "close":
        setmenuStatus("open");
        setStyle("menu");
        break;
      default:
    }
  };

  return (
    <div className="menu-bar">
      <ul className="menubar-list">
        <li><FaBars className="fa-bars" onClick={handleClick} /></li>
        <li>Protected route</li>
        <li>Unprotected route</li>
      </ul>
      
      <div className={style}>
        <ul>
          <b>React Accelator</b>
          {navLinks.map((navs) => (
            <li>{navs}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menubar;
