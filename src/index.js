import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./data/store";

ReactDOM.render(
    <Provider store={store}>
    	<div className="page_wrapper">
        	<App />
        </div>
    </Provider>,
    document.getElementById("root")
);
