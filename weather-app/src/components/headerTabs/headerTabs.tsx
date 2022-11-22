import "./headerTabs.css";
import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Favourites from "../favourites/favourites";
import RecentSearch from "../recentSearch/recentSearch";
import HomeTab from "../homeTab/homeTab";

const HeaderTabs = () => {
  const [value, onChange] = useState("");

  const [time, onChangeTime] = useState("")
  const date = new Date();

  setInterval(function () {
    today();
  }, 1000);

  setInterval(function () {
    todayTime();
  }, 1000);

  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()} `
    );
  };

  const todayTime = () => {
    onChangeTime(
      ` ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
      })}`
    );
  };

  return (
    <div>
      <div className="headerTabsContainer">
        {" "}
        <div className="webTabs">
          <NavLink to="/home" className="Links">
            HOME
          </NavLink>
          <NavLink to="/favourites" className="Links">
            FAVOURITE
          </NavLink>
          <NavLink to="/recents" className="Links">
            RECENT SEARCH
          </NavLink>
        </div>
        <div className="dates">
          <div className="date">{value}&nbsp;&nbsp;{time}</div>
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<HomeTab value={value} time={time} />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recents" element={<RecentSearch />} />
      </Routes>
    </div>
  );
};

export default HeaderTabs;
