import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./AuthAction";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(process.env.API_URL + "/auth/login", user, {
      "Content-type": "application/json",
    })
    .catch((e)=>{
        return {
            auth: e,
            isLoading: false,
            isError: true,
          };
    })
    // await AsyncStorage.setItem('@netflixsubuser', JSON.stringify(res.data.accessToken))
    // dispatch(loginSuccess(res.data));
    return {
      auth: data.data,
      isLoading: !data,
      isError: false,
    };
  } catch (error) {
    const err = error?.response?.data;
    return {
      auth: err,
      isLoading: false,
      isError: true,
    };
  }
};

export const register = async (data, dispatch) => {
  dispatch(registerStart());
  // alert(JSON.stringify(data));
  try {
    const res = await axios.post(process.env.API_URL + "auth/register", data);
    dispatch(registerSuccess(res.data));
    return res.data;
  } catch (error) {
    dispatch(registerFailure());
  }
};
