import { ArrowCircleUp, Forum } from "@mui/icons-material";
import moment from "moment";
import React from "react";
import { ThemeContext } from "../../../../../context/theme/ThemeContext";
import Style from "./discussitem.module.scss";

function DiscussItem(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <li className={Style.discuss_item}>
      <div className={Style.header_row}>
        <img src="/img/instructor.png" loading="lazy" />
        <div className={Style.col_dis}>
          <div>
          <h3>COURSE UPDATE 4/19/2021</h3>
          <p>Hello allI've pushed a major course update today, and I understand this may disrupt your learning sch</p>
          </div>
          <div className={Style.row_dis}>
            <b className={Style.a_attribute}>Stephane Marek</b>
            <b className={Style.a_attribute}>.Lecture 9.</b>
            <span>{moment().fromNow()}</span>
          </div>
        </div>
        <div className={Style.col_up_dis}>
        <div className={Style.row_dis}>
            <button className={Style.upvote}>323<ArrowCircleUp /></button>
        </div>
        <div className={Style.row_dis}>
            <button className={Style.upvote}>323<Forum /></button>
        </div>
        </div>
      </div>
    </li>
  );
}

export default DiscussItem;
