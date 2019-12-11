import {ADD_NEW_LIST, DELETE_LIST, SET_ACTIVE_ITEM, SET_COLORS, SET_LISTS, SET_VISIBLE_POPUP} from "./actions";
import {ADD_NEW_TASK, CHANGE_TASK_CHECK, CHANGE_TASK_TEXT, CHANGE_TASK_TITLE, DELETE_TASK} from "../Tasks/actions";

const defaultState = {
    lists: [],
    colors: [],
    visiblePopup: false,
    activeItemLists: 0
};

export const listsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_COLORS:
            return {
                ...state,
                colors: action.payload
            };
        case SET_LISTS:
            return {
                ...state,
                lists: [...action.payload]
            };
        case ADD_NEW_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            };
        case DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(itemList => itemList.id !== action.payload)
            };
        case SET_VISIBLE_POPUP:
            return {
                ...state,
                visiblePopup: !state.visiblePopup
            };
        case SET_ACTIVE_ITEM:
            return {
                ...state,
                activeItemLists: action.payload
            };
        case CHANGE_TASK_TITLE:
            return {
                ...state,
                lists: [...state.lists, ...state.lists.filter(item => {
                    if (item.id === action.payload.id && item.name !== action.payload.name) {
                        item.name = action.payload.name;
                    }
                })]
            };
        case ADD_NEW_TASK:
            return {
                ...state,
                lists: [...state.lists.filter(task => {
                    if (task.id === action.payload.listId) {
                        return task.tasks.push(action.payload);
                    }
                    return task;
                })]
            };
        case CHANGE_TASK_CHECK:
            return {
                ...state,
                lists: [...state.lists.filter(task => {
                    if (task.id === action.payload.listId) {
                        task.tasks.filter(itemTask => {
                            if (itemTask.id === action.payload.id) {
                                return itemTask.completed = action.payload.completed;
                            }
                        });
                        return task;
                    }
                    return task;
                })]
            };
        case CHANGE_TASK_TEXT:
            return {
                ...state,
                lists: [...state.lists.filter(task => {
                    if (task.id === action.payload.listId) {
                        task.tasks.filter(itemTask => {
                            if (itemTask.id === action.payload.id) {
                                return itemTask.text = action.payload.text;
                            }
                        });
                        return task;
                    }
                    return task;
                })]
            };
        case DELETE_TASK:
            return {
                ...state,
                lists: [...state.lists.map(itemList => {
                    if (itemList.id === action.listId) {
                        itemList.tasks.filter(task => task.id !== action.id)
                    }
                    console.log(itemList);
                    return itemList;
                })]
            };
        default:
            return state;
    }
};

