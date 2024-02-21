import { GET_ISSUER_DETAILS } from "../actions/issuerAction";;
const initialState = {
  IssuerDetails: [],
  issuer: {},
  loading: false,
  error: null,
};
const IssuerReducer = (state = initialState, action) => {
  console.log(action)
    if(action.type === GET_ISSUER_DETAILS ){
      return {...state, issuer: action.payload}
    }
   
    return state;
  }
export default IssuerReducer;