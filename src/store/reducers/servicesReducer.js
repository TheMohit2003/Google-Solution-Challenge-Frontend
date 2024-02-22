import { GET_SERVICES_DETAILS } from "../actions/servicesActions";
const initialState = {
    data: {}
};
const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES_DETAILS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}
export default servicesReducer;