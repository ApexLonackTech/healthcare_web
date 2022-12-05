import React from "react";
import Style from "./preview.module.scss";
import {
    InfoOutlined,
    LanguageOutlined,
    PlayCircleFilledOutlined,
    FavoriteBorderOutlined,
    ScheduleOutlined,
    PhoneAndroidOutlined,
    AllInclusiveOutlined,
    HelpOutlineOutlined,
  } from "@mui/icons-material";

function Preview(props) {
  return (
    <div className={Style.previewContainer}>
      <img src={"/img/course2.png"} loading="lazy" />
      <div className={Style.preview}>
        <div className={Style.play}>
          <PlayCircleFilledOutlined sx={{ fontSize: 70 }} fontSize="large" />
          <span>Preview Course</span>
        </div>
      </div>
      <div className={Style.centerSection}>
        <div className={Style.price_section}>
          <h4 className={Style.amount}>₦5,500</h4>
          <div className={Style.oldPrice}>₦10,500</div>
          <div className={Style.percent}>43% off</div>
        </div>
        <div className={Style.timer_section}>
          <p className={Style.timerPrice}>
            <b>
              <ScheduleOutlined /> 5 hours{" "}
            </b>
            left at this price!
          </p>
        </div>
        <div className={Style.price_section}>
          <button className={Style.addCart}>Add to Cart</button>
          <button className={Style.addFavourite}>
            <FavoriteBorderOutlined />
          </button>
        </div>
        <div className={Style.price_section}>
          <button className={Style.buyNow}>Buy Now</button>
        </div>
        <div className={Style.bottom_section}>
          <div className={Style.guarantee}>30-Day Money-Back Guarantee</div>
          <div className={Style.include_section}>
            <h5 className={Style.includeLabel}>This course includes:</h5>
            <div className={Style.iconRow}>
              <PhoneAndroidOutlined sx={{ fontSize: 14, marginRight: 2 }} />
              Access on Mobile
            </div>
            <div className={Style.iconRow}>
              <AllInclusiveOutlined sx={{ fontSize: 14, marginRight: 2 }} />
              Full Lifetime Access
            </div>
            <div className={Style.iconRow}>
              <HelpOutlineOutlined sx={{ fontSize: 14, marginRight: 2 }} />6
              Practice test
            </div>
            <div className={Style.bottomRow}>
              <a>Share</a>
              <a>Gift Course</a>
              <a>Apply Coupon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
