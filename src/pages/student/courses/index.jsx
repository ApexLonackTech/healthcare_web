import React, { useContext, useEffect } from "react";
import Style from "./courses.module.scss";
import { OpenInNew } from "@mui/icons-material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import course_data from "../../../data/course_data.json";
import {
  StudentNotification,
  StudentCourse,
  StudentSideMenu,
} from "../../../layout/Dashboard";
import Link from "next/link";
import { ThemeContext } from "../../../context/theme/ThemeContext";
import { authGetRequest } from "../../api/laravel/public/api";

const Courses = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [data, setData] = React.useState({});
  const [isPageLoader, setPageLoader] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    coursesGet();
  }, []);

  const coursesGet = async () => {
    setPageLoader(true);
    const { data_r, isError } = await authGetRequest(`/account/courses`);
    if (isError) {
      errorMessage(toast, data_r?.message);
      setPageLoader(false);
      return false;
    }
    setData(data_r);
    setPageLoader(false);
  };
  return (
    <div
      className={
        theme === "light"
          ? Style.course_container + " l_b d_t"
          : Style.course_container + " d_b l_t"
      }
    >
      {/* <Topbar /> */}
      <StudentSideMenu menu="course" loader={isPageLoader} />
      <main className={Style.content_container}>
        <section className={Style.top_section}>
          <span className={theme === "light" ? "d_t" : "l_t"}>
            REGISTERED COURSES
          </span>
          <a>
            Explore Courses <OpenInNew />{" "}
          </a>
        </section>
        {/* <section className="advert_section">
          <div className="top_header">
            <h3>Community health sensitisation</h3>
          </div>
          <div className="top_body">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa
              tortor, eleifend id tellus eget, convallis ullamcorper risus. Nam
              nec sagittis eros. Donec vel luctus velit. Ut vulputate eros ut
              diam pellentesque, vitae iaculis ex rutrum. In nec laoreet purus,
              eget malesuada libero. Integer non leo mi. Vestibulum
            </span>
            <a>Get Started</a>
          </div>
        </section> */}

        <section
          className={
            theme === "light"
              ? Style.course_sectioner + " l_r_b b_t "
              : Style.course_sectioner + " d_b_b l_t "
          }
        >
          <div className={Style.top_header}>
            <h3>Active Courses</h3>
          </div>
          <div
            className={
              theme === "light"
                ? Style.course_container + " l_r_b d_t"
                : Style.course_container + " d_r_b l_t"
            }
          >
            {data?.total_course?.map((item, index) => {
              if (index < 3)
                return (
                  <StudentCourse
                    item={item.courses[0]}
                    link={
                      item?.courses[0]
                        ? "/student/course/" + item.courses[0].uuid
                        : ""
                    }
                    progress={item.progress}
                    key={index}
                  />
                );
            })}
          </div>
        </section>
        <section
          className={
            theme === "light"
              ? Style.course_sectioner + " l_r_b b_t "
              : Style.course_sectioner + " d_b_b l_t "
          }
        >
          <div className={Style.top_header}>
            <h3>New Courses</h3>
          </div>
          <div
            className={
              theme === "light"
                ? Style.course_container + " l_r_b d_t"
                : Style.course_container + " d_r_b l_t"
            }
          >
            {data?.related_course?.map((item, index) => {
              if (index < 3)
                return (
                  <StudentCourse
                    item={item}
                    link={
                      item
                        ? "/student/course/" + item.uuid
                        : ""
                    }
                    progress={null}
                    key={index}
                  />
                );
            })}
          </div>
        </section>
        <section
          className={
            theme === "light"
              ? Style.course_sectioner + " l_r_b b_t "
              : Style.course_sectioner + " d_b_b l_t "
          }
        >
          <div className={Style.top_header}>
            <h3>Completed Courses</h3>
          </div>
          <div
            className={
              theme === "light"
                ? Style.course_container + " l_r_b d_t"
                : Style.course_container + " d_r_b l_t"
            }
          >
            {data?.completed_course?.map((item, index) => {
              if (index < 3)
                return (
                  <StudentCourse
                    item={item}
                    link={
                      item
                        ? "/student/course/" + item.uuid
                        : ""
                    }
                    progress={null}
                    key={index}
                  />
                );
            })}
          </div>
        </section>
      </main>
      <StudentNotification />
    </div>
  );
};

export default Courses;
