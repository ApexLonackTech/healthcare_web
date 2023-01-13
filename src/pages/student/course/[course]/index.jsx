import {
  Archive,
  ArrowBack,
  CardGiftcard,
  GifBoxTwoTone,
  Home,
  MoreVert,
  ShareTwoTone,
  Star,
  Class,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import React from "react";
import Link from "next/link";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import Style from "./courseview.module.scss";
import {
  Accordion,
  Action,
  File,
  Meeting,
  Quiz,
  VideoJS,
  VideoPlayer,
} from "../../../../components";
import course_data_content from "../../../../data/course_content_data.json";
import CircularProgress from "@mui/material/CircularProgress";
import { CircularProgressWithLabel } from "../../../../components/CircularProgressWithLabel/CircularProgressWithLabel";

import dynamic from "next/dynamic";
import {
  StudentModuleQandA,
  StudentModuleView,
  StudentSideMenu,
} from "../../../../layout/Dashboard";
import { useRouter } from "next/router";
import {
  authGetRequest,
  authPostRequest,
} from "../../../api/laravel/public/api";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function ModuleView() {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState({});
  const [view, setView] = React.useState({});
  const [tab, setTab] = React.useState({});
  const [nav, setNav] = React.useState({});
  const [session, setSession] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [isPageLoader, setPageLoader] = React.useState(false);
  const router = useRouter();
  const { course } = router.query;
  // const { data } = getCourseItemAPI(course);
  const playerRef = React.useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    courseViewGet();
  }, [course]);

  const courseViewGet = async () => {
    setPageLoader(true);
    let resp = await authGetRequest(`/account/dashboard/course/${course}`);
    setData(resp.data_r);
    const { coursed, active_course_section, active_course_section_item } =
      resp?.data_r;
    if (coursed) {
      if (active_course_section_item && active_course_section_item.length > 0) {
        let active_course_section_last = active_course_section?.slice(-1)[0];
        let active_course_section_item_last =
          active_course_section_item?.slice(-1)[0];
        setSession(active_course_section_last?.course_section_id);
        viewSection(active_course_section_item_last?.course_section_item, {
          sect_id: active_course_section_last?.course_section_id,
          item_id: active_course_section_item_last?.course_section_item_id,
        });
      } else {
        viewSection(coursed?.course_section[0]?.section_item[0], {
          sect_id: coursed?.course_section[0]?.course_section_id,
          item_id: coursed?.course_section[0]?.section_item[0]?.id,
        });
      }
    }
    setPageLoader(false);
  };

  const menuChange = (e) => {
    setIndex(e);
    window.scrollTo(0, 0);
  };

  const viewSection = async (item, tab) => {
    setPageLoader(true);
    let resp = await authGetRequest(
      `/account/dashboard/course/item/${item?.id}`
    );
    setData(resp?.data_r);
    setNav(resp?.data_r?.nav);
    setTab(tab);
    setView(resp?.data_r?.view);
    setPageLoader(false);
    window.scrollTo(0, 0);
  };

  const prevLecture = () => {
    viewSection(nav?.prev, {
      sect_id: nav?.prev?.course_section_id,
      item_id: nav?.prev?.id,
    });
  };

  const nextLecture = () => {
    viewSection(nav?.next, {
      sect_id: nav?.next?.course_section_id,
      item_id: nav?.next?.id,
    });
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const submitQuiz = async (input) => {
    let form = {};
    form["item_id"] = tab?.item_id;
    form["data"] = JSON.stringify(input);
    setLoading(true);
    let resp = await authPostRequest(`/account/dashboard/test/quiz`, form);
    setLoading(false);
    return resp.data_r;
  };

  return (
    <div
      className={
        theme === "light"
          ? Style.module_view + " l_b d_t"
          : Style.module_view + " d_b l_t"
      }
    >
      <StudentSideMenu menu="course" loader={isPageLoader} />
      <main className={Style.content_container}>
        <section
          className={
            theme === "light"
              ? Style.top_section + " l_r_b l_w_b"
              : Style.top_section + " d_r_b l_t"
          }
        >
          <ul>
            <li>
              {" "}
              <Link href={"/"}>
                <a>
                  <Home /> Home
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
            <li>
              <span>{data?.course?.title}</span>
            </li>
          </ul>
        </section>
        <div className={Style.body_container}>
          <div className={Style.player_section}>
            <a className={theme === "light" ? "l_r_b d_t " : "d_r_b l_t"}>
              {view?.title}
            </a>
            <div
              className={
                theme === "light"
                  ? Style.player + " l_r_b d_t"
                  : Style.player + " d_r_b l_t"
              }
            >
              {view?.description}
            </div>
            <div
              className={
                theme === "light"
                  ? Style.player + " l_r_b d_t"
                  : Style.player + " d_r_b l_t"
              }
            >
              {view?.type === "video" && view?.video?.file && (
                <VideoJS
                  options={{
                    autoplay: false,
                    controls: true,
                    responsive: true,
                    fluid: true,
                    sources: [
                      {
                        src: view?.video?.file?.path,
                        type: "video/mp4",
                      },
                    ],
                  }}
                  onReady={handlePlayerReady}
                />
              )}
              {view?.type === "quiz" && (
                <Quiz
                  items={view?.quiz}
                  loading={loading}
                  submitQuiz={submitQuiz}
                />
              )}
              {view?.type === "meeting" && (
                <Meeting items={view?.meeting} loading={loading} />
              )}
              {view?.type === "resource" && (
                <File items={view?.resource} loading={loading} />
              )}
              {view?.type === "assignment" && (
                <File items={view?.assignment} loading={loading} />
              )}
              {view?.type === "project" && (
                <File items={view?.project} loading={loading} />
              )}
            </div>
            <div
              className={
                theme === "light"
                  ? Style.player + " l_r_b d_t"
                  : Style.player + " d_r_b l_t"
              }
              dangerouslySetInnerHTML={{
                __html: view?.content,
              }}
            ></div>
            <div className="d-flex flex-row-reverse align-items-center my-4">
              {nav && nav.next && (
                <button
                  onClick={nextLecture}
                  className="btn btn-outline-primary m-1"
                >
                  Next Lecture <ArrowForwardIos />
                </button>
              )}
              {nav && nav.prev && (
                <button
                  onClick={prevLecture}
                  className="btn btn-outline-secondary m-1"
                >
                  <ArrowBackIos /> Previous Lecture
                </button>
              )}
            </div>
            <div
              className={
                theme === "light"
                  ? Style.tab_section + " card l_r_b d_t"
                  : Style.tab_section + " card d_r_b l_t"
              }
            >
              <div className={Style.tab_row}>
                <button
                  className={
                    index == -1 ? Style.mobile + " active" : Style.mobile
                  }
                  onClick={() => menuChange(-1)}
                >
                  Course Content
                </button>
                <button
                  className={index == 0 ? Style.active : "btn btn-secondary"}
                  onClick={() => menuChange(0)}
                >
                  Overview
                </button>
                <button
                  className={index == 1 ? Style.active : "btn btn-secondary"}
                  onClick={() => menuChange(1)}
                >
                  Q&A
                </button>
                <button
                  className={index == 2 ? Style.active : "btn btn-secondary"}
                  onClick={() => menuChange(2)}
                >
                  Notes
                </button>
                <button
                  className={index == 3 ? Style.active : "btn btn-secondary"}
                  onClick={() => menuChange(3)}
                >
                  Announcement
                </button>
                <button
                  className={index == 4 ? Style.active : "btn btn-secondary"}
                  onClick={() => menuChange(4)}
                >
                  Reviews
                </button>
                <button
                  className={index == 5 ? Style.active : "btn btn-secondary"}
                  onClick={() => menuChange(5)}
                >
                  Resources
                </button>
              </div>
              <hr />
              <div className="">
                {index == -1 && (
                  <div>
                    {data?.course?.course_section?.map((item, index) => (
                      <Accordion
                        key={index}
                        id={item.id}
                        initial={session}
                        item={item}
                        tab={tab}
                        progress={data?.progress}
                        title={item.title}
                        content={item.section_item}
                        sections={data?.active_course_section}
                        sectionsItem={data?.active_course_section_item}
                        onClick={viewSection}
                      />
                    ))}
                  </div>
                )}
                {index == 0 && <StudentModuleView data={data} />}
                {index == 1 && <StudentModuleQandA />}
                {/* {index == 2 && <QandA />} */}
              </div>
            </div>
          </div>
          <div
            className={
              theme === "light"
                ? Style.list_section + " l_r_b d_t"
                : Style.list_section + " d_r_b l_t"
            }
          >
            <div
              className={
                theme === "light"
                  ? Style.header_monitor + " l_r_b d_t"
                  : Style.header_monitor + " d_r_b l_t"
              }
            >
              {/* <Action
                icon={
                  <CircularProgressWithLabel
                    color={"inherit"}
                    size={45}
                    value={90}
                  />
                }
                border={false}
                style={{ width: 160, padding: 10 }}
                content={
                  <div className={Style.column_cert}>
                    <b>414 of 458 complete</b>
                    <p>Finish course to get certificate</p>
                  </div>
                }
              />
              <button
                className={
                  theme === "light"
                    ? Style.more + " d_br_b d_t"
                    : Style.more + " l_br_b l_t"
                }
              >
                <ShareTwoTone />
                Share
              </button>

              <Action
                icon={<MoreVert />}
                style={{ width: 140, padding: 0, borderRadius: 2 }}
                border={true}
                content={
                  <div
                    className={
                      theme === "light"
                        ? Style.column_data + " d_br_b"
                        : Style.column_data + " l_br_b"
                    }
                  >
                    <li>
                      <Star /> Favourite
                    </li>
                    <li>
                      <Archive /> Archive
                    </li>
                    <li>
                      <CardGiftcard /> Gift Course
                    </li>
                  </div>
                }
              /> */}
            </div>
            <div
              className={
                theme === "light"
                  ? Style.lecture_container + " ll_b"
                  : Style.lecture_container + " d_r_b"
              }
            >
              {data?.course?.course_section?.map((item, index) => (
                <Accordion
                  key={index}
                  id={item.id}
                  initial={session}
                  item={item}
                  tab={tab}
                  progress={data?.progress}
                  title={item.title}
                  content={item.section_item}
                  sections={data?.active_course_section}
                  sectionsItem={data?.active_course_section_item}
                  onClick={viewSection}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ModuleView;
