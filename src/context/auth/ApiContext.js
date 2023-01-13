import React, { createContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";
import { _retrieveData, _storeData } from "../../utils/local-storage";

const getUserData = async () => {
  try {
    const jsonValue = await _retrieveData("user_info");
    return jsonValue ? jsonValue : null;
  } catch (e) {
    // error reading value
  }
};

const getUserToken = async () => {
  try {
    const jsonValue = await _retrieveData("user_token");
    return jsonValue ? jsonValue : null;
  } catch (e) {
    // error reading value
  }
};
const INITIAL_STATE = {
  user: getUserData() || null,
  token:getUserToken()||null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [user, setUser] = useState( INITIAL_STATE.user);
  const [token, setToken] = useState(null);

  useEffect(() => {
    saveData();
    saveToken();
  }, []);

  const saveData = async () => {
    const jsonValue = await _retrieveData("user_info");
    setUser(jsonValue ? jsonValue : null);
  };

  const saveToken = async () => {
    const jsonValue = await _retrieveData("user_token");
    setToken(jsonValue ? jsonValue : null);
  };

  const changeAuthUser = async (user) => {
    setUser(user);
    const jsonValue = await _storeData(user, "user_info");
  };

  const changeToken = async (token) => {
    setToken(token);
    const jsonValue = await _storeData(token, "user_token");
  };

console.log(user)
  return (
    <AuthContext.Provider
      value={{
        user: user,
        token: token,
        isFetching: state.isFetching,
        error: state.error,
        changeAuthUser,
        changeToken,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
