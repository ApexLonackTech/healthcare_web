import React, { useContext, useEffect, useState } from "react";
import "./course.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import Accordion from "../../../components/Accordion/Accordion";
import { Home, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import MenuSide from "../../../layout/MenuSide/student/MenuSide";
import {
  HomeStudentLayout,
  AnnounceLayout,
  DiscussList,
  Grade,
  Module,
} from "../../../layout/Student";
import { useCallback } from "react";
import useScrollTop from "../../../effect/Scroll";
import ModalLayout from "../../../components/Modal/Modal";

import { useQuery } from "../../../utils/query-parameter";

const Course = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);
  const [pop, setPop] = useState(false);
  const [ref, top] = useScrollTop();

  let query = useQuery();

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#545be8" : "#545be8",
    },
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (query.get("tab") && query.get("tab") === "discuss") {
      setIndex(2);
    }
  }, [query.get("tab")]);

  const menuChange = (e) => {
    setIndex(e);
    window.scrollTo(0, 0);
  };

  const popMenu = () => {
    setPop(pop ? false : true);
  };

  return (
    <div
      className={
        theme === "light"
          ? "courses_container l_b d_t"
          : "courses_container d_b l_t"
      }
    >
      <Sidebar menu="course" />
      <main className="content_container">
        <div className="side_tab_mobile">
          <div className={pop ? "show_menu_tab" : "hide_menu_tab"}>
            <MenuSide onClick={menuChange} tab={index} />
          </div>
          <button onClick={popMenu}>
            Course Tab
            {!pop && (
              <KeyboardArrowDown style={{ marginTop: -10 }} fontSize="large" />
            )}
            {pop && (
              <KeyboardArrowUp style={{ marginTop: -10 }} fontSize="large" />
            )}
          </button>
        </div>
        <section className="top_section">
          <ul className={theme === "light" ? "l_w_b" : "l_t"}>
            <li>
              {" "}
              <Link to={"/"}>
                <Home /> Home
              </Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <span>Clinical Laboratory</span>
            </li>
          </ul>
        </section>

        <div className="tab_container" ref={ref}>
          {!pop && <MenuSide onClick={menuChange} tab={index} />}
          {/* <div className="swipe_left">
            <a className="swipe l_t">
              <SwipeLeftSharp fontSize="large" />
            </a>
           
          </div> */}

          {index == 0 && <HomeStudentLayout />}
          {index == 1 && <AnnounceLayout />}
          {index == 2 && <DiscussList />}
          {index == 3 && <Grade />}
          {index == 4 && <Module />}
        </div>
      </main>
    </div>
  );
};

export default Course;
