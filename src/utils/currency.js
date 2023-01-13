
import moment from "moment";
import React from "react";

const addComma = (num) => {
  return num
    ? "₦" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : "₦0";
};

export {
    addComma,
}
