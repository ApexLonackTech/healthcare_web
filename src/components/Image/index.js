import React from "react";
import PropTypes from "prop-types";

function ImageOp(props) {
    const { url, path, name, storage } = props;
  return (
    <img
    {...props}
      src={
        storage === "local"
          ? process.env.LOCAL_FILE_PATH + url + path + name
          : url
      }
    />
  );
}
ImageOp.propTypes = {
    url: PropTypes.string,
    path: PropTypes.string,
    name: PropTypes.string,
    storage: PropTypes.string
  };
  ImageOp.defaultProps = {
    url: "Submit",
    path: "",
    name: "",
    storage: "local"
  };

export default ImageOp;
