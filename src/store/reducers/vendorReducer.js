import { GET_VENDOR_DETAILS } from '../actions/vendorActions';
import { GET_ALL_SERVICES, GET_LIVE_SERVICES } from '../actions/vendorActions';
import { GET_WATCH_LIST } from '../actions/vendorActions';
import { INTEREST } from '../actions/vendorActions';
// import { GET_ALL_VENDORS } from '../actions/vendorActions';
const initialState = {
  vendorDetails: null,
  vendor: {},
  services: [],
  liveservices: [],
  loading: false,
  error: null,
};
const vendorReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_VENDOR_DETAILS:
      return { ...state, vendor: action.data, loading: false };
    case GET_ALL_SERVICES:
      return { ...state, services: action.payload.services, loading: false };
    case GET_LIVE_SERVICES:
      return { ...state, services: action.payload, loading: false };
    case GET_WATCH_LIST:
      return { ...state, services: action.payload, loading: false };
    case INTEREST:
      return { ...state, services: action.payload, loading: false };
    // case types.GET_ALL_VENDORS:
    //   return { ...state, vendors: action.payload, loading: false };
    // case types.VENDOR_LOADING:
    //   return { ...state, loading: true };
    // case types.VENDOR_ERROR:
    //   return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
export default vendorReducer;