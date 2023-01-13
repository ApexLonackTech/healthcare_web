import { Facebook, Instagram, Twitter, Web, YouTube } from "@mui/icons-material";
import React from "react";
import { ReadMore } from "../../../../../components";
import Style from "./overview.module.scss";

function Overview(props) {
  const { data } = props;

  return (
    <div className={Style.overview}>
      <div className={Style.about}>
        <h2>About this course</h2>
        <p>{data?.course?.description}</p>
      </div>
      <hr />
      <div className={Style.numbers}>
        <span>
          <b>Numbers</b>
        </span>
        <div className={Style.col_number}>
          <span>Skills Level: All Level</span>
          <span>Students: {data?.course?.student_total}</span>
          <span>Language: {data?.course?.language}</span>
          <span>Quiz: {data?.course?.quiz_total}</span>
        </div>
        <div className={Style.col_number}>
          <span>Assignment: {data?.course?.assignment_total}</span>
          <span>Lecture: {data?.course?.lecture_total}</span>
          <span>Research: {data?.course?.project_total}</span>
          <span>Estimate Completion: {data?.course?.estimate_time}</span>
        </div>
      </div>
      <hr />
      <div className={Style.numbers}>
        <span>
          <b>Certificate</b>
        </span>
        <div className={Style.col_number}>
          <span>Get a certificate by completing entire course</span>
          <button
            disabled={data?.course?.is_complete == 1 ? false : true}
            className={Style.button}
          >
            E-Tutor Certificate
          </button>
        </div>
        <div className={Style.col_number}></div>
      </div>
      <hr />
      <div className={Style.numbers}>
        <span>
          <b>Description</b>
        </span>
        <div className={Style.col_number}>
          <p>
            {data?.course?.content && (
              <ReadMore text={data?.course?.content} charLimit={500} />
            )}
          </p>
        </div>
        <div className={Style.col_number}></div>
      </div>
      <hr />
      <div className={Style.numbers}>
        <span>
          <b>Instructor</b>
        </span>
        <div className={Style.col_number}>
          <div className={Style.row_header}>
            <img src="/img/instructor.png" loading="lazy" />
            <div className={Style.col_head}>
              <h5 className="display5">
                {data?.course?.assign_to?.first_name} {data?.course?.assign_to?.last_name}
              </h5>
              <div className={Style.row_social}>
              {data?.course?.assign_to?.facebook&&
                <a>
                  <Facebook />
                </a>}
                {data?.course?.assign_to?.twitter&&
                <a>
                  <Twitter />
                </a>}
                {data?.course?.assign_to?.instagram&&
                <a>
                  <Instagram />
                </a>}
                {data?.course?.assign_to?.youtube&&
                <a>
                  <YouTube />
                </a>}
                {data?.course?.assign_to?.website&&
                <a>
                  <Web />
                </a>}
              </div>
            </div>
          </div>
          <span>
          {data?.course?.assign_to?.description && (
              <ReadMore text={data?.course?.assign_to?.description} charLimit={500} />
            )}
          </span>
        </div>
        <div className={Style.col_number}></div>
      </div>
    </div>
  );
}

export default Overview;
