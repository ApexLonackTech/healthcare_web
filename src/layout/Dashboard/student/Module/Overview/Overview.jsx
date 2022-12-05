import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import Style from "./overview.module.scss";

function Overview(props) {
  return (
    <div className={Style.overview}>
      <div className={Style.about}>
        <h2>About this course</h2>
        <p>
          Nullam rhoncus mi tincidunt porttitor ornare. Proin mattis eleifend
          odio, eget luctus ligula eleifend tincidunt. Sed lacus erat, tempor
        </p>
      </div>
      <hr />
      <div className={Style.numbers}>
        <span><b>Numbers</b></span>
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
      <hr />
      <div className={Style.numbers}>
      <span><b>Certificate</b></span>
        <div className={Style.col_number}>
          <span>Get E-Tutor certificate by completing entire course</span>
          <button disabled className={Style.button}>
            E-Tutor Certificate
          </button>
        </div>
        <div className={Style.col_number}></div>
      </div>
      <hr />
      <div className={Style.numbers}>
      <span><b>Description</b></span>
        <div className={Style.col_number}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa
            tortor, eleifend id tellus eget, convallis ullamcorper risus. Nam
            nec sagittis eros. Donec vel luctus velit. Ut vulputate eros ut diam
            pellentesque, vitae iaculis ex rutrum. In nec laoreet purus, eget
            malesuada libero. Integer non leo mi. Vestibulum
          </p>
        </div>
        <div className={Style.col_number}></div>
      </div>
      <hr />
      <div className={Style.numbers}>
      <span><b>Instructor</b></span>
        <div className={Style.col_number}>
          <div className={Style.row_header}>
            <img src="/img/instructor.png" loading="lazy" />
            <div className={Style.col_head}>
              <h4>
                Stephane Maarek | AWS Certified Cloud Practitioner,Solutions
                Architect,Developer
              </h4>
              <div className={Style.row_social}>
                <a>
                  <Facebook />
                </a>
                <a>
                  <Twitter />
                </a>
                <a>
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa
            tortor, eleifend id tellus eget, convallis ullamcorper risus. Nam
            nec sagittis eros. Donec vel luctus velit. Ut vulputate eros ut diam
            pellentesque, vitae iaculis ex rutrum. In nec laoreet purus, eget
            malesuada libero. Integer non leo mi. Vestibulum
          </span>
        </div>
        <div className={Style.col_number}></div>
      </div>
    </div>
  );
}

export default Overview;
