import React from 'react';
import Footer from '../../components/Footer/Footer';
import CourseLit from '../../layout/Home/CourseLit/CourseLit';
import Offer from '../../layout/Home/Offer/Offer';
import Slide from '../../layout/Home/Slide/Slide';
import Stat from '../../layout/Home/Stat/Stat';
import MenuBar from '../../components/menuBar/MenuBar';
import Style from  "../../styles/welcome.module.scss";

const Welcome = () => {
    return (
        <div className={Style.welcome}>
                <MenuBar />
                <Slide />
                <Offer />
                <Stat />
                <CourseLit />
                <Footer />
        </div>
    );
};

export default Welcome;