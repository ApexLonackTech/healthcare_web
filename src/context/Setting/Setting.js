import React, { createContext, useEffect, useReducer, useState } from "react";
import { _retrieveData, _storeData } from "../../utils/local-storage";

const getData = async () => {
  try {
    const jsonValue = await _retrieveData("setting");
    return jsonValue ? jsonValue : null;
  } catch (e) {
    // error reading value
  }
};
const INITIAL_STATE = {
  setting: getData() || null,
  isFetching: false,
  error: false,
};

export const settingContext = createContext(INITIAL_STATE);

export const SettingContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [setting, setSetting] = useState(null);

  useEffect(() => {
    saveSetting();
  }, []);

  const saveSetting = async () => {
    const jsonValue = await _retrieveData("setting");
    setSetting(jsonValue);
  };

  const changeSetting = async (mem) => {
    setSetting(mem);
    const jsonValue = await _storeData(mem, "setting");
  };

  return (
    <settingContext.Provider
      value={{
        setting: setting,
        changeSetting,
      }}
    >
      {children}
    </settingContext.Provider>
  );
};
