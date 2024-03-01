import { GET_ALL_SERVICES_BY_ISSUER, GET_ISSUER_DETAILS, GET_ALL_LIVE_SERVICES_BY_ISSUER } from "../actions/issuerAction";;
const initialState = {
  IssuerServices: [],
  issuer: {},
  LiveServices: [],
  loading: false,
  error: null,
};
const IssuerReducer = (state = initialState, action) => {

    if(action.type === GET_ISSUER_DETAILS ){
      return {...state, issuer: action.payload}
    }
    if(action.type === GET_ALL_SERVICES_BY_ISSUER){
      return {...state, IssuerServices: action.payload}
    }
    if(action.type === GET_ALL_LIVE_SERVICES_BY_ISSUER){
      return {...state, LiveServices: action.payload}
    }
   
    return state;
  }
export default IssuerReducer;