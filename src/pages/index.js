import Head from "next/head";
import Image from "next/image";
import { CourseSection, Footer, MenuBar, Offer, Slide, Stat } from "../layout/welcome";

import Style from "../styles/welcome.module.scss";

export default function Home() {
  return (
    <div className={Style.welcome}>
    <MenuBar />
    <Slide />
    <Offer/>
    <Stat/>
    <CourseSection />
    <Footer />
    </div>
  );
}
