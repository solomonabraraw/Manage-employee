//import { App } from "@styled-icons/bootstrap";
import App from './App';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import store from "./redux/store/store";
;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);