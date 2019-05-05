import {
  IS_LOADING,
  FETCH_PROFILE,
  CLEAR_CURRENT_PROFILE
} from "actions/types";

const initialState = {
  isLoading: false,
  profile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PROFILE:
      return {
        ...state,
        isLoading: false,
        profile: action.payload || {}
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: {}
      };
    default:
      return state;
  }
};
