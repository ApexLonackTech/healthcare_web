import React from 'react';

import { CourseSection, Footer, MenuBar, Offer, Slide, Stat } from "../../layout/welcome";
import Style from  "../../styles/welcome.module.scss";

const Welcome = () => {
    return (
        <div className={Style.welcome}>
                <MenuBar />
                <Slide />
                <Offer />
                <Stat />
                <CourseSection />
                <Footer />
        </div>
    );
};

export default Welcome;