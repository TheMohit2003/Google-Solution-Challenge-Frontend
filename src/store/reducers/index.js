import { combineReducers } from "redux";

import loginReducer from "./loginReducer.js";
import vendorReducer from "./vendorReducer.js";

const rootReducer = combineReducers({
  login: loginReducer,
  vendor: vendorReducer,
  // Add more reducers here if you have them
});

export default rootReducer;
