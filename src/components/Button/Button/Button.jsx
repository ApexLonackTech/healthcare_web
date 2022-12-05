import React from "react";
import Style from "./button.module.scss";
import PropTypes from "prop-types";

function Button(props) {
  const { label, onClick } = props;
  return (
    <button {...props} onClick={onClick} className={Style.buttonOnly}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
};
Button.defaultProps = {
  label: "Submit",
};
export default Button;
