import React from 'react';
import { Facebook, Google } from "@mui/icons-material";
import Link  from "next/link";
import Style from "./register.module.scss"
import { useRouter } from 'next/router';
import Language from "../../../i18n/english.json";
import { AuthContext } from '../../../context/auth/ApiContext';
import { CircularProgress } from '@mui/material';
import axios from "axios";
import { errorMessage } from '../../../utils/notification';
import { toast } from 'react-toastify';

const Register = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState({});
  const { user, dispatch, isFetching, changeToken, changeAuthUser } =
    React.useContext(AuthContext);
  const router = useRouter();

  const handleInputs = (label, e) => {
    var val = e.target.value;
    setInput({ ...input, [label]: val });
  };

  const registerFunction = async (e) => {
    e.preventDefault();
    setLoading(true);
    input["device_name"] = navigator.userAgent;
    const res = await axios
      .post(process.env.API_URL + "/auth/register", input, {
        "Content-type": "application/json",
      })
      .then((resp) => {
        const { data } = resp;
        setLoading(false);
        if(data?.message==='success'){
          router.push("/auth/login?type=success");
        }
      })
      .catch((error) => {
        const err = error?.response?.data;
        errorMessage(toast, err.message);
        setLoading(false)
      });
  };

    return (
        <div className={Style.register}>
      {/* <MenuBar /> */}
      <div className={Style.form_section}>
        <form>
          <div className={Style.logo_section}>
            <img src="/logo.png" loading="lazy" />
            <span className={Style.logoText}>{Language.app_name}</span>
          </div>
          <div className={Style.input_section}>
            <label>Username</label>
            <input type="text" onChange={(e) => handleInputs("username", e)} placeholder="Username" />
          </div>
          <div className={Style.input_section}>
            <label>Email Address</label>
            <input type="email" onChange={(e) => handleInputs("email", e)} placeholder="Email Address" />
          </div>
          <div className={Style.input_section}>
            <label>Phone Number</label>
            <input type="text" onChange={(e) => handleInputs("phone", e)} placeholder="Phone number" />
          </div>
          <div className={Style.input_section}>
            <label>Password</label>
            <input type="password" onChange={(e) => handleInputs("password", e)} placeholder="Password" />
          </div>
          
          {/* <div className="forget_section">
            <Link className="forget_text">Forget Password?</Link>
          </div> */}
          <div className={Style.input_section}>
            <button disabled={isLoading} onClick={registerFunction} className={Style.submit_info+" d-flex align-items-center btn"}>
            {!isLoading && `Register`}
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