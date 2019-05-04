import axios from "axios";
import { IS_LOADING, FETCH_PROFILE } from "actions/types";

export const fetchProfile = () => async dispatch => {
  const res = await axios.get("/api/profiles");

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};
