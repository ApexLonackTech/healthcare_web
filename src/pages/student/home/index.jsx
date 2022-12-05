import React, { useContext, useEffect } from "react";
import Style from "./home.module.scss";
import {StudentSideMenu,StudentNotification,StudentCourse} from "../../../layout/Dashboard";

import { Brightness4, LightMode } from "@mui/icons-material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import data_bar from "../../../data/bar_data.json";
import data_pie from "../../../data/pie_chart.json";
import course_data from "../../../data/course_data.json";

import Link from "next/link";
import { ThemeContext } from "../../../context/theme/ThemeContext";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });


const Home = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={
        theme === "light"
          ? Style.home_container + " l_b d_t"
          : Style.home_container + " d_b l_t"
      }
    >
      {/* <Topbar /> */}
      <StudentSideMenu menu="home" />
      <main
        className={
          theme === "light" ? Style.content_container : Style.content_container
        }
      >
        <section className={Style.top_section}>
          <span className={theme === "light" ? "d_t" : "l_t"}>
            Hello Gabriel Dam, Welcome back
            <img
              src="/icons/emojione_waving-hand-medium-light-skin-tone.png"
              className="icon"
            />
          </span>
          {theme === "light" && (
            <a
              className={theme === "light" ? "l_m_b d_t" : "d_m_b l_t"}
              onClick={() => changeTheme("dark")}
            >
              <Brightness4 fontSize="medium" /> <b>Night Mode</b>
            </a>
          )}
          {theme === "dark" && (
            <a
              className={theme === "light" ? "l_m_b d_t" : "d_m_b l_t"}
              onClick={() => changeTheme("light")}
            >
              <LightMode fontSize="medium" /> <b>Light Mode</b>
            </a>
          )}
        </section>
        <section
          className={
            theme === "light"
              ? Style.advert_section + " l_b_b l_t l_br_b"
              : Style.advert_section + " d_b_b l_t d_br_b"
          }
        >
          <div className={Style.top_header}>
            <h3>Community health sensitisation</h3>
          </div>
          <div className={Style.top_body}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa
              tortor, eleifend id tellus eget, convallis ullamcorper risus. Nam
              nec sagittis eros. Donec vel luctus velit. Ut vulputate eros ut
              diam pellentesque, vitae iaculis ex rutrum. In nec laoreet purus,
              eget malesuada libero. Integer non leo mi. Vestibulum
            </span>
            <a className={theme === "light" ? " d_m_b l_t" : " d_m_b l_t"}>
              Get Started
            </a>
          </div>
        </section>
        <section
          className={
            theme === "light"
              ? Style.tutorial_section + " l_r_b d_t "
              : Style.tutorial_section + " d_r_b l_t "
          }
        >
          <div className={Style.top_header}>
            <h3>How to use Platform</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa
              tortor, eleifend id tellus eget, convallis ullamcorper risus. Nam
              nec sagittis eros.
            </span>
          </div>
          <ReactPlayer
            height={"200px"}
            width={"100%"}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </section>
        <section
          className={
            theme === "light"
              ? Style.course_sectionhome + " l_r_b d_t "
              : Style.course_sectionhome + " d_r_b l_t "
          }
        >
          <div className={Style.top_header}>
            <h3>Active Courses</h3>
            <a className={theme === "light" ? "d_t" : "l_t"} href="">
              View All
            </a>
          </div>
          <div
            className={
              theme === "light"
                ? Style.course_containerr + " l_r_b d_t"
                : Style.course_containerr + " d_r_b l_t"
            }
          >
            {course_data.map((item, index) => {
              if (index < 3)
                return (
                  <StudentCourse item={item} key={index} />
                );
            })}
          </div>
        </section>
        <section
          className={
            theme === "light"
              ? Style.assessment_section + " l_r_b d_t"
              : Style.assessment_section + " d_b_b l_t"
          }
        >
          <div
            className={
              theme === "light" ? Style.graph_container : Style.graph_container
            }
          >
            <h3>Assessment</h3>
            <ResponsiveBar
              data={data_bar}
              keys={[
                "ass #1",
                "ass #2",
                "ass #3",
                "ass #4",
                "ass #5",
                "quiz #1",
              ]}
              indexBy="course"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "accent" }}
              theme={{
                axis: {
                  textColor: "#eee",
                  fontSize: "14px",
                  tickColor: "#eee",
                },
                grid: {
                  stroke: "#888",
                  strokeWidth: 1,
                },
              }}
              // arcLinkLabelsTextColor={theme==="light"?"rgba(100, 100, 100, 0.563)":"#f6f6f6"}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "ass #1",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "ass #4",
                  },
                  id: "lines",
                },
              ]}
              borderColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Courses",
                legendPosition: "middle",
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Grade",
                legendPosition: "middle",
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
              }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              role="application"
              ariaLabel="Student Course Assesments"
              barAriaLabel={function (e) {
                return (
                  e.id + ": " + e.formattedValue + " in course: " + e.indexValue
                );
              }}
            />
          </div>
          <div
            className={
              theme === "light"
                ? Style.bar_container + " l_r_b d_t"
                : Style.bar_container + " d_b_b l_t"
            }
          >
            <h3>Summary</h3>
            <ResponsivePie
              data={data_pie}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor={theme === "light" ? "#000" : "#f6f6f6"}
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "ass",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "quiz",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "research",
                  },
                  id: "dots",
                },
              ]}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </section>
      </main>
      <StudentNotification />
    </div>
  );
};

export default Home;
