import * as types from '../actions/issuerAction';
const initialState = {
  IssuerDetails: [],
  vendor: {},
  services:{},
  loading: false,
  error: null,
};
const IssuerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ISSUER_DETAILS:
      return { ...state, vendor: action.IssuerDetails, loading: false };
    // case types.GET_ALL_SERVICES:
    //     return { ...state, services: action.services, loading: false };
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
export default IssuerReducer;