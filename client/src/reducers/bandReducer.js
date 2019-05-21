import { IS_LOADING, FETCH_BANDS } from "actions/types";

const initialState = {
  isLoading: false,
  bands: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_BANDS:
      return {
        ...state,
        isLoading: false,
        bands: action.payload
      };
    default:
      return state;
  }
};
