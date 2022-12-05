import { Close, Publish } from "@mui/icons-material";
import React from "react";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import "./add.module.scss";

function AddDiscuss(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light"
          ? "discuss_section l_b d_t "
          : "discuss_section d_b l_t"
      }
    >
      <div className="header">
        <span className="title">New Discussion</span>
        <a onClick={() => props.closeModalx()} className="close d_br_b">
          <Close fontSize="large" />
        </a>
      </div>
      <div className="content">
        <div className="form_group">
          <label className="label">Choose Catorgory</label>
          <select
            className={
              theme === "light" ? "select l_b d_br_b" : "select d_b d_br_b"
            }
          >
            <option></option>
          </select>
        </div>
        <div className="form_group">
          <label className="label">Title</label>
          <input
            placeholder="Type catching attention title"
            className={
              theme === "light" ? "select l_b d_br_b" : "select d_b d_br_b"
            }
          />
        </div>
        <div className="form_group">
          <label className="label">Content</label>
          <textarea
            placeholder="Type your question here"
            rows={10}
            className={
              theme === "light" ? "select l_b d_br_b" : "select d_b d_br_b"
            }
          ></textarea>
        </div>
        <div className="bottom_action">
            <input type="file" placeholder="Add Image" />
            <div className="button_row">
                <button className="d_m_b">Save as draft</button>
                <button className="active"><Publish /> Publish</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AddDiscuss;
