import { GET_NEW_BID } from '../actions/biddingActions';
import { GET_SERVICES_DETAILS } from '../actions/biddingActions';
import { CREATE_NEW_BID } from '../actions/biddingActions';
import { GET_LOWEST_BID } from '../actions/biddingActions';
const initialState = {
    newBid: {},
    loading: false,
    error: null,
    services: [],
    lowestBid: {},
    data: null,
};
const BiddingReducer = (state = initialState, action) => {
    console.log(action)
    if (action.type === GET_NEW_BID) {
        return { ...state, newBid: action.payload }
    }
    if (action.type === GET_SERVICES_DETAILS) {
        return { ...state, services: action.payload.service }
    }
    if (action.type === CREATE_NEW_BID) {
        return { ...state, newBid: action.payload }
    }
    if (action.type === GET_LOWEST_BID) {
        return { ...state, data: action.payload }
    }

    return state;
}
export default BiddingReducer;