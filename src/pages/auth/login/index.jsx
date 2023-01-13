import { Facebook, Google } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";

import { ThemeContext } from "../../../context/theme/ThemeContext";
import { AuthContext } from "../../../context/auth/ApiContext";
import Style from "./login.module.scss";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { TextInput } from "../../../components";
import { CircularProgress } from "@mui/material";
import { login } from "../../../context/auth/apiCalls";
import { toast, ToastContainer } from "react-toastify";
import { errorMessage } from "../../../utils/notification";
import axios from "axios";
import { MembershipContext } from "../../../context/membership/membership";
import Language from "../../../i18n/english.json";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState({});
  const { user, dispatch, isFetching, changeToken, changeAuthUser } =
    React.useContext(AuthContext);
  const { membership, changeMembership } = React.useContext(MembershipContext);
  const router = useRouter();
  const { type } = router.query;

  const handleInputs = (label, e) => {
    var val = e.target.value;
    setInput({ ...input, [label]: val });
  };

  useEffect(() => {
    // if (user && membership) {
    //   router.push("/student/home");
    // }
  }, [user]);

  const loginFunction = async (e) => {
    e.preventDefault();
    setLoading(true);
    input["device_name"] = navigator.userAgent;
    const res = await axios
      .post(process.env.API_URL + "/auth/login", input, {
        "Content-type": "application/json",
      })
      .then((resp) => {
        const { data } = resp;
        changeToken(data?.data?.token);
        changeAuthUser(data?.data?.user);
        changeMembership(data?.data?.membership);
        setLoading(false);
        if (data?.data?.membership) {
          router.push("/student/home");
        } else {
          router.push("/student/membership");
        }
      })
      .catch((error) => {
        const err = error?.response?.data;
        errorMessage(toast, err.message);
        setLoading(false);
      });
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
        <form className="card p-3">
          <div className={Style.logo_section}>
            <img src="/logo.png" loading="lazy" />
            <span className={Style.logoText}>{Language.app_name}</span>
          </div>
          <div className="card p-3">
            <TextInput
              label="Email Address"
              placeholder="Email Address"
              type="email"
              onChange={(e) => handleInputs("email", e)}
            />
            <TextInput
              label="Password"
              placeholder="Password"
              type="password"
              onChange={(e) => handleInputs("password", e)}
            />
            {type && (
              <div class="alert alert-success">
                {Language?.login_page?.success_registering}
              </div>
            )}
            <div className={Style.forget_section}>
              <Link href={"/auth/resetpassword"}>
                <a to={"/reset"} className={Style.forget_text}>
                  Forget Password?
                </a>
              </Link>
            </div>
            <div className={Style.input_section}>
              <button
                disabled={isLoading}
                onClick={loginFunction}
                className={Style.submit_info}
              >
                {!isLoading && `Sign In`}
                {isLoading && (
                  <div className={Style.progressContainer}>
                    <CircularProgress
                      size={15}
                      sx={{ color: "white", marginRight: 2 }}
                    />
                    <p>Connecting</p>
                  </div>
                )}
              </button>
            </div>
            <div className={Style.input_section}>
              <span className={Style.sigup}>
                Dont have an account yet?{" "}
                <Link href={"/auth/register"}>
                  <a>Sign Up</a>
                </Link>
              </span>
            </div>
          </div>
          {/* <div className={Style.divider}>
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
          </div> */}
        </form>
      </div>
      <div className={Style.image_section}>
        <img src="/img/learn.png" loading="lazy" />
      </div>
    </div>
  );
};

export default Login;
