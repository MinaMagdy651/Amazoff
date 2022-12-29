import axios from "../APIS/axios";
const LOGIN_URL = "/login";

const useFetchLogin = (data) => {
  if (data) {
    axios
      .post(LOGIN_URL, {
        Email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
export default useFetchLogin;
