import React, { useContext } from 'react';
import Link from "next/link";
import {Accordion} from '../../../../components';
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import course_data_content from "../../../../data/course_content_data.json";
import "./homelayout.module.scss";

function HomeStudentLayout(props) {
    const {theme,changeTheme}=useContext(ThemeContext);
    return (
        <section className={theme==="light"?"course_content l_r_b d_t":"course_content d_r_b l_t"}>
            <div className="head_er">
              <div className="course_description">
                <h3>Course Title: Clinical Laboratory</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa tortor, eleifend id tellus eget, convallis ullamcorper risus. Nam nec sagittis eros. Donec vel luctus velit. Ut vulputate eros ut diam pellentesque, vitae iaculis ex rutrum. In nec laoreet purus, eget malesuada libero. Integer non leo mi. Vestibulum</p>
                <button>Read More</button>
              </div>
              <div className="instructor_description">
                <h3>Instructor Information</h3>
               <img src="https://st2.depositphotos.com/2208684/5796/i/450/depositphotos_57968153-stock-photo-teacher-in-front-of-black.jpg" loading="lazy"  />
               <Link>Saliu Juliet | AWS Certified Cloud Practitioner,Solutions Architect,Developer</Link>
              </div>
            </div>
            <hr />
            <div className="course_body">
            <div className="header_body">
                <h3>Course Content & Progress</h3>
                <p>33 sections • 427 lectures • 4 months</p>
            </div>
            <div className="accordion_container">
            {course_data_content.map((item,index)=>(
                <Accordion key={index} item={item} title={item.title} content={item.section} />
            ))}
            </div>
             
              </div>
          </section>
    );
}

export default HomeStudentLayout;