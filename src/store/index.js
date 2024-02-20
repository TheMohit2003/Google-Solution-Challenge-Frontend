// /src/store/configureStore.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Adjust the path based on your actual structure

const store = createStore(rootReducer, applyMiddleware(thunk));

module.exports = store;
