import { combineReducers } from "redux";
import authReducer from "reducers/authReducer";
import profileReducer from "reducers/profileReducer";

export default combineReducers({
  auth: authReducer,
  profiles: profileReducer
});
