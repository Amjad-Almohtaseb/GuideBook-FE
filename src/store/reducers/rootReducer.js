import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cityReducer from "./cityReducer";
import countryReducer from "./countryReducer";
import guideReducer from "./guideReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: authReducer,
  guides : guideReducer,
  countries: countryReducer,
  cities : cityReducer,
  users: userReducer
});

export default rootReducer;
