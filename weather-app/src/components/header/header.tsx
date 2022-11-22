import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="headerContainer">
      <div className="webHeader">
        <div className="logo">
          <img src={require("../../assests/logo_web.png")} alt="" />
        </div>
        <div className="searchFiled">
          <form className="formcontainer">
            <div className="inputField">
              <input
                type="text"
                className="search"
                name="search"
                placeholder="Search city"
              />
            </div>
            <div className="searchIcn">
              <img
                src={require("../../assests/icon_search_white.png")}
                alt=""
                className="searchIcn"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mobileHeader">
        <div className="mobileLeft">
          <div className="burgerMenu">
            <img
              src={require("../../assests/icon_menu_white.png")}
              alt=""
              className="burger"
              onClick={() => setSideNav(true)}
            />
          </div>
          <div className="mobileLogo">
            <img
              src={require("../../assests/logo.png")}
              alt=""
              className="mobLogo"
            />
          </div>
        </div>
        <div className="mobileRight">
          <img src={require("../../assests/icon_search_white.png")} alt="" />
        </div>
      </div>
      {sideNav ? (
        <div className="sideBarConatiner">
          <NavLink
            to="/home"
            className="LinksName"
            onClick={() => setSideNav(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/favourites"
            className="LinksName"
            onClick={() => setSideNav(false)}
          >
            FAVOURITE
          </NavLink>
          <NavLink
            to="/recents"
            className="LinksName"
            onClick={() => setSideNav(false)}
          >
            RECENT SEARCH
          </NavLink>
          <div
            className="close"
            onClick={() => {
              setSideNav(false);
            }}
          ></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
