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

export const createInstrument = (userData, history) => async dispatch => {
  dispatch(isLoading());

  const res = await axios.post("/api/profiles/instruments", userData);

  history.push("/instruments");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const deleteInstrument = (id, history) => async dispatch => {
  dispatch(isLoading());

  const res = await axios.delete(`/api/profiles/instruments/${id}`);

  history.push("/instruments");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const deleteExperience = (id, history) => async dispatch => {
  dispatch(isLoading());

  const res = await axios.delete(`/api/profiles/experience/${id}`);

  history.push("/experience");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const deleteEducation = (id, history) => async dispatch => {
  dispatch(isLoading());

  const res = await axios.delete(`/api/profiles/education/${id}`);

  history.push("/education");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const editExperience = (userData, id, history) => async dispatch => {
  const res = await axios.put(`/api/profiles/experience/${id}`, userData);

  history.push("/experience");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const editEducation = (userData, id, history) => async dispatch => {
  const res = await axios.put(`/api/profiles/education/${id}`, userData);

  history.push("/education");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const editInstrument = (userData, id, history) => async dispatch => {
  dispatch(isLoading());

  const res = await axios.put(`/api/profiles/instruments/${id}`, userData);

  history.push("/instruments");

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
