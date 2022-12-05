import React, { useContext } from "react";
import {
  Announcement,
  Assignment,
  Brightness4,
  ChatBubble,
  Close,
  Grade,
  Handshake,
  HandshakeRounded,
  Handyman,
  Home,
  HomeMini,
  Note,
  OpenInNew,
  People,
  Quiz,
  SwipeLeftSharp,
  WorkspacePremium,
} from "@mui/icons-material";
import "./menuside.module.scss";
import { ThemeContext } from "../../../../context/theme/ThemeContext";

function MenuSide(props) {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <section
      className={
        theme === "light" ? "course_tab l_r_b d_t" : "course_tab d_r_b l_t"
      }
    >
     
      <ul>
        <li
          onClick={() => props.onClick(0)}
          className={
            theme === "light"
              ? props.tab == 0
                ? "active"
                : "" + "l_w_b"
              : props.tab == 0
              ? "active"
              : "" + " l_t"
          }
        >
          <b>
            <Home style={{ marginRight: 10 }} /> Home
          </b>
        </li>
        <li
          onClick={() => props.onClick(1)}
          className={
            theme === "light"
              ? props.tab == 1
                ? "active"
                : "" + "l_w_b"
              : props.tab == 1
              ? "active"
              : "" + " l_t"
          }
        >
          <b>
            <Announcement style={{ marginRight: 10 }} /> Announcement
          </b>{" "}
          <span>2</span>
        </li>
        <li
          onClick={() => props.onClick(2)}
          className={
            theme === "light"
              ? props.tab == 2
                ? "active"
                : "" + "l_w_b"
              : props.tab == 2
              ? "active"
              : "" + " l_t"
          }
        >
          <b>
            <ChatBubble style={{ marginRight: 10 }} /> Discussion
          </b>
        </li>
        <li
          onClick={() => props.onClick(3)}
          className={
            theme === "light"
              ? props.tab == 3
                ? "active"
                : "" + "l_w_b"
              : props.tab == 3
              ? "active"
              : "" + " l_t"
          }
        >
          <b>
            <Grade style={{ marginRight: 10 }} /> Grades
          </b>
        </li>
        <li
          onClick={() => props.onClick(4)}
          className={
            theme === "light"
              ? props.tab == 4
                ? "active"
                : "" + "l_w_b"
              : props.tab == 4
              ? "active"
              : "" + " l_t"
          }
        >
          <b>
            <Note style={{ marginRight: 10 }} /> Modules
          </b>
        </li>
        <li
          onClick={() => props.onClick(5)}
          className={
            theme === "light"
              ? props.tab == 5
                ? "active"
                : "" + "l_w_b"
              : props.tab == 5
              ? "active"
              : "" + " l_t"
          }
        >
          <b>
            <Quiz style={{ marginRight: 10 }} /> Quizzes
          </b>{" "}
          <span>1</span>
        </li>
        <li
          onClick={() => props.onClick(6)}
          className={
            theme === "light"
              ? props.tab == 6
                ? "active"
                : "" + "l_w_b"
              : props.tab == 6
              ? "active"
              : "" + " l_t"
          }
        >
          <b>
            <Assignment style={{ marginRight: 10 }} /> Assignment
          </b>{" "}
          <span>2</span>
        </li>
        <li
          onClick={() => props.onClick(7)}
          className={
            theme === "light"
              ? props.tab == 7
                ? "active"
                : "" + "l_w_b"
              : props.tab == 7
              ? "active"
              : "" + " l_t"
          }
        >
          <b>
            <People style={{ marginRight: 10 }} /> People
          </b>{" "}
          <span>30</span>
        </li>
        <li
          onClick={() => props.onClick(8)}
          className={
            theme === "light"
              ? props.tab == 8
                ? "active"
                : "" + "l_w_b"
              : props.tab == 8
              ? "active"
              : "" + " l_t"
          }
        >
          <b>
            <WorkspacePremium style={{ marginRight: 10 }} /> Certificate
          </b>{" "}
          <span>1</span>
        </li>
      </ul>
    </section>
  );
}

export default MenuSide;
