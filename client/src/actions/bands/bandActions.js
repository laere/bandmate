import axios from "axios";
import { IS_LOADING, FETCH_BANDS } from "actions/types";
import { isLoading } from "actions/profileActions";

export const fetchBands = () => async dispatch => {
  const res = await axios.get("/api/profiles/mybands");

  dispatch({ type: FETCH_BANDS, payload: res.data });
};

export const searchBands = userData => async dispatch => {
  const res = await axios.post("/api/profiles/mybands/search", userData);

  dispatch({ type: FETCH_BANDS, payload: res.data });
};
