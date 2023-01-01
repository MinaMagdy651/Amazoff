import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  sessionStorage.getItem("access_token");

axios.defaults.headers.post["Authorization"] =
  sessionStorage.getItem("access_token");

export default axios.create({
  baseURL: "http://localhost:3500",
});
