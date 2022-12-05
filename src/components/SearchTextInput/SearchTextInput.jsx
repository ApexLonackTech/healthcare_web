import { Search } from "@mui/icons-material";
import React from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";
import Style from "./searchtextinput.module.scss";

function SearchTextInput(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <div className={Style.form_search+" d_br_b"}>
      <input
        type="text"
        placeholder={props.placeholderLabel}
        style={props.style}
        className={
          theme === "light" ? Style.search_input+" ll_b d_t" : Style.search_input+" d_m_b l_t"
        }
      />
      <button>
        <Search fontSize="medium" />
      </button>
    </div>
  );
}

export default SearchTextInput;
