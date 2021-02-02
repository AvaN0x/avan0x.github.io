import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import 'firebase/auth'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import { transitions, positions, Provider as AlertProvider } from 'react-alert';

import AlertTemplate from './AlertTemplate';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rrfProps, store } from './firebase/store';

const options = {
    position: positions.BOTTOM_RIGHT,
    transition: transitions.FADE,
    timeout: 5000,
    offset: '10px',
    containerStyle: {
        zIndex: 10000,
        bottom: 50
    }
}




// TODO move Alert to App.tsx
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <App />
                </AlertProvider>
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode >,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
