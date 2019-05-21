import { combineReducers } from "redux";
import authReducer from "reducers/authReducer";
import profileReducer from "reducers/profileReducer";
import bandReducer from "reducers/bandReducer";

export default combineReducers({
  auth: authReducer,
  profiles: profileReducer,
  bands: bandReducer
});
