import {
    Assignment,
  MoreHoriz,
  Notifications,
  NotificationsNone,
  Settings,
} from "@mui/icons-material";
import React, { useContext } from "react";
import Style from "./righbar.module.scss";
import todo_data from "../../../../data/todo_data.json";
import moment from "moment";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import { AuthContext } from "../../../../context/auth/ApiContext";

function Rightbar(props) {
  const {theme,changeTheme}=useContext(ThemeContext);
  const { user, token } = React.useContext(AuthContext);
  return (
    <div className={theme==="light"? Style.rightbar_section+" ll_b": Style.rightbar_section+" d_s_b"}>
      <div className={Style.topMenu}>
        <a>
          <Settings fontSize="large" />
        </a>
        <a>
          <Notifications fontSize="large" />
        </a>
        <a>
          <img width={user.image?"40":'60'} src={user?.image?process.env.LOCAL_FILE_PATH+'profile/medium/'+user.image:"/icons/avatar.png"} loading="lazy" />
        </a>
      </div>
      <div className={Style.section_container}>
        <div className={Style.header}>
          <h3>Todo List</h3>
          <MoreHoriz  />
        </div>
        {todo_data.map((item, index) => (
          <div key={index} className={theme==="light"? Style.item+" l_r_b d_t": Style.item+" d_r_b l_t"}>
            {item.type === "event" && (
              <div className={Style.iconContainer}>
                <NotificationsNone />
              </div>
            )}
            {item.type === "assignment" && (
              <div style={{color:'#fff',backgroundColor:'#123283'}} className={Style.iconContainer}>
                <Assignment />
              </div>
            )}
            {item.type === "discussion" && (
              <div style={{color:'#fff',backgroundColor:'#EA4335'}} className={Style.iconContainer}>
                <Assignment />
              </div>
            )}
            <div className={Style.labelContainer}>
              <h3>{item.title}</h3>
              <div className={Style.bottom}>
                <span>{moment(item.date+' '+item.time).format("LLLL")}</span>
                {/* <span>09:20 AM</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={Style.section_container}>
        <div className={Style.header}>
          <h3>Recent Activity</h3>
          <MoreHoriz  />
        </div>
        {todo_data.map((item, index) => (
          <div key={index} className={theme==="light"? Style.item+" l_r_b d_t": Style.item+" d_r_b l_t"}>
            {item.type === "event" && (
              <div className={Style.iconContainer}>
                <NotificationsNone />
              </div>
            )}
            {item.type === "assignment" && (
              <div style={{color:'#fff',backgroundColor:'#123283'}} className={Style.iconContainer}>
                <Assignment />
              </div>
            )}
            {item.type === "discussion" && (
              <div style={{color:'#fff',backgroundColor:'#EA4335'}} className={Style.iconContainer}>
                <Assignment />
              </div>
            )}
            <div className={Style.labelContainer}>
              <h3>{item.title}</h3>
              <div className={Style.bottom}>
              <span>{moment(item.date+' '+item.time).format("LLLL")}</span>
                {/* <span>09:20 AM</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rightbar;
