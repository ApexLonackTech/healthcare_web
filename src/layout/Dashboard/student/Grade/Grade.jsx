import { AccessTimeSharp, Close, MoreVert, RemoveRedEye, Search, TrendingUpSharp } from "@mui/icons-material";
import moment from "moment";
import React from "react";
import Link from "next/link";
import {Action} from "../../../../components";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import "./grade.module.scss";

function Grade(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? "grade_layout l_r_b d_t" : "grade_layout d_r_b l_t"
      }
    >
      <div className="header_row">
        <div className="tag_container">
          <button className={"active"}>
            <AccessTimeSharp /> Marked
          </button>
          <button className={theme === "light" ?"d_m_b l_w":"d_m_b l_t"}>
            <TrendingUpSharp /> Pending
          </button>
          <button className={"c_r l_w"}>
            <Close /> Cancel
          </button>
        </div>
        <div className="tag_container">
        <div className="form_search d_br_b">
          <Search fontSize="large" />
          <input
            type="text"
            placeholder="Search Grade"
            className={
              theme === "light"
                ? "search_input ll_b d_t"
                : "search_input d_m_b l_t"
            }
          />
        </div>
        </div>
      </div>
      <hr />
      <div className="responsive_table">
        <table className="table">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Code</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td>Assignment 1</td>
                    <td>12345</td>
                    <td>{moment().format("LL")}</td>
                    <td>{moment().format("LL")}</td>
                    <td>20/30</td>
                    <td><span className="success">Marked</span></td>
                    <td><button className="view"><RemoveRedEye/> View</button></td>
                </tr>
                <tr >
                    <td>Assignment 1</td>
                    <td>12345</td>
                    <td>{moment().format("LL")}</td>
                    <td>{moment().format("LL")}</td>
                    <td>20/30</td>
                    <td><span className="pending">Pending</span></td>
                    <td><button className="view"><RemoveRedEye/> View</button></td>
                </tr>
                <tr >
                    <td>Assignment 1</td>
                    <td>12345</td>
                    <td>{moment().format("LL")}</td>
                    <td>{moment().format("LL")}</td>
                    <td>20/30</td>
                    <td><span className="success">Marked</span></td>
                    <td><button className="view"><RemoveRedEye/> View</button></td>
                </tr>
                <tr >
                    <td>Assignment 1</td>
                    <td>12345</td>
                    <td>{moment().format("LL")}</td>
                    <td>{moment().format("LL")}</td>
                    <td>20/30</td>
                    <td><span className="cancel">Cancel</span></td>
                    <td><button className="view"><RemoveRedEye/> View</button></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grade;
