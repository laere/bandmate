import axios from "axios";
import {
  IS_LOADING,
  FETCH_PROFILE,
  SET_PROFILE,
  CLEAR_CURRENT_PROFILE
} from "actions/types";

export const fetchBands = () => async dispatch => {
  // dispatch(isLoading());

  const res = await axios.get("/api/profiles/mybands");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};
