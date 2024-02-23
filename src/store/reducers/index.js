import { combineReducers } from "redux";

import loginReducer from "./loginReducer.js";
import vendorReducer from "./vendorReducer.js";
import servicesReducer from "./servicesReducer.js";
import BiddingReducer from "./biddingReducer.js";
import IssuerReducer from "./issuerReducer.js";
const rootReducer = combineReducers({
  login: loginReducer,
  vendor: vendorReducer,
  service: servicesReducer,
  issuer: IssuerReducer,
  bidding: BiddingReducer,
  // Add more reducers here if you have them
});

export default rootReducer;
