import { Facebook, Google } from "@mui/icons-material";
import React, { useContext } from "react";

import { ThemeContext } from "../../../context/theme/ThemeContext";
import Style from "./login.module.scss";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { TextInput } from "../../../components";
import { CircularProgress } from '@mui/material';

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [isLoading,setLoading]=React.useState(false);
  const router = useRouter();

  const loginFunction = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push("/student/home");
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className={Style.login}>
      {/* <MenuBar /> */}
      <div className={Style.form_section}>
        <form>
          <div className={Style.logo_section}>
            <img src="/logo.png" loading="lazy" />
            <span className={Style.logoText}>Health Practitioner</span>
          </div>
          <TextInput
            label="Email Address/Username"
            placeholder="Email Address"
            type="email"
          />
           <TextInput
            label="Password"
            placeholder="Password"
            type="password"
          />
          <div className={Style.forget_section}>
          <Link href={"/auth/resetpassword"}>
          <a to={"/reset"} className={Style.forget_text}>
              Forget Password?
            </a>
          </Link>
           
          </div>
          <div className={Style.input_section}>
            <button onClick={loginFunction} className={Style.submit_info}>
             {!isLoading&& `Sign In`} 
             {isLoading&& <div className={Style.progressContainer}>
             <CircularProgress size={15} sx={{color:'white',marginRight:2}} />
             <p>Connecting</p>
             </div> } 
            </button>
          </div>
          <div className={Style.input_section}>
            <span className={Style.sigup}>
              Dont have an account yet? <Link href={"/auth/register"}><a >Sign Up</a></Link>
            </span>
          </div>
          <div className={Style.divider}>
            <div className={Style.line_break} />
            <p>Or login with</p>
            <div className={Style.line_break} />
          </div>
          <div className={Style.social_container}>
            <FacebookLogin
              appId="" //APP ID NOT CREATED YET
              fields="name,email,picture"
              callback={responseFacebook}
            />
            <GoogleLogin
              clientId="" //CLIENTID NOT CREATED YET
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </form>
      </div>
      <div className={Style.image_section}>
        <img src="/img/learn.png" loading="lazy" />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
