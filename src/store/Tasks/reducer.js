import {SET_TASKS} from "./actions";


const defaultState = {
    tasks: []
};

export const tasksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        default:
            return state;
    }
};

