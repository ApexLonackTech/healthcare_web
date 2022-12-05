import React from "react";
import Style from "./textinput.module.scss";
import PropTypes from "prop-types";

function TextInput(props) {
  const { label, onChange } = props;
  return (
    <div className={Style.input_section}>
    <label>{label}</label>
    <input {...props} />
  </div>
  );
}
TextInput.propTypes = {
    label: PropTypes.string,
  };
TextInput.defaultProps = {
    label: "Add Text",
  };

export default TextInput;
