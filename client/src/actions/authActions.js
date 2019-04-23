import axios from "axios";

export const registerUser = (userData, history) => async dispatch => {
  try {
    await axios.post("/api/users/register", userData);
    history.push("/login");
  } catch (e) {
    console.log(e);
  }
};
