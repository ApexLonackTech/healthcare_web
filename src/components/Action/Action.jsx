import { MoreVert } from "@mui/icons-material";
import React from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";
import Style from "./action.module.scss";

function Action(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <div className={Style.action_sect}>
      <a className={props.border? Style.border:""}>
        {props.icon}
        <div
          style={props.style}
          className={
            theme === "light"
              ? Style.action_layout+ " l_r_b d_t"
              : Style.action_layout+" d_r_b l_t"
          }
        >
          {props.content}
        </div>
      </a>
    </div>
  );
}

export default Action;
