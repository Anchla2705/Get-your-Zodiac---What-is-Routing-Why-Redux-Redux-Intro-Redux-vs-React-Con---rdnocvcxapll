import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
import {Provider} from "react-redux";

import { state } from "./store";


ReactDOM.render(<Provider store={state}><App /></Provider>, document.getElementById("root"));