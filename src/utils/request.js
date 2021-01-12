import axios from "axios";

const request = ({ method = "get", path, url, body, options }) => {
  if (path) {
    url = process.env.REACT_APP_API_URL + path;
  }
  return axios[method](url, { body, ...options });
};

export default request;
