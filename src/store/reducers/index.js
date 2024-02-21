import { combineReducers } from "redux";

import loginReducer from "./loginReducer.js";
import vendorReducer from "./vendorReducer.js";
import servicesReducer from "./servicesReducer.js";
const rootReducer = combineReducers({
  login: loginReducer,
  vendor: vendorReducer,
  sevice: servicesReducer,
  // Add more reducers here if you have them
});

export default rootReducer;
