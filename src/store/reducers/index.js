import { combineReducers } from 'redux';
import loginReducer from './loginReducer.js';

const rootReducer = combineReducers({
   login: loginReducer,
    // Add more reducers here if you have them
});

export default rootReducer;
