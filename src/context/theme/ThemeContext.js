import React, { createContext, useEffect, useReducer, useState } from "react";
import { _retrieveData, _storeData } from "../../utils/local-storage";

const getData = async () => {
  try {
    const jsonValue = await _retrieveData("theme");
    return jsonValue ? jsonValue : null;
  } catch (e) {
    // error reading value
  }
};
const INITIAL_STATE = {
  theme: getData() || "light",
  isFetching: false,
  error: false,
};

export const ThemeContext = createContext(INITIAL_STATE);

export const ThemeContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    saveTheme();
  }, []);

  const saveTheme = async () => {
    const jsonValue = await _retrieveData("theme");
    setTheme(jsonValue === "dark" ? "dark" : "light");
  };

  const changeTheme = async (them) => {
    setTheme(them);
    const jsonValue = await _storeData(them, "theme");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
