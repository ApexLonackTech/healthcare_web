import {
  ArrowBack,
  ChatBubbleSharp,
  Comment,
  Facebook,
  Flag,
  Home,
  Instagram,
  LinkedIn,
  MoreVert,
  North,
  RemoveRedEyeSharp,
  StraightSharp,
  ThumbDown,
  ThumbUp,
  WorkspacePremium,
} from "@mui/icons-material";
import moment from "moment";
import React from "react";
import Link from "next/link";
import {StudentSideMenu} from "../../../../layout/Dashboard";
import { ThemeContext } from "../../../../context/theme/ThemeContext";
import "./view.module.scss";

const DiscussView = () => {
  const { theme, changeTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={
        theme === "light" ? "discuss_view l_b d_t" : "discuss_view d_b l_t"
      }
    >
      <StudentSideMenu menu="course" />
      <main className="content_container">
        <section className="top_section">
          <Link href="/courses/324566?tab=discuss" className="back">
            <ArrowBack fontSize="large" /> Back
          </Link>
        </section>
        <section className="top_row">
          <div
            className={
              theme === "light"
                ? "detail_container l_r_b"
                : "detail_container d_r_b"
            }
          >
            <div className="discuss_item">
              <div className="id_header">
                <img
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                  loading="lazy"
                />
                <div className="identity_column">
                  <span className="name">@Golanginya</span>
                  <span className="time">{moment().format("LL")}</span>
                </div>
              </div>
              <h2 className="title">How to patch KDE on FreeBSD?</h2>
              <img
                src="https://t3.ftcdn.net/jpg/04/15/47/46/360_F_415474633_0Q1hAKF0U1Xiots9CXgzpttuIlJVHGS7.jpg"
                loading="lazy"
              />
              <p className="content">
                Mi magna sed nec nisl mattis. Magna cursus tincidunt rhoncus
                imperdiet fermentum pretium, pharetra nisl. Euismod. Posuere
                arcu arcu consectetur turpis rhoncus tellus. Massa, consectetur
                massa sit fames nulla eu vehicula ullamcorper. Ante sit mauris
                elementum sollicitudin arcu sit suspendisse pretium. Nisl
                egestas fringilla justo bibendum.
              </p>
              <div className="bottom_row">
                <div className="tag_row">
                  <button className={"tag d_m_b"}>Java</button>
                  <button className={"tag d_m_b"}>Python</button>
                  <button className={"tag d_m_b"}>Cusers</button>
                </div>
                <div className="tag_row">
                  <button className="upvote active">
                    <North fontSize="small" /> Vote
                  </button>
                </div>
              </div>
            </div>
            <button className="more">
              <MoreVert />
            </button>
          </div>
          <div
            className={
              theme === "light"
                ? "profile_container l_r_b"
                : "profile_container d_r_b"
            }
          >
            <img
              src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
              loading="lazy"
            />
            <h2>@Golanginya</h2>
            <div className="divide"></div>
            <div className="cert_row">
              <WorkspacePremium fontSize="large" />
              <span className="cert_text"> 2</span>
            </div>
            <div className="divide"></div>
            <div className="cert_row">
              <a className="facebook">
                <Facebook />
              </a>
              <a className="instagram">
                <Instagram />
              </a>
              <a className="linkedin">
                <LinkedIn />
              </a>
            </div>
          </div>
        </section>
        <section className="top_row">
          <div
            className={
              theme === "light"
                ? "comment_container l_r_b"
                : "comment_container d_r_b"
            }
          >
            <textarea
              className={
                theme === "light" ? "select l_b d_br_b" : "select d_b d_br_b"
              }
              placeholder="Type your wise suggestion"
            ></textarea>
            <div className="bottom_action">
            <div className="button_row">
                <button className="d_m_b">Cancel</button>
                <button className="active"><Comment /> Suggest</button>
            </div>
        </div>
          </div>
        </section>
        <section className="top_row">
          <div
            className={
              theme === "light"
                ? "comment_list l_r_b"
                : "comment_list d_r_b"
            }
          >
                 <div className="discuss_item">
              <div className="id_header">
                <img
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                  loading="lazy"
                />
                <div className="identity_column">
                  <span className="name">@Golanginya</span>
                  <span className="time">{moment().format("LL")}</span>
                </div>
              </div>
              <p className="content">
                Mi magna sed nec nisl mattis. Magna cursus tincidunt rhoncus
                imperdiet fermentum pretium, pharetra nisl. Euismod. Posuere
                arcu arcu consectetur turpis rhoncus tellus. Massa, consectetur
                massa sit fames nulla eu vehicula ullamcorper. Ante sit mauris
                elementum sollicitudin arcu sit suspendisse pretium. Nisl
                egestas fringilla justo bibendum.
              </p>
              <div className="bottom_row">
                <div className="tag_row">
                  <button className={"tag "}><ThumbUp /> 12</button>
                  <button className={"tag "}><ThumbDown /> 13</button>
                </div>
                <div className="tag_row">
                  <button className="upvote active">
                    <Flag fontSize="small" /> Report Abuse
                  </button>
                </div>
              </div>
            </div>
          </div>
          </section>
      </main>
    </div>
  );
};

export default DiscussView;
