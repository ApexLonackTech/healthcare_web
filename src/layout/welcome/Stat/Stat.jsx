import { PlayCircle } from "@mui/icons-material";
import React from "react";
import Style from  "./stat.module.scss";

function Stat(props) {
  return (
    <div className={Style.stat}>
      <div className={Style.leftContainer}>
        <img src="/img/stat.png" loading="lazy" />
      </div>
      <div className={Style.rightContainer}>
        <div className={Style.textColumn}>
          <h5 className={Style.ad}>SELECTED COURSES</h5>
          <h2 className={Style.title}>People Taking Courses</h2>
          <span className={Style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dignissim, sem non convallis molestie.
          </span>
          <div className={Style.row_stat}>
            <div className={Style.col}>
                <span className={Style.number}>6,000</span>
                <span className={Style.text}>Peoples View</span>
            </div>
            <div className={Style.col}>
                <span className={Style.number}>4,000</span>
                <span className={Style.text}>Users</span>
            </div>
            <div className={Style.col}>
                <span className={Style.number}>8</span>
                <span className={Style.text}>Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
