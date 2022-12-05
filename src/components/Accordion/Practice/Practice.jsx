import {
  ArrowDownward,
  ArrowDropDown,
  ArrowRight,
  ArrowUpward,
  CheckCircle,
  Circle,
  PlayCircle,
  PropaneSharp,
} from "@mui/icons-material";
import React, { useState, useRef, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../../context/theme/ThemeContext";
import { Checkbox } from "@mui/material";
import Style from "../accordion.module.scss";

const Practice = ({ title, content, item, onClick }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);
  const { theme, changeTheme } = useContext(ThemeContext);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  };
  return (
    <div className={Style.accordion}>
      <div className={Style.section}>
        <div onClick={HandleOpening} className={Style.contained}>
          {!isOpened ? (
            <ArrowRight fontSize="large" />
          ) : (
            <ArrowDropDown fontSize="large" />
          )}
          <h4 className={Style.title}>{title}</h4>
        </div>
        <div className={Style.contained}>
          
          {/* <CheckCircle color="blac" /> */}
        </div>
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className={Style.element + "  "}
      >
        <ul className={Style.content}>
          {content?.map((item, index) => (
            <a key={index}>
              <li key={index} className={""}>
                <div className={Style.left_side}>
                  {/* <Checkbox checked /> */}
                  {item.title}
                </div>
                <p>{item.duration}</p>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Practice;
