import { CircularProgress } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/auth/ApiContext";
import { ThemeContext } from "../../../context/theme/ThemeContext";
import { StudentSideMenu } from "../../../layout/Dashboard";
import { errorMessage, successMessage } from "../../../utils/notification";
import { authPostRequest } from "../../api/laravel/public/api";
import Style from "./profile.module.scss";

const profile = () => {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  const { user, changeAuthUser } = React.useContext(AuthContext);
  const [isLoading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState({});

  const handleInputs = (label, e) => {
    // if (!e.target.files?.length) {
    var val = e.target.value;
    setInput({ ...input, [label]: val });
    // } else {
    //   const formData = new FormData();
    //   Array.from(e.target.files).forEach((file) => {
    //     formData.append(event.target.name, file);
    //   });
    //   setInput({ ...input, [label]: formData });
    // }
  };

  React.useEffect(() => {
    setInput(user);
  }, [user]);

  const submitProfile = async (event) => {
    event.preventDefault();
    setLoading(true);
    input["device_name"] = navigator.userAgent;
    const { data_r, isLoading, isError } = await authPostRequest(
      "/account/update",
      input
    );
    if (isError) {
      errorMessage(toast, data_r.message);
    } else {
      changeAuthUser(data_r);
      successMessage(toast, "Information updated successfully");
    }
    setLoading(false);
  };

  const onChangeHandler = async (e) => {
    const file = e.target.files[0];
    if (file.size > 1000024) {
      errorMessage(toast, "File size cannot exceed more than 1MB");
      return false;
    } else {
      const formData = new FormData();
      formData.append("image", file);
      const { data_r, isLoading, isError } = await authPostRequest(
        "/account/update/image",
        formData
      );
      if (isError) {
        errorMessage(toast, data_r.message);
      } else {
        changeAuthUser(data_r);
        successMessage(toast, "Information updated successfully");
      }
      setLoading(false);
    }
  };

  return (
    <div
      className={
        theme === "light"
          ? Style.home_container + " l_b d_t"
          : Style.home_container + " d_b l_t"
      }
    >
      {/* <Topbar /> */}
      <StudentSideMenu menu="profile" />
      <main
        className={
          theme === "light" ? Style.content_container : Style.content_container
        }
      >
        <div
          className={
            theme === "light"
              ? Style.tutorial_section + " l_r_b d_t "
              : Style.tutorial_section + " d_r_b l_t "
          }
        >
          <div className="mx-1">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Profile</h5>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-start align-items-sm-center gap-4">
                <img
                  src={input?.image?process.env.LOCAL_FILE_PATH+'profile/small/'+input?.image:"/icons/avatar.png"}
                  alt="user-avatar"
                  className="d-block rounded"
                  height="100"
                  width="100"
                  id="uploadedAvatar"
                />
                <div className="button-wrapper">
                  <label
                    for="upload"
                    className="btn btn-primary me-2 mb-4"
                    tabindex="0"
                  >
                    <span className=" d-sm-block">Upload new photo</span>
                    <i className="bx bx-upload d-block d-sm-none"></i>
                    <input
                      type="file"
                      id="upload"
                      onChange={onChangeHandler}
                      className="account-file-input"
                      hidden
                      accept="image/png, image/jpeg"
                    />
                  </label>
                  <button
                    type="button"
                    className="btn btn-outline-secondary account-image-reset mb-4"
                  >
                    <i className="bx bx-reset d-block d-sm-none"></i>
                    <span className=" d-sm-block">Reset</span>
                  </button>

                  {/* <small className="text-muted mb-0">
                    Allowed JPG, GIF or PNG. Max size of 800K
                  </small> */}
                </div>
              </div>
            </div>
            <form
              method="POST"
              onSubmit={submitProfile}
              enctype="multipart/form-data"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className=" mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              First Name
                            </label>
                            <input
                              value={input?.first_name}
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputs("first_name", e)}
                              name="first_name"
                              id="basic-default-fullname"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Middle Name
                            </label>
                            <input
                              value={input?.middle_name}
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputs("middle_name", e)}
                              name="middle_name"
                              id="basic-default-fullname"
                              placeholder="Middle Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Last Name
                            </label>
                            <input
                              value={input?.last_name}
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputs("last_name", e)}
                              name="last_name"
                              id="basic-default-fullname"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Gender
                            </label>
                            <select
                              name="gender"
                              onChange={(e) => handleInputs("gender", e)}
                              className="form-control"
                            >
                              <option
                                selected={
                                  user?.gender === "male" ? true : false
                                }
                                value="male"
                              >
                                Male
                              </option>
                              <option
                                selected={
                                  user?.gender === "female" ? true : false
                                }
                                value="female"
                              >
                                Female
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Phone Number
                            </label>
                            <input
                              value={input?.phone}
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputs("phone", e)}
                              name="phone"
                              id="basic-default-fullname"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Email Address
                            </label>
                            <input
                              value={input?.email}
                              type="text"
                              disabled
                              className="form-control"
                              name="email"
                              id="basic-default-fullname"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Password (Leave empty if you are not changing)
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              onChange={(e) => handleInputs("password", e)}
                              name="password"
                              id="basic-default-fullname"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Confirm Password (Leave empty if you are not
                              changing)
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="repassword"
                              onChange={(e) => handleInputs("repassword", e)}
                              id="basic-default-fullname"
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          for="basic-default-company"
                        >
                          Biography & Achievements
                        </label>
                        <textarea
                          className="form-control"
                          onChange={(e) => handleInputs("description", e)}
                          name="description"
                          value={input?.description}
                          placeholder="Full explanation what the content is meant to achieve"
                        >
                          {input?.description}
                        </textarea>
                      </div>
                      <div className="row">
                        {/* <div className="col-md-4"></div> */}
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Portfolio Website
                            </label>
                            <input
                              value={input?.website}
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputs("website", e)}
                              name="website"
                              id="basic-default-fullname"
                              placeholder="Official Website"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Linkedin Url
                            </label>
                            <input
                              value={input?.linkedin}
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputs("linkedin", e)}
                              name="linkedin"
                              id="basic-default-fullname"
                              placeholder="Linkedin Url"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Twitter Url
                            </label>
                            <input
                              value={input?.twitter}
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputs("twitter", e)}
                              name="twitter"
                              id="basic-default-fullname"
                              placeholder="Twitter Url"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Facebook Url
                            </label>
                            <input
                              value={input?.facebook}
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputs("facebook", e)}
                              name="facebook"
                              id="basic-default-fullname"
                              placeholder="Facebook Url"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              for="basic-default-fullname"
                            >
                              Instagram Url
                            </label>
                            <input
                              value={input?.instagram}
                              type="text"
                              className="form-control"
                              onChange={(e) => handleInputs("instagram", e)}
                              name="instagram"
                              id="basic-default-fullname"
                              placeholder="Instagram Url"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button
                          disabled={isLoading}
                          type="submit"
                          className="btn btn-primary"
                        >
                          {!isLoading && `Submit`}
                          {isLoading && (
                            <div className="d-flex flex-row align-items-center">
                              <CircularProgress
                                size={15}
                                sx={{ color: "white", marginRight: 2 }}
                              />
                              <p>Connecting</p>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default profile;
