import { Close } from "@mui/icons-material";
import React from "react";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import "./announceview.module.scss";

function AnnounceView(props) {
    const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? "announce_section l_b d_t " : "announce_section d_b l_t"
      }
    >
      <div className="header">
        <span className="title">{props.content?.title}</span>
        <a onClick={()=>props.closeModalx()} className="close d_br_b">
          <Close fontSize="large" />
        </a>
      </div>
      <div className="content" dangerouslySetInnerHTML={{__html: props?.content?.content}}>

      </div>
    </div>
  );
}

export default AnnounceView;
