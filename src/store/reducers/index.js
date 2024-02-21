import { combineReducers } from "redux";

import loginReducer from "./loginReducer.js";
import vendorReducer from "./vendorReducer.js";
import IssuerReducer from "./issuerReducer.js";

const rootReducer = combineReducers({
  login: loginReducer,
  vendor: vendorReducer,
  issuer: IssuerReducer,
  // Add more reducers here if you have them
});

export default rootReducer;
