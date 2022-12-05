
import React from "react";
import Course from "./Course/Course";
import Style from "./courselit.module.scss";

function CourseLit(props) {
  const items = [
    {
      uuid:23123,
      title: "HTML & CSS",
      img: "/img/course1.png",
      price: 3000,
      user: 100,
    },
    {
      uuid:23123,
      title: "HTML & CSS",
      img: "/img/course2.png",
      price: 3000,
      user: 100,
    },
    {
      uuid:23123,
      title: "HTML & CSS",
      img: "/img/course3.png",
      price: 3000,
      user: 100,
    },
    {
      uuid:23123,
      title: "HTML & CSS",
      img: "/img/course4.png",
      price: 3000,
      user: 100,
    },
  ];
  return (
    <div className={Style.courseLit}>
      <div className={Style.course_section}>
        {items.map((items, index) => (
            <Course items={items} key={index} />
        ))}
      </div>
      <div className={Style.rightContainer}>
        <div className={Style.textColumn}>
          <h5 className={Style.ad}>AVAILABLE FOR YOU</h5>
          <h2 className={Style.title}>Available Courses</h2>
          <span className={Style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dignissim, sem non convallis molestie.
          </span>
          <div className={Style.row_stat}>
            <button className={Style.register}>See all</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseLit;
