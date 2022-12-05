import React from "react";
import Style from "./course.module.scss";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import Link from "next/link";

function CourseStudentCard(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#545be8" : "#545be8",
    },
  }));

  return (
    <Link href={"/student/course/2134567"} className={Style.item_course}>
      <a className={Style.item_course}>
        <img src={props.item.image} loading="lazy" />
        <div
          className={
            theme === "light"
              ? Style.bottom_label + " l_b d_t"
              : Style.bottom_label + " d_b_b l_t"
          }
        >
          <span>{props.item.title}</span>
          <span className={Style.duration}>
            {props.item.status}/{props.item.section} sections
          </span>
          <div className={Style.progressContainer}>
            <BorderLinearProgress
              variant="determinate"
              value={(props.item.status / props.item.section) * 100}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CourseStudentCard;
