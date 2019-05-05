import axios from "axios";
import {
  IS_LOADING,
  FETCH_PROFILE,
  SET_PROFILE,
  CLEAR_CURRENT_PROFILE
} from "actions/types";

export const fetchProfile = () => async dispatch => {
  dispatch(isLoading());

  const res = await axios.get("/api/profiles");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const createProfile = (userData, history) => async dispatch => {
  dispatch(isLoading());

  const res = await axios.post("/api/profiles", userData);

  history.push("/myinfo");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const isLoading = () => {
  return {
    type: IS_LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
