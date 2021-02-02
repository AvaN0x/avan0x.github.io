import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import 'firebase/auth'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rrfProps, store } from './firebase/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode >,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
