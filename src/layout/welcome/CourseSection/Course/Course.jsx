import React from "react";
import Style from "./course.module.scss";
import { People } from "@mui/icons-material";
import Link from "next/link";

function Course(props) {
  return (
    <div className={Style.item}>
      <img src={props.items.img} loading="lazy" />
      <div className={Style.top_label}>Best Course</div>
      <div className={Style.bottom_amount}>NGN{props.items.price}</div>
      <div className={Style.section_bottom}>
        <div className={Style.top_header_label}>
          <Link href={`/course/${props.items?.uuid}`}><span className={Style.course_title}>{props.items.title}</span></Link>
          <span className={Style.course_people}>
            {props.items.user} <People />{" "}
          </span>
        </div>
        <span className={Style.course_describe}>14 Videos 1 Instructor</span>
      </div>
    </div>
  );
}

export default Course;
