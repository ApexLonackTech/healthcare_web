import useSWR from "swr";
import { _retrieveData } from "../../../../utils/local-storage";
import { authFetcher, fetcher, poster } from "../fetcher";
import axios from "axios";

function getCourseListAPI() {
  const { data, error, isLoading } = useSWR("/course/list", fetcher);
  return {
    data: data,
    isLoading,
    isError: error,
  };
}

function getCourseItemAPI(uuid) {
  const { data, error, isLoading } = useSWR("/course/view/" + uuid, fetcher);
  return {
    data: data,
    isLoading,
    isError: error,
  };
}


const authGetRequest = async (url) => {
  try {
    const token = await _retrieveData("user_token");
    const { data,message } = await axios.get(
      process.env.API_URL + `${url}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return {
      data_r: data.data,
      message:message,
      isLoading: !data,
      isError: false,
    };
  } catch (error) {
    const err = error?.response?.data;
    return {
      data_r: err,
      message:err.message,
      isLoading: false,
      isError: true,
    };
  }
}

const authPostRequest = async (url, input) => {
  try {
    const token = await _retrieveData("user_token");
    const { data } = await axios.post(
      process.env.API_URL + `${url}`,
      input,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          'content-type': 'multipart/form-data'
        },
      }
    );
    return {
      data_r: data.data,
      isLoading: !data,
      isError: false,
    };
  } catch (error) {
    const err = error?.response?.data;
    return {
      data_r: err,
      isLoading: false,
      isError: true,
    };
  }
};

export {
  getCourseListAPI,
  getCourseItemAPI,
  authPostRequest,
  authGetRequest
};
