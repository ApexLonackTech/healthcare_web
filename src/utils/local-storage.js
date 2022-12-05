import moment from "moment";
import React from "react";

const _deleteData = async (key) => {
  try {
    localStorage.removeItem("@Lakeshore:" + key);
  } catch (error) {
    // Error saving data
  }
};

const _storeData = async (item, key) => {
  try {
    localStorage.setItem("@Lakeshore:" + key, JSON.stringify(item));
  } catch (error) {
    // Error saving data
  }
};
const _retrieveData = async (key) => {
  try {
    const jsonValue = localStorage.getItem("@Lakeshore:" + key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    return false;
  }
};

const _retrieveToken = async () => {
  try {
    const jsonValue = localStorage.getItem("@Lakeshore:token");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    return null;
  }
};
//   const addComma=(num)=>{
//     return num?'₦'+num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):'₦0';
// }

// const addCommaN=(num)=>{
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() *
// charactersLength));
//  }
//  return result;
// }

// function successMessage(toast,message){
//   toast.success(message, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     });
// }

// function errorMessage(toast,message){
//   toast.error(message, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     });
// }

export {
  _storeData,
  _retrieveData,
  _retrieveToken,
  _deleteData,
  // addCommaN,
  // makeid,
  // successMessage,
  // errorMessage
};
