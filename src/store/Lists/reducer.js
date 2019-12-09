import {ADD_NEW_LIST, DELETE_LIST, SET_ACTIVE_ITEM, SET_COLORS, SET_LISTS, SET_VISIBLE_POPUP} from "./actions";
import {CHANGE_TASK_TITLE} from "../Tasks/actions";

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
                    if(item.id === action.payload.id && item.name !== action.payload.name) {
                        return item.name = action.payload.name;
                    }
                })]
            };
        default:
            return state;
    }
};

