import { Email, Facebook, FacebookOutlined, FacebookTwoTone, Instagram, Map, Phone, Twitter, YouTube } from "@mui/icons-material";
import React from "react";
import Style from "./footer.module.scss";

function Footer(props) {
  return (
    <div className={Style.footer}>
      <div className={Style.section_column+" "+Style.first} >
        <div className={Style.logoContainer}>
          <img src="/logo.png" loading="lazy" />
          <span className={Style.logoName}>Health Practitioner</span>
        </div>
        <p className={Style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim, sem non convallis molestie.
        </p>
        <div className={Style.socialContainer}>
            <span className={Style.social}> <Facebook /></span>
            <span className={Style.social}> <Twitter /></span>
            <span className={Style.social}> <Instagram /></span>
            <span className={Style.social}> <YouTube /></span>
            <span className={Style.social}> <Instagram /></span>
        </div>
      </div>
      <div className={Style.section_column}>
        <span className={Style.title}>Home</span>
        <ul>
            <li>Get the app</li>
            <li>All Courses</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className={Style.section_column}>
        <span className={Style.title}>Careers</span>
        <ul>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            {/* <li>Account</li> */}
        </ul>
      </div>
      <div className={Style.section_column}>
        <span className={Style.title}>Terms</span>
        <ul>
            <li>Privacy Policy</li>
            <li>Cookie Setting</li>
            <li>Site Map</li>
            <li>Accessibility Statement</li>
        </ul>
      </div>
      <div className={Style.section_column}>
        <span className={Style.title}>Contact</span>
        <ul>
            <li><Map sx={{marginRight:2}} /> 2, Alkoloba Street</li>
            <li><Email sx={{marginRight:2}}/> lakeshore@info.com</li>
            <li><Phone sx={{marginRight:2}} /> +2341234567</li>
            {/* <li>Account</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
