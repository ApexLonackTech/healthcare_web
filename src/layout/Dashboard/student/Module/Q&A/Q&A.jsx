import React from "react";
import Style from "./q&a.module.scss";
import Box from "@mui/material/Box";
import {
  SearchTextInput,
  MultipleSelect,
  DiscussItem,
} from "../../../../../components";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function QandA(props) {
  const select_data1 = [
    {
      name: "All Lecture",
      value: 0,
    },
    {
      name: "Current Lecture",
      value: 1,
    },
  ];
  const select_data2 = [
    {
      name: "Sort by recommended",
      value: 0,
    },
    {
      name: "Sort by most recent",
      value: 1,
    },
    {
      name: "Sort by most upvoted",
      value: 1,
    },
  ];
  const select_data3 = [
    {
      name: "Question I'm following",
      value: 0,
    },
    {
      name: "Question I asked",
      value: 1,
    },
    {
      name: "Question without responses",
      value: 1,
    },
  ];
  return (
    <div className={Style.QandA}>
      <div className={Style.forms_section}>
        <SearchTextInput placeholderLabel="Search all course questions" />
        <div className={Style.row_select}>
          <div className={Style.size_col}>
            <MultipleSelect content={select_data1} />
          </div>
          <div className={Style.size_col}>
            <MultipleSelect content={select_data2} />
          </div>
          <div className={Style.size_col}>
            <MultipleSelect content={select_data3} />
          </div>
        </div>
        <div className={Style.row_select}>
          <h5>
            All discussions in this course <span>(3000)</span>
          </h5>
        </div>
        <ul className={Style.col_discuss}>
            <DiscussItem />
            <DiscussItem />
            <button className={Style.see_more}>See More</button>
        </ul>
        <div className={Style.ask_container}>
            <a className={Style.ask}>Ask a question</a>
        </div>
      </div>
    </div>
  );
}

export default QandA;
