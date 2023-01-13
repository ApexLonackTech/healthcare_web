import {
  ArrowDownward,
  ArrowDropDown,
  ArrowRight,
  ArrowUpward,
  Assignment,
  CheckCircle,
  Circle,
  ContentPasteSearch,
  OndemandVideo,
  PanoramaFishEye,
  PermContactCalendar,
  PlayCircle,
  PropaneSharp,
  Quiz,
} from "@mui/icons-material";
import React, { useState, useRef, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../context/theme/ThemeContext";
import { Checkbox } from "@mui/material";
import Style from "./accordion.module.scss";

const Accordion = ({
  title,
  content,
  item,
  onClick,
  sections,
  sectionsItem,
  id,
  initial,
  progress,
  tab,
}) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);
  const { theme, changeTheme } = useContext(ThemeContext);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  };

  const checkSection = (section, idd) => {
    let find = section.findIndex((item) => {
      return item.course_section_item_id === idd;
    });
    if (find == -1) {
      return false;
    } else {
      return true;
    }
  };

  const checkSectionD= (section, idd) => {
    let find = section.findIndex((item) => {
      return item.course_section_id === idd;
    });
    if (find == -1) {
      return false;
    } else {
      return true;
    }
  };

  React.useEffect(() => {
    if (initial) {
      const allWithClass = Array.from(
        document.getElementsByClassName('hover_c')
      );
      allWithClass.forEach(elementd => {
        elementd.style.height = '0px';
      });
      var element = document.getElementById("sectTab" + initial);
      element.style.height = `${element.scrollHeight}px`;
    }
  }, [initial]);

  // const checkSectionItem = (id) => {
  //   let find = false;
  //   sections.forEach((element) => {
  //     find = element.student_course_section_item.find((item) => {
  //       return item.id == id;
  //     });
  //   });
  //   console.log(id)
  //   return find;
  // };

  return (
    <div
      className={
        theme === "light"
          ? Style.accordion + " l_r_b d_t l_b_bt"
          : Style.accordion + " d_b l_w d_b_bt"
      }
    >
      <div
        className={
          theme === "light"
            ? Style.section + " l_r_b d_t"
            : Style.section + " d_b l_w "
        }
      >
        <div onClick={HandleOpening} className={Style.contained}>
          {!isOpened ? (
            <ArrowRight fontSize="large" />
          ) : (
            <ArrowDropDown fontSize="large" />
          )}
          <h4
            className={
              theme === "light" ? Style.title + " " : Style.title + " "
            }
          >
            {title}
          </h4>
        </div>
        <div className={Style.contained}>
          <p
            className={
              theme === "light"
                ? Style.label + " p-1 text-sm text-black"
                : Style.label + " p-1 text-sm text-white"
            }
          >
            {/* {item.lecture} lectures. {item.duration} */}
          </p>
          {item.id == tab.sect_id && <CheckCircle color="white" />}
          {item.id != tab.sect_id && checkSectionD(sections,item.id)==true && <CheckCircle color="white" />}
          {item.id != tab.sect_id && checkSectionD(sections,item.id)==false && <PanoramaFishEye color="white" />}
        </div>
      </div>
      <div
        ref={contentElement}
        id={"sectTab" + item.id}
        style={{ height: height }}
        className={
          theme === "light"
            ? Style.element + " hover_c "
            : Style.element + " hover_c "
        }
      >
        <ul className={Style.content}>
          {content?.map((item, index) => {
            return (
              <button
                className={
                  tab?.item_id == item.id ? "btn btn-outline-secondary" : "btn"
                }
                disabled={
                  tab?.item_id == item.id
                    ? false
                    : item.is_required == 1 &&
                      !checkSection(sectionsItem, item.id)
                    ? true
                    : item.is_required == 1 &&
                      checkSection(sectionsItem, item.id)
                    ? false
                    : false
                }
                onClick={() =>
                  onClick(item, {
                    sect_id: id,
                    item_id: item.id,
                    item_next: "",
                  })
                }
                key={index}
              >
                <li
                  key={index}
                  className={theme === "light" ? "" : "activeDark"}
                >
                  <div className={Style.left_side}>
                    {item.type === "quiz" && <Quiz />}
                    {item.type === "video" && <OndemandVideo />}
                    {item.type === "assignment" ||
                      (item.type === "project" && <Assignment />)}
                    {item.type === "meeting" && <PermContactCalendar />}
                    {item.type === "resource" && <ContentPasteSearch />}
                    <Checkbox checked={checkSection(sectionsItem, item.id)} />
                    {item.title}
                  </div>
                  <p>{item.duration}</p>
                </li>
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
