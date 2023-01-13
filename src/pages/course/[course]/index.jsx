import React, { useContext } from "react";
import { Accordion, ImageOp, Practice, Rating } from "../../../components";
import {
  CourseSection,
  Footer,
  MenuBar,
  Preview,
  Offer,
  Slide,
  Stat,
} from "../../../layout/welcome";
import Style from "./course.module.scss";
import {
  AddToQueue,
  AllInclusiveOutlined,
  Facebook,
  HelpOutlineOutlined,
  InfoOutlined,
  Instagram,
  LinkedIn,
  PhoneAndroidOutlined,
  PlayCircleFilledOutlined,
  Share,
  Twitter,
  VerifiedUser,
} from "@mui/icons-material";
import moment from "moment";
import Image from "next/image";

import Description from "../../../data/description.json";
import dynamic from "next/dynamic";
import useScrollBarPosition from "../../../effect/Scroll";
import { useWindowSize } from "../../../effect/WindowSize";
import { authGetRequest, getCourseItemAPI } from "../../api/laravel/public/api";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import { MembershipContext } from "../../../context/membership/membership";
import { AuthContext } from "../../../context/auth/ApiContext";
import { errorMessage } from "../../../utils/notification";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const ReadMore = dynamic(
  () => import("../../../components/ReadMore/ReadMore"),
  { ssr: false }
);

const CoursePage = () => {
  const [scrollY] = useScrollBarPosition();
  const size = useWindowSize();
  const router = useRouter();
  const { course } = router.query;
  // const { data } = getCourseItemAPI(course);
  const { membership } = useContext(MembershipContext);
  const { user } = useContext(AuthContext);
  const [data, setData] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  const [isPageLoader, setPageLoader] = React.useState(false);

  React.useEffect(() => {
    getCourse();
  }, [course]);

  const getCourse = async () => {
    setPageLoader(true);
    const { data_r, message, isLoading, isError } = await authGetRequest(
      !user ? "/course/view/" + course : "/account/course/view/" + course
    );
    setData(data_r);
    setPageLoader(false);
  };

  const routeCourse = () => {
    let url = null;
    if (!user) {
      url = "/auth/login?dir=course&course=" + course;
      router.push(url);
    } else if (!membership) {
      url = "/membership?dir=course&course=" + course;
      router.push(url);
    } else if (user && data?.enroll) {
      url = "/student/home";
      router.push(url);
    } else if (user && !data?.enroll) {
      enrollCourse();
    }
  };

  const enrollCourse = async () => {
    setLoading(true);
    const { data_r, message, isLoading, isError } = await authGetRequest(
      "/account/course/enroll/" + course
    );
    if (isError) {
      errorMessage(toast, data_r?.message);
      setLoading(false);
      return false;
    }
    setLoading(false);
    let url = "/student/home";
    router.push(url);
  };

  return (
    <div className={Style.course_page}>
      <MenuBar loader={isPageLoader} />
      <div className="container-fluid">
        <div className="card bg-default my-2 p-2">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex flex-column p-2">
                <h4 className="display-5 card-title text-gray">
                  {data?.title}
                </h4>
                <span>{data?.description}</span>
                <div className="d-flex flex-row my-1">
                  <dt className="">
                    <Rating /> (9.657 ratings)
                  </dt>
                  <dt className="mx-2">Students: {data?.student_total}</dt>
                </div>
                <div className="d-flex flex-row my-1">
                  <dt className="">Created by:</dt>
                  <dd className="mx-2 text-">
                    {data?.assign_to?.first_name} {data?.assign_to?.last_name}
                  </dd>
                </div>
                <div className="d-flex flex-row my-1">
                  <dt className="">Last Updated</dt>
                  <dd className="mx-2 text-primary">
                    <InfoOutlined />
                    {moment(data?.updated_at).format("L")}
                  </dd>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex flex-column ">
                      <ImageOp
                        url={data?.poster?.path}
                        path="medium/"
                        storage={data?.poster?.storage}
                        name={data?.poster?.name}
                        width="100%"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex flex-column align-items-start justify-content-center h-100">
                      <div className="d-flex flex-row align-items-center">
                        <PhoneAndroidOutlined
                          sx={{ fontSize: 14, marginRight: 2 }}
                        />
                        <span>Access on Mobile</span>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <AllInclusiveOutlined
                          sx={{ fontSize: 14, marginRight: 2 }}
                        />
                        <span> Full Lifetime Access</span>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <HelpOutlineOutlined
                          sx={{ fontSize: 14, marginRight: 2 }}
                        />
                        <span> Practice test</span>
                      </div>
                      <button className="btn my-2">
                        <PlayCircleFilledOutlined
                          sx={{ fontSize: 30 }}
                          fontSize="large"
                        />
                        <span>Preview Course</span>
                      </button>
                      <button
                        disabled={isLoading}
                        onClick={routeCourse}
                        className="btn btn-dark m-2"
                      >
                        {!isLoading && (
                          <>
                            <VerifiedUser
                              sx={{ fontSize: 30, marginRight: 2 }}
                              fontSize="large"
                            />
                            {!user && <span>Register/Login</span>}
                            {user && data?.enroll && (
                              <span>Continue Learning</span>
                            )}
                            {user && !data?.enroll && <span>Enroll Now</span>}
                          </>
                        )}
                        {isLoading && (
                          <div className="d-flex flex-row align-items-center">
                            <CircularProgress
                              size={15}
                              sx={{ color: "white", marginRight: 2 }}
                            />
                            <p>Connecting</p>
                          </div>
                        )}
                      </button>
                      <button className="btn btn-sm my-4">
                        <Share sx={{ fontSize: 20 }} fontSize="large" />
                        <span>Share Course</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card p-3">
                <h5 className="display-6 card-title">
                  Included in This Course
                </h5>
                <div className="d-flex flex-row my-1">
                  <span>Numbers:</span>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between mx-4 ">
                  <span>
                    Skills Level: <b>All Level</b>
                  </span>
                  <span className="">
                    Students: <b>{data?.student_total}</b>
                  </span>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between mx-4">
                  <span>
                    Language: <b>{data?.language}</b>
                  </span>
                  <span className="">
                    Quiz: <b>{data?.quiz_total}</b>
                  </span>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between mx-4">
                  <span>
                    Assignment: <b>{data?.assignment_total}</b>
                  </span>
                  <span className="">
                    Lecture: <b>{data?.lecture_total}</b>
                  </span>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between mx-4">
                  <span>
                    Research: <b>{data?.project_total}</b>
                  </span>
                  <span className="">
                    Estimate Completion: <b>{data?.estimate_time}</b>
                  </span>
                </div>
                <div className="d-flex flex-column py-4">
                  <h5 className="display-6 card-title">Course Description</h5>
                  {data?.content && (
                    <ReadMore text={data?.content} charLimit={500} />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-3">
                <h5 className="display-6 card-title">
                  Course Instructor Information
                </h5>
                <div className="d-flex flex-row">
                  <img
                    width="30%"
                    style={{ height: 100 }}
                    className="rounded float-left "
                    src={
                      process.env.LOCAL_FILE_PATH +
                      "profile/medium/" +
                      data?.assign_to?.image
                    }
                  />
                  <div className="d-flex flex-column mx-3">
                    <a href="#" className="h5 card-title text-primary">
                      {data?.assign_to?.first_name + " "}
                      {data?.assign_to?.last_name}
                    </a>
                    <div className="d-flex flex-row my-1">
                      <a target="_blank" href={data?.assign_to?.linkedin}>
                        <LinkedIn />
                      </a>
                      <a target="_blank" href={data?.assign_to?.facebook}>
                        <Facebook />
                      </a>
                      <a target="_blank" href={data?.assign_to?.instagram}>
                        <Instagram />
                      </a>
                      <a target="_blank" href={data?.assign_to?.twitter}>
                        <Twitter />
                      </a>
                    </div>
                    <dd
                      dangerouslySetInnerHTML={{
                        __html: data?.assign_to?.description,
                      }}
                    ></dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={Style.header_course}>
          <div className={Style.part_container}>
            
            <div className={Style.rating_row}>
              <Rating />
              <div>
                <span className={Style.rating_text}>.(9.657 ratings).</span>
                <span className={Style.total_number}> {data?.student_total} Students</span>
              </div>
            </div>
            <div className={Style.rating_row}>
              <div>
                <span className={Style.total_number+' m-1'}>Created by:</span>
                <a className={Style.rating_text}>
                    {data?.assign_to?.first_name} {data?.assign_to?.last_name}
                </a>
              </div>
            </div>
            <div style={{ marginTop: 10 }} className={Style.rating_row}>
              <div className={Style.lang_container}>
                <span className={Style.last_update}>
                  <InfoOutlined />
                  Last Updated {moment(data?.updated_at).format("L")}
                </span>
              </div>
            </div>
          </div>
          {/* <div className={Style.part_container}>
            <Preview />
          </div> 
        </div>
       
        {/* {size.height} \ {scrollY} */}
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
