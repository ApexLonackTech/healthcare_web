import { VideoCall } from "@mui/icons-material";
import moment from "moment";
import React from "react";

function Meeting(props) {
  const { items } = props;
  return (
    <div className="row mb-5">
      <div className="col-md-12 col-lg-12 mb-3">
        <div className="card mb-4">
          <div className="card-body">
            <h5 id="view_title" className="card-title">
              {items?.title}
            </h5>
            <div
              id="view_description"
              className="card-subtitle text-muted mb-3"
            >
              {items?.description}
            </div>
            <p
              id="view_content"
              className="card-text"
              dangerouslySetInnerHTML={{ __html: items?.content }}
            ></p>
            <div className="demo-inline-spacing mt-3 mb-3">
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <i className="bx bx-calendar me-2"></i>
                  Start Date:{" "}
                  <b className="event_text" id="view_start_date">
                    {moment(items?.start_date).format("LL")}
                  </b>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bx bx-calendar me-2"></i>
                  End Date:{" "}
                  <b className="event_text" id="view_end_date">
                    {moment(items?.end_date).format("LL")}
                  </b>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bx bx-time-five me-2"></i>
                  Start Time:
                  <b className="event_text" id="view_start_time">
                    {items?.start_time}
                  </b>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bx bx-time-five me-2"></i>
                  End Time:
                  <b className="event_text" id="view_end_time">
                    {items?.end_time}
                  </b>
                </li>
              </ul>
            </div>
            <a
              id="view_meeting_link"
              href={items?.meeting_link}
              target="_blank"
              className="card-link"
            >
             <VideoCall/> Join Meeting Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
