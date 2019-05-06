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

export const editProfile = (userData, history) => async dispatch => {
  const res = await axios.put("/api/profiles", userData);

  history.push("/myinfo");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const createEducation = (userData, history) => async dispatch => {
  const res = await axios.post("/api/profiles/education", userData);

  history.push("/education");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const createExperience = (userData, history) => async dispatch => {
  const res = await axios.post("/api/profiles/experience", userData);

  history.push("/experience");

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
