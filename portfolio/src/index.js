import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/main/App';
import reportWebVitals from './reportWebVitals';

import { AppContextProvider } from './components/context/AppContext';

ReactDOM.render(
    <React.Fragment>
        <AppContextProvider>
            <HashRouter hashType="slash" basename={process.env.PUBLIC_URL}>
                <App />
            </HashRouter>
        </AppContextProvider>
    </React.Fragment>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
