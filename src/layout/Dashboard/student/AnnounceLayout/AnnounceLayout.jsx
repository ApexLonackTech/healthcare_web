import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import "./announcelayout.module.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Close, Filter, Search, Sort } from "@mui/icons-material";
import moment from "moment";
import AnnouncementData from "../../../../data/announcement.json";
import {ModalLayout} from "../../../../components";
import AnnounceView from "./AnnounceView";


function AnnounceLayout(props) {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [age, setAge] = React.useState("All");
  const [content, setContent] = React.useState(null);
  const [ann, setAnn] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onAnnounce = (e) => {
    setContent(e);
    setAnn(true);
  };

  const closeModal=()=>{
   
  }
  return (
    <div
      className={
        theme === "light"
          ? "announce_layout l_r_b d_t"
          : "announce_layout d_r_b l_t"
      }
    >
      <div className="filter_contain">
        <div className="form_group d_br_b">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{
              width: "100%",
              color: theme === "light" ? "#282c34" : "#fff",
              //   border: 1,
              //   borderColor: theme === "light" ? "#282c34" : "#fff",
              backgroundColor: theme === "light" ? "#fff" : "#4b4b4b",
            }}
            inputProps={{
              MenuProps: {
                MenuListProps: {
                  sx: {
                    backgroundColor: theme === "light" ? "#fff" : "#4b4b4b",
                    color: theme === "light" ? "#282c34" : "#fff",
                    borderColor: theme === "light" ? "#282c34" : "#fff",
                  },
                },
              },
            }}
          >
            <MenuItem value={"All"}>All</MenuItem>
            {/* <MenuItem value={20}></MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </div>
        <div className="form_search d_br_b">
          <Search fontSize="large" />
          <input
            type="text"
            placeholder="Search Announcement"
            className={
              theme === "light"
                ? "search_input ll_b d_t"
                : "search_input d_m_b l_t"
            }
          />
        </div>
      </div>
      <hr />
      <div className="announce_container">
        <div className="filter_row">
          <a className={"ascend d_br_b"}>
            <Sort fontSize="large" />
          </a>
          <span>Latest Announcement</span>
        </div>
        {AnnouncementData.map((item, index) => (
          <div
            key={index}
            onClick={() => onAnnounce(item)}
            className={
              theme === "light" ? "items l_b l_br_b" : "items l_m_b l_br_b"
            }
          >
            <div className="ini_f">
              <img src={item?.posted_by?.image} loading="lazy" />
              <div className="desc_cont">
                <span className="title ">{item.title}</span>
                <span className="category d_h_t">{item.category}</span>
                <span className="description">{item.description}</span>
              </div>
            </div>
            <div className="ini_f">
              <div className="desc_cont">
                <span className="category">Posted on:</span>
                <span className="category">
                  {moment(item.posted_on).format("LL")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalLayout modal={ann} content={ <AnnounceView closeModalx={()=>setAnn(false)} content={content} />} />
    </div>
  );
}

export default AnnounceLayout;
