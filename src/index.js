import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css'
import { configureStore } from "@reduxjs/toolkit";
import { compose } from 'redux';
import { rootReducer } from './services/reducers';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config/firebaseConfig';

const composeEnhancers =
    // @ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        // @ts-ignore
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const store = configureStore({
  reducer: rootReducer
});

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);