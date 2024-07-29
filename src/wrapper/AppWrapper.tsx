// src/AppWrapper.js
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from '../../src/App';
import store from '../../src/store/index';


const AppWrapper = () => (
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);

export default AppWrapper;
