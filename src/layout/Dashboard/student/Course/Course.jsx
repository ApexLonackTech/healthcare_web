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
  const { item, progress,link } = props;

  return (
    <Link href={link?link:''} className={Style.item_course}>
      <a className={Style.item_course}>
        <img
          src={
            item?.poster?.storage === "local"
              ? process.env.LOCAL_FILE_PATH +
                item?.poster?.path +
                "/medium/" +
                item?.poster?.name
              : item?.poster?.path
          }
          loading="lazy"
        />
        <div
          className={
            theme === "light"
              ? Style.bottom_label + " l_b d_t"
              : Style.bottom_label + " d_b_b l_t"
          }
        >
          <span>{item.title} </span>
          {progress!=null&&
          <span className={Style.duration}>
            {progress}/{item?.course_section?.length} sections
          </span>}
          {progress!=null&&
          <div className={Style.progressContainer}>
            <BorderLinearProgress
              variant="determinate"
              value={(progress / item?.course_section?.length) * 100}
            />
          </div>}
        </div>
      </a>
    </Link>
  );
}

export default CourseStudentCard;
