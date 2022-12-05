import React from "react";
import { Facebook, Google } from "@mui/icons-material";
import Link from "next/link";
import Style from "./reset.module.scss";
import { TextInput } from "../../../components";

const Reset = () => {
  return (
    <div className={Style.reset}>
      <div className={Style.form_section}>
        <form>
          <div className={Style.logo_section}>
            <img src="/logo.png" loading="lazy" />
            <span className={Style.logoText}>Health Practitioner</span>
          </div>
          <TextInput
            label="Email or Mobile Number"
            placeholder="Email or Mobile Number"
            type="text"
          />
          <div className={Style.input_section}>
            <button className={Style.submit_info}>Reset Access</button>
          </div>
          <div className={Style.input_section}>
            <span className={Style.sigup}>
              Already have an account yet?{" "}
              <Link href={"/auth/login"}>Sign In</Link>
            </span>
          </div>
        </form>
      </div>
      <div className={Style.image_section}>
        <img src="/img/learn.png" loading="lazy" />
      </div>
    </div>
  );
};

export default Reset;
