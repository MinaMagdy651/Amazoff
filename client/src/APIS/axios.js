import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("access_token");

axios.defaults.headers.post["Authorization"] =
  "Bearer " + sessionStorage.getItem("access_token");
export default axios.create({
  baseURL: "http://localhost:3500",
});
