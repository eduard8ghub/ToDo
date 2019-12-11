import { combineReducers } from "redux";
import {listsReducer} from "./Lists/reducer";


export default combineReducers ({
    lists: listsReducer,
})