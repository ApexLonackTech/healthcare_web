import React from "react";
import Style from "./rating.module.scss";
import { StarOutlined, StarBorderOutlined } from "@mui/icons-material";

function Rating(props) {
  return (
    <div className={Style.rating_container}>
      <b>4.6</b>
      <StarOutlined />
      <StarOutlined />
      <StarOutlined />
      <StarOutlined />
      <StarBorderOutlined />
    </div>
  );
}

export default Rating;
