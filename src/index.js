import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
// import {createLogger} from "redux-logger";
// import {composeWithDevTools} from "redux-devtools-extension";
// import {createLogger} from "redux-logger";

// const middleware = [];

// if (process.env.NODE_ENV !== 'production'){
//     middleware.push(createLogger())
// }

// const store = createStore(reducers , composeWithDevTools(applyMiddleware(...middleware)));
const store = createStore(reducers);

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

