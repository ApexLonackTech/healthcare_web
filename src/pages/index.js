import Head from "next/head";
import Image from "next/image";
import {
  CourseSection,
  Footer,
  MenuBar,
  Offer,
  Slide,
  Stat,
} from "../layout/welcome";

import Style from "../styles/welcome.module.scss";



// export async function getStaticProps() {
//   // `getStaticProps` is executed on the server side.
//   const course = await getCourseListAPI();
//   return {
//     props: {
//       fallback: {
//         "/v0/course/list": course,
//       },
//     },
//   };
// }

export default function home() {
  
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
}
