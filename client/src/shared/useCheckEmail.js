import axios from "../APIS/axios";
const CHECK_EMAIL = "/emailcheck";

const useCheckEmail = (data) => {
  if (data) {
    axios
      .post(CHECK_EMAIL, {
        data,
      })
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
export default useCheckEmail;
