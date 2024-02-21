import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import rootReducer from './store/reducers/index';

// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { ChakraProvider } from '@chakra-ui/react'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(
  createStore
);

function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <ChakraProvider>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  </ChakraProvider>,
);
