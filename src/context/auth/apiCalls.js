import axios from "axios";
import { baseUrl } from "../../.env";
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./AuthAction";

export const login = async (user,dispatch)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post(baseUrl+"auth/login",user);
        // await AsyncStorage.setItem('@netflixsubuser', JSON.stringify(res.data.accessToken))
        dispatch(loginSuccess(res.data));
        return res.data;
    } catch (error) {
       
        dispatch(loginFailure())
    }
}

export const register = async (data,dispatch)=>{
    dispatch(registerStart());
    // alert(JSON.stringify(data));
    try {
        const res = await axios.post(baseUrl+"auth/register",data);
        dispatch(registerSuccess(res.data));
        return res.data;
    } catch (error) {
        dispatch(registerFailure())
    }
}