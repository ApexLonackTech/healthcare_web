import React from "react";
import {
  Accordion,
  Practice,
  Rating,
} from "../../../components";
import { CourseSection, Footer, MenuBar,Preview, Offer, Slide, Stat } from "../../../layout/welcome";
import Style from "./course.module.scss";
import {
  InfoOutlined,
} from "@mui/icons-material";
import moment from "moment";
import Image from "next/image";

import Description from "../../../data/description.json";
import dynamic from 'next/dynamic';
import useScrollBarPosition from "../../../effect/Scroll";
import {useWindowSize} from "../../../effect/WindowSize";

const ReadMore = dynamic(() => import('../../../components/ReadMore/ReadMore'), { ssr: false });

const CoursePage = () => {
    const [scrollY]=useScrollBarPosition();
    const size=useWindowSize();
   

  return (
    <div className={Style.course_page} >
      <MenuBar />
      <div className={Style.body_content} >
        <div className={Style.header_course}>
          <div className={Style.part_container}>
            <h4>
              Practice Exams | Public Health 
            </h4>
            <span>
              Prepare for your SAA-C03 exam. 390 high-quality practice test
              questions written from scratch with detailed explanations!
            </span>
            <div className={Style.rating_row}>
              <Rating />
              <div>
                <span className={Style.rating_text}>.(9.657 ratings).</span>
                <span className={Style.total_number}>2,000 Students</span>
              </div>
            </div>
            <div className={Style.rating_row}>
              <div>
                <span className={Style.total_number}>Created by:</span>
                <a className={Style.rating_text}>
                  Ayoluwa gbadebo | Health Practitioner 
                </a>
              </div>
            </div>
            <div style={{ marginTop: 10 }} className={Style.rating_row}>
              <div className={Style.lang_container}>
                <span className={Style.last_update}>
                  <InfoOutlined />
                  Last Updated {moment().format("L")}
                </span>
              </div>
            </div>
          </div>
          <div className={Style.part_container}>
            <Preview />
          </div>
        </div>
        <div className={Style.description_container}>
          <div className={Style.inclusion_container}>
            <h5 className={Style.headText}>Included in This Course</h5>
            <div className={Style.numbers}>
              <span>
                <b>Numbers</b>
              </span>
              <div className={Style.col_number}>
                <span>Skills Level: All Level</span>
                <span>Students: 1000</span>
                <span>Language: English</span>
                <span>Quiz: 10</span>
              </div>
              <div className={Style.col_number}>
                <span>Assignment: 5</span>
                <span>Lecture: 47</span>
                <span>Research: 1</span>
                <span>Estimate Completion: 4 Months</span>
              </div>
            </div>
            <div className={Style.description_pack}>
              <span>
                <b>Description</b>
              </span>
              <div className={Style.col_number}>
                <ReadMore text={Description.description} charLimit={500} />
              </div>
            </div>
          </div>
        </div>
        {/* {size.height} \ {scrollY} */}
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
