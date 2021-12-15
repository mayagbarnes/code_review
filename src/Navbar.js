import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import "./NavBar.css";

const SidebarData = [
  {
    title: "Home",
    path: "https://streamlit.io/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Documentation",
    path: "https://docs.streamlit.io/",
    icon: <HiIcons.HiOutlineDocument />,
    cName: "nav-text"
  },
  {
    title: "Careers",
    path: "https://streamlit.io/careers",
    icon: <BsIcons.BsPersonCheckFill />,
    cName: "nav-text"
  }
];

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div className="menu-bars close">
                <AiIcons.AiOutlineClose />
              </div>
            </li>
            {SidebarData.map((item, idx) => {
              return (
                <li key={idx} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span> {item.title} </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
