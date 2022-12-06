import {
  AccessTimeSharp,
  AddSharp,
  ChatBubbleSharp,
  LocalFireDepartmentSharp,
  LockClockSharp,
  RemoveRedEyeSharp,
  StraightSharp,
  TrendingUpSharp,
} from "@mui/icons-material";
import moment from "moment";
import React from "react";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import "./list.module.scss";
import DiscussData from "../../../../data/discussion.json";
import {ModalLayout} from "../../../../components";
import AddDiscuss from "./Add";
import Link from "next/link";

function DiscussList(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  const [modal, setModal] = React.useState(false);
  return (
    <div
      className={
        theme === "light"
          ? "d_list_layout l_r_b d_t"
          : "d_list_layout d_r_b l_t"
      }
    >
      <div className="header_row">
        <div className="tag_container">
          <button className={"active"}>
            <AccessTimeSharp /> New
          </button>
          <button className={"d_m_b"}>
            <TrendingUpSharp /> Top
          </button>
          <button className={"d_m_b"}>
            <LocalFireDepartmentSharp /> Hot
          </button>
          <button className={"d_m_b"}>
            <LockClockSharp /> Closed
          </button>
        </div>
        <div className="tag_container">
          <button onClick={() => setModal(true)} className={"active"}>
            <AddSharp /> Create
          </button>
        </div>
      </div>
      <hr />
      <div className="discuss_list">
        {DiscussData.map((item, index) => (
          <Link href={'/discuss/'+item.uuid} key={index} className="discuss_item">
            <div className="id_header">
              <img src={item?.posted_by?.image} loading="lazy" />
              <div className="identity_column">
                <span className="name">{item?.posted_by?.name}</span>
                <span className="time">
                  {moment(item?.created_at).format("LL")}
                </span>
              </div>
            </div>
            <h2 className="title">{item?.title}</h2>
            <p className="content">{item?.description}</p>
            <div className="bottom_row">
              <div className="tag_row">
                {item?.tag.map((tag, k) => (
                  <button className={"tag d_m_b"} key={k}>{tag.name}</button>
                ))}
              </div>
              <div className="tag_row">
                <button className="stats">
                  <RemoveRedEyeSharp style={{ margin: 5 }} /> {item?.stat?.view}
                </button>
                <button className="stats">
                  <ChatBubbleSharp style={{ margin: 5 }} />{" "}
                  {item?.stat?.comment}
                </button>
                <button className="stats">
                  <StraightSharp style={{ margin: 5 }} /> {item?.stat?.vote}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ModalLayout
        modal={modal}
        content={
          <div>
            <AddDiscuss closeModalx={()=>setModal(false)} />
          </div>
        }
      />
    </div>
  );
}

export default DiscussList;
