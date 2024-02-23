import { GET_NEW_BID } from '../actions/biddingActions';
import { GET_SERVICES_DETAILS } from '../actions/biddingActions';
const initialState = {
    newBid: {},
    loading: false,
    error: null,
};
const BiddingReducer = (state = initialState, action) => {
    console.log(action)
    if (action.type === GET_NEW_BID) {
        return { ...state, newBid: action.payload }
    }
    if (action.type === GET_SERVICES_DETAILS) {
        return { ...state, services: action.payload.service }
    }
    return state;
}
export default BiddingReducer;