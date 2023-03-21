import axios from "axios";
import { api } from "./config";
import { Typography } from "antd";
import notificationHook from "../components/hook/notificationHook";

const { Paragraph } = Typography;

const BEARER = "Bearer ";

if (typeof window !== "undefined") {
  // Perform localStorage action
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;

  if (token)
    axios.defaults.headers.common["Authorization"] =
      BEARER + token.replace(/"/g, "");
}

axios.defaults.baseURL = api.API_URL;
// axios.defaults.baseURL = api.API_URL_DEV;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log("Request error: " + error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // console.log("🚀 interceptors.response", response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ? response.data : response;
  },
  function (error) {
    console.log("Response error: " + error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.message === "Request failed with status code 403") {
      // notificationHook({
      //   type: "error",
      //   message: "Lỗi",
      //   description: (
      //     <>
      //       <Paragraph> {error.message} </Paragraph>
      //       <Paragraph>Vui lòng đăng nhập lại để tiếp tục sử dụng!</Paragraph>
      //     </>
      //   ),
      // });

      // setTimeout(function () {
      //   window.location.replace("/logout");
      // }, 3000);
      window.location.replace("/logout");
      return Promise.reject(error);
    }
  }
);

/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token) => {
  axios.defaults.headers.common["Authorization"] =
    BEARER + token.replace(/"/g, "");
};

class APIClient {
  get = async (url, params) => {
    let response;
    let paramKeys = [];

    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });
      const queryString =
        paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      await axios
        .get(`${url}?${queryString}`, params)
        .then(function (res) {
          response = res;
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      await axios
        .get(`${url}`, params)
        .then(function (res) {
          response = res;
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    return response;
  };

  post = (url, data) => {
    return axios.post(url, data);
  };

  put = (url, data) => {
    return axios.put(url, data);
  };

  delete = (url, config) => {
    return axios.delete(url, { ...config });
  };

  createWithFormData = (url, data) => {
    let formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return axios.post(url, formData, {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
  };

  updateWithFormData = (url, data) => {
    let formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return axios.put(url, formData, {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
  };
}

const getLoggedinUser = () => {
  const user = JSON.parse(localStorage.getItem("infoUsers"));
  if (!user) {
    return null;
  } else {
    return user;
  }
};

export { APIClient, setAuthorization, getLoggedinUser };
