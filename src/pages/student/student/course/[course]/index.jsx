import {
  Archive,
  ArrowBack,
  CardGiftcard,
  GifBoxTwoTone,
  Home,
  MoreVert,
  ShareTwoTone,
  Star,
} from "@mui/icons-material";
import React from "react";
import Link from "next/link";
import Sidebar from "../../../../../../components/sidebar/Sidebar";
import { ThemeContext } from "../../../../../../context/ThemeContext";
import Style from "./courseview.module.scss";
// import ReactPlayer from "react-player/lazy";

import Overview from "../../../../../../layout/Student/Module/Overview/Overview";
import Accordion from "../../../../../../../components/Accordion/Accordion";
import course_data_content from "../../../../../../../data/course_content_data.json";
import CircularProgress from "@mui/material/CircularProgress";
import { CircularProgressWithLabel } from "../../../../../../../components/CircularProgressWithLabel/CircularProgressWithLabel";
import Action from "../../../../../../../components/Action/Action";
import QandA from "../../../../../../layout/Student/Module/Q&A/Q&A";
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

function ModuleView() {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuChange = (e) => {
    setIndex(e);
    window.scrollTo(0, 0);
  };

  const viewSection = () => {};

  return (
    <div
      className={
        theme === "light"
          ? Style.module_view + " l_b d_t"
          : Style.module_view + " d_b l_t"
      }
    >
      <Sidebar menu="course" />
      <main className={Style.content_container}>
        <section
          className={
            theme === "light"
              ? Style.top_section + " l_r_b l_w_b"
              : Style.top_section + " d_r_b l_t"
          }
        >
          <ul>
            <li>
              {" "}
              <Link href={"/"}>
                <a>
                  <Home /> Home
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
            <li>
              <span>Clinical Laboratory</span>
            </li>
          </ul>
        </section>
        <div className={Style.body_container}>
          <div className={Style.player_section}>
            <a className={theme === "light" ? "l_r_b d_t" : "d_r_b l_t"}>
              Ultimate AWS Certified Developer Associate 2022 - NEW!
            </a>
            <div
              className={
                theme === "light"
                  ? Style.player + " l_r_b d_t"
                  : Style.player + " d_r_b l_t"
              }
            >
              <ReactPlayer
                width={"100%"}
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              />
            </div>
            <div
              className={
                theme === "light"
                  ? Style.tab_section + " l_r_b d_t"
                  : Style.tab_section + " d_r_b l_t"
              }
            >
              <div className={Style.tab_row}>
                <button
                  className={
                    index == -1 ? Style.mobile + " active" : Style.mobile
                  }
                  onClick={() => menuChange(-1)}
                >
                  Course Content
                </button>
                <button
                  className={index == 0 ? Style.active : ""}
                  onClick={() => menuChange(0)}
                >
                  Overview
                </button>
                <button
                  className={index == 1 ? Style.active : ""}
                  onClick={() => menuChange(1)}
                >
                  Q&A
                </button>
                <button
                  className={index == 2 ? Style.active : ""}
                  onClick={() => menuChange(2)}
                >
                  Notes
                </button>
                <button
                  className={index == 3 ? Style.active : ""}
                  onClick={() => menuChange(3)}
                >
                  Announcement
                </button>
                <button
                  className={index == 4 ? Style.active : ""}
                  onClick={() => menuChange(4)}
                >
                  Reviews
                </button>
                <button
                  className={index == 5 ? Style.active : ""}
                  onClick={() => menuChange(5)}
                >
                  Resources
                </button>
              </div>
              <hr />
              <div className="">
                {index == -1 && (
                  <div>
                    {course_data_content.map((item, index) => (
                      <Accordion
                        key={index}
                        item={item}
                        title={item.title}
                        content={item.section}
                        onClick={viewSection}
                      />
                    ))}
                  </div>
                )}
                {index == 0 && <Overview />}
                {index == 1 && <QandA />}
                {/* {index == 2 && <QandA />} */}
              </div>
            </div>
          </div>
          <div
            className={
              theme === "light"
                ? Style.list_section + " l_r_b d_t"
                : Style.list_section + " d_r_b l_t"
            }
          >
            <div
              className={
                theme === "light"
                  ? Style.header_monitor + " l_r_b d_t"
                  : Style.header_monitor + " d_r_b l_t"
              }
            >
              <Action
                icon={
                  <CircularProgressWithLabel
                    color={"inherit"}
                    size={45}
                    value={90}
                  />
                }
                border={false}
                style={{ width: 160,padding: 10 }}
                content={
                  <div className={Style.column_cert}>
                    <b>414 of 458 complete</b>
                    <p>Finish course to get certificate</p>
                  </div>
                }
              />
              <button className={theme === "light" ?Style.more+ " d_br_b":Style.more+ " l_br_b"}>
                <ShareTwoTone />
                Share
              </button>

              <Action
                icon={<MoreVert />}
                style={{ width: 140,padding: 0 }}
                border={true}
                content={
                  <div className={
                    theme === "light" ? Style.column_data+ " d_br_b":Style.column_data+ " l_br_b"}>
                    <li>
                      <Star /> Favourite
                    </li>
                    <li >
                      <Archive /> Archive
                    </li>
                    <li>
                      <CardGiftcard /> Gift Course
                    </li>
                  </div>
                }
              />
            </div>
            <div className={Style.lecture_container}>
              {course_data_content.map((item, index) => (
                <Accordion
                  key={index}
                  item={item}
                  title={item.title}
                  content={item.section}
                  onClick={viewSection}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ModuleView;
