import Link from "next/link";
import React from "react";
import { ThemeContext } from "../../../context/theme/ThemeContext";
import Language from "../../../i18n/english.json";

function index(props) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <div className="card p-4 ">
      <div className="d-flex flex-row align-items-center justify-content-between w-60">
        <h4 className="h4 mx-4">Welcome to {Language?.app_name}</h4>
        <button className="btn btn-sm btn-danger mx-4">close</button>
      </div>
      <div className="d-flex flex-row align-items-center my-3">
        <dd>
          Thank you for registering. It is necessary you update your profile,
          <br /> click the button below to update your profile
        </dd>
      </div>
      <Link href={"/student/profile"}>
        <button className="btn btn-primary">Update Profile</button>
      </Link>
    </div>
  );
}

export default index;
