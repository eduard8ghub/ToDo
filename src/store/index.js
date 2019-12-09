import { combineReducers } from "redux";
import {listsReducer} from "./Lists/reducer";
import {tasksReducer} from "./Tasks/reducer";


export default combineReducers ({
    lists: listsReducer,
    tasks: tasksReducer
})