import rootReducer from "./reducers";
import { createStore } from "redux";

export const state=createStore(rootReducer);