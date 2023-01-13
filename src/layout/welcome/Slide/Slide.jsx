import { PlayCircle } from "@mui/icons-material";
import React from "react";
import Style from "./slide.module.scss";

function Slide(props) {
  return (
    <div className={Style.slide}>
      <div className={Style.leftContainer}>
        <div className={Style.textColumn}>
          <h5 class="display-6 mb-0 w-20">
            Lets <b className="text-primary">Begin</b>
          </h5>
          <h1 class="display-2 mb-0 w-20">
            Lets Find The Right <b className="text-primary">Course</b> For You
          </h1>
          <dd >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dignissim, sem non convallis molestie. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam dignissim, sem non convallis
            molestie.
          </dd>
          <div className={Style.buttonRow}>
            <a className="btn btn-primary m-1 text-white">Register</a>
            <button className="btn btn-outline-dark m-1">
              <em className="m-1">
                <PlayCircle />
              </em>
              Play Video
            </button>
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
