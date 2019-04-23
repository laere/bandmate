import axios from "axios";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "actions/types";

export const registerUser = (userData, history) => async dispatch => {
  try {
    await axios.post("/api/users/register", userData);
    history.push("/login");
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = (userData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/users/login", userData);

    const token = res.data;

    localStorage.setItem("jwtToken", token);

    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    }

    const decoded = jwt_decode(token);

    console.log(decoded);

    dispatch(setCurrentUser(decoded));
  } catch (e) {
    console.log(e);
  }
};

export const setCurrentUser = decodedToken => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedToken
  };
};
