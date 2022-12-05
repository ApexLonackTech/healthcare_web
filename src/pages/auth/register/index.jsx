import React from 'react';
import { Facebook, Google } from "@mui/icons-material";
import Link  from "next/link";
import Style from "./register.module.scss"

const Register = () => {
    return (
        <div className={Style.register}>
      {/* <MenuBar /> */}
      <div className={Style.form_section}>
        <form>
          <div className={Style.logo_section}>
            <img src="/logo.png" loading="lazy" />
            <span className={Style.logoText}>Health Practitioner</span>
          </div>
          <div className={Style.input_section}>
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className={Style.input_section}>
            <label>Email Address/Username</label>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className={Style.input_section}>
            <label>Phone Number</label>
            <input type="text" placeholder="Phone number" />
          </div>
          <div className={Style.input_section}>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          
          {/* <div className="forget_section">
            <Link className="forget_text">Forget Password?</Link>
          </div> */}
          <div className={Style.input_section}>
            <button className={Style.submit_info}>Register</button>
          </div>
          <div className={Style.input_section}>
            <span className={Style.sigup}>
              Already have an account yet? <Link href={'/auth/login'}>Sign In</Link>
            </span>
          </div>
         
        </form>
      </div>
      <div className={Style.image_section}>
        <img src="/img/register.png" loading="lazy" />
      </div>
      {/* <Footer /> */}
    </div>
    );
};

export default Register;