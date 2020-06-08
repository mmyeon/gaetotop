import { combineReducers } from "redux";
import sample from "./sample";
import scroll from "./scroll";

const rootReducer = combineReducers({ sample, scroll });
export default rootReducer;
