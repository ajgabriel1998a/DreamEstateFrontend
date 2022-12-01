require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './Component/Store/Store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode >
            <App />
        </React.StrictMode>
    </Provider>
);