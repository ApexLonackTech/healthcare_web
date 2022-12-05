import React, { createContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";
import { _retrieveData, _storeData } from "../../utils/local-storage";


const getData = async () => {
    try {
      const jsonValue = await _retrieveData('api')
      return jsonValue?jsonValue:null;
    } catch(e) {
      // error reading value
    }
  }
const INITIAL_STATE =  {
    api:getData() || null,
    isFetching:false,
    error:false,
};

export const AuthContext = createContext (INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state,dispatch]= useReducer(AuthReducer, INITIAL_STATE);
    const [user,setUser]=useState(null);

    useEffect(() => {
      saveData();
    }, [state.user])

    const saveData=async()=>{
      const jsonValue = await _retrieveData('api')
      setUser(jsonValue?jsonValue:null)
    }
    return (
        <AuthContext.Provider value={{
            user: user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}