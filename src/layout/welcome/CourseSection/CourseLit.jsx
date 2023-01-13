import React from "react";
import { getCourseListAPI } from "../../../pages/api/laravel/public/api";
import Course from "./Course/Course";
import Style from "./courselit.module.scss";
import { Start } from "@mui/icons-material";
import Link from "next/link";

function CourseLit(props) {
  const { data } = getCourseListAPI();
  const items = [
    {
      uuid: 23123,
      title: "HTML & CSS",
      img: "/img/course1.png",
      price: 3000,
      user: 100,
    },
  ];
  return (
    <div className="m-4 p-4">
      <div class="row" data-masonry='{"percentPosition": true }'>
        {data?.data?.map((items, index) => (
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    class="card-img card-img-left"
                    src={
                      items.poster.storage === "local"
                        ? process.env.LOCAL_FILE_PATH +
                          items.poster.path +
                          "/medium/" +
                          items.poster.name
                        : items.poster.path
                    }
                    alt="Card image"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class=" display-6 card-title">{items.title}</h5>
                    <p class="card-text">{items.description}</p>
                    <p class="card-text">
                      <small class="text-muted">
                        Course Sections: {items.course_section.length}
                      </small>
                    </p>
                    <Link href={"/course/" + items.uuid}>
                      <a className="d-flex align-items-center justify-content-center btn btn-lg btn-primary text-white w-50">
                        <b className="d-flex align-items-center">
                          <Start /> Enroll
                        </b>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-3 mx-4">
          <h5 className="display-6 mb-1  text-primary">AVAILABLE FOR YOU</h5>
          <h2 className="display-3 mb-2 ">Available Courses</h2>
          <dd>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dignissim, sem non convallis molestie.
          </dd>
          <div className={Style.row_stat}>
            <button className="btn btn-primary">See all</button>
          </div>
        </div>
      </div>
      {/* <div className={Style.course_section}>
        {items.map((items, index) => (
            <Course items={items} key={index} />
        ))}

       
      </div> */}
      <div className={Style.rightContainer}></div>
    </div>
  );
}

export default CourseLit;
