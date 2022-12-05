import { PlayCircle } from "@mui/icons-material";
import React from "react";
import Style from  "./slide.module.scss";

function Slide(props) {
  return (
    <div className={Style.slide}>
      <div className={Style.leftContainer}>
        <div className={Style.textColumn}>
          <h5 className={Style.ad}>Let's <b>Begin</b></h5>
          <h2 className={Style.title}>
            Let's Find The Right <b>Course</b> For You
          </h2>
          <span className={Style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</span>
        <div className={Style.buttonRow}>
            <a className={Style.register}>Register</a>
            <button className={Style.play}> <em><PlayCircle /></em>Play Video</button>
        </div>
        </div>
      </div>
      <div className={Style.rightContainer}>
        <img src="/img/slide.png" loading="lazy" />
      </div>
    </div>
  );
}

export default Slide;
