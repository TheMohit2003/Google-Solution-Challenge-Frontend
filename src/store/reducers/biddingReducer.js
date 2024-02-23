import { GET_NEW_BID } from '../actions/biddingActions';
const initialState = {
    newBid: {},
    loading: false,
    error: null,
};
const BiddingReducer = (state = initialState, action) => {
    if (action.type === GET_NEW_BID) {
        return { ...state, newBid: action.payload }
    }
    return state;
}
export default BiddingReducer;