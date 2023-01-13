import React, { createContext, useEffect, useReducer, useState } from "react";
import { _retrieveData, _storeData } from "../../utils/local-storage";

const getData = async () => {
  try {
    const jsonValue = await _retrieveData("membership");
    return jsonValue ? jsonValue : null;
  } catch (e) {
    // error reading value
  }
};
const INITIAL_STATE = {
  membership: getData() || null,
  isFetching: false,
  error: false,
};

export const MembershipContext = createContext(INITIAL_STATE);

export const MembershipContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [membership, setMembership] = useState(null);

  useEffect(() => {
    saveMembership();
  }, []);

  const saveMembership = async () => {
    const jsonValue = await _retrieveData("membership");
    setMembership(jsonValue);
  };

  const changeMembership = async (mem) => {
    setMembership(mem);
    const jsonValue = await _storeData(mem, "membership");
  };

  return (
    <MembershipContext.Provider
      value={{
        membership: membership,
        changeMembership,
      }}
    >
      {children}
    </MembershipContext.Provider>
  );
};
