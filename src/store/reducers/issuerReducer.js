import { GET_ALL_SERVICES_BY_ISSUER, GET_ISSUER_DETAILS } from "../actions/issuerAction";;
const initialState = {
  IssuerServices: [],
  issuer: {},
  loading: false,
  error: null,
};
const IssuerReducer = (state = initialState, action) => {
  console.log(action)
    if(action.type === GET_ISSUER_DETAILS ){
      return {...state, issuer: action.payload}
    }
    if(action.type === GET_ALL_SERVICES_BY_ISSUER){
      return {...state, IssuerServices: action.payload}
    }
   
    return state;
  }
export default IssuerReducer;