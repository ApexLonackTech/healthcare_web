import * as React from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";
import Style from "./multipleselect.module.scss";

export default function MultipleSelect(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <div className={Style.select_container+" d_br_b"}>
      <select
        style={props.style}
        className={
          theme === "light" ? Style.select_input+" ll_b d_t" : Style.select_input+" d_m_b l_t"
        }
      >
        {props.content.map((item, index) => (
          <option value={item.value} key={index}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}
