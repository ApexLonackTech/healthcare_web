import React, { useContext } from "react";
import Style from "./sidebar.module.scss";
import {
  AccountCircle,
  BookTwoTone,
  CalendarMonth,
  CalendarViewDay,
  CalendarViewMonth,
  Dashboard,
  HelpCenter,
  HistoryToggleOff,
  MailOutline,
  Menu,
  MoreVert,
} from "@mui/icons-material";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import Link from "next/link";

function Sidebar(props) {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className={Style.sideMenu}>
      <div className={Style.logoContainer}>
        <div className={Style.logo}>
          <img src="/Logo.png" loading="lazy" />
          <span>Health Practitioner</span>
        </div>
        <button>
          <MoreVert />
        </button>
      </div>
      <div className={Style.footer_nav}>
        <Link href="/student/dashboard">
          <a
            className={`${
              props.menu === "home"
                ? Style.menuList + " active"
                : Style.menuList
            }`}
          >
            <Dashboard style={{ marginTop: 5 }} fontSize="large" />
            <span>Dashboard</span>
          </a>
        </Link>
        <Link href="/student/courses">
          <a
            className={`${
              props.menu === "course"
                ? Style.menuList + " active"
                : Style.menuList
            }`}
          >
            <BookTwoTone style={{ marginTop: 5 }} fontSize="large" />
            <span>Courses</span>
          </a>
        </Link>
        <div className={Style.menuList}>
          <CalendarMonth style={{ marginTop: 5 }} fontSize="large" />
          <span>Calendar</span>
        </div>
        <div className={Style.menuList}>
          <MailOutline style={{ marginTop: 5 }} fontSize="large" />
          <span>Inbox</span>
        </div>
        <div className={Style.menuList}>
          <AccountCircle style={{ marginTop: 5 }} fontSize="large" />
          <span>Account</span>
        </div>
      </div>
      <aside
        id="sidebar_nav"
        className={
          theme === "light"
            ? Style.sidebar_nav + " l_s_b"
            : Style.sidebar_nav + " d_s_b"
        }
      >
        <div className={Style.logoContainer}>
          <img src="/Logo.png" loading="lazy" />
          <span>Health Practitioner</span>
        </div>
        <div className={Style.lineDiv} />
        <div className={Style.menuContainer}>
          <li className={`${props.menu === "home" ? "active" : ""}`}>
          <Link href="/student/home">
            <a
              className={`${
                props.menu === "home"
                  ? Style.itemList + " active"
                  : Style.itemList
              }`}
            >
              <Dashboard fontSize="large" />
              <span>Dashboard</span>
            </a>
            </Link>
          </li>
          <li className={`${props.menu === "course" ? "active" : ""}`}>
          <Link href="/student/courses">
            <a
              to={"/courses"}
              className={`${
                props.menu === "course"
                  ? Style.itemList + " active"
                  : Style.itemList
              }`}
            >
              <BookTwoTone fontSize="large" />
              <span>Courses</span>
            </a>
            </Link>
          </li>
          <li>
            <div className={Style.Line}></div>
            <a className={Style.itemList}>
              <CalendarMonth fontSize="large" />
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <div className={Style.Line}></div>
            <a className={Style.itemList}>
              <MailOutline fontSize="large" />
              <span>Inbox</span>
            </a>
          </li>
          <li>
            <div className={Style.Line}></div>
            <a className={Style.itemList}>
              <HelpCenter fontSize="large" />
              <span>Help</span>
            </a>
          </li>
          <li>
            <div className={Style.Line}></div>
            <a className={Style.itemList}>
              <HistoryToggleOff fontSize="large" />
              <span>History</span>
            </a>
          </li>
          <li>
            <div className={Style.Line}></div>
            <a className={Style.itemList}>
              <AccountCircle fontSize="large" />
              <span>Account</span>
            </a>
          </li>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
