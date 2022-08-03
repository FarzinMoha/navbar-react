import React, { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MYNAV.css";

function MYNAV(props) {
    const scroll = props.scroll;
  const [click, setClick] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const menuItemHandler = (id) => {
    const value = id.target.textContent;
    setClick(value);
    setShowMenu(false);
  };
  
  return (
    <header>
      <div className={scroll || showMenu ? "header scrolled" : "header"}>
        <h1>LOGO</h1>
        <div className={showMenu ? "items active" : "items"}>
          <ScrollIntoView selector="#home">
            <li
              id="item1"
              onClick={(id) => menuItemHandler(id)}
              className={click === "HOME" ? "color" : ""}
            >
              HOME
            </li>
          </ScrollIntoView>
          <ScrollIntoView selector="#about">
            <li
              id="item2"
              onClick={(id) => menuItemHandler(id)}
              className={click === "ABOUT" ? "color" : ""}
            >
              ABOUT
            </li>
          </ScrollIntoView>
          <ScrollIntoView selector="#contact">
            <li
              id="item3"
              onClick={(id) => menuItemHandler(id)}
              className={click === "CONTACT" ? "color" : ""}
            >
              CONTACT
            </li>
          </ScrollIntoView>
        </div>
        <div onClick={() => setShowMenu(!showMenu)} className="ham">
          <GiHamburgerMenu className="ham-icon" />
        </div>
      </div>
    </header>
  );
}

export default MYNAV;
