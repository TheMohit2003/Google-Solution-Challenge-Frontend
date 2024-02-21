import * as types from '../actions/vendorActions';
const initialState = {
  vendorDetails: [],
  vendor: {},
  services:{},
  loading: false,
  error: null,
};
const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VENDOR_DETAILS:
      return { ...state, vendor: action.vendorDetails, loading: false };
    case types.GET_ALL_SERVICES:
        return { ...state, services: action.services, loading: false };
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