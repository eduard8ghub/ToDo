import {todoAPI} from "../../api/api";

export const SET_LISTS = "SET_LISTS";
export const SET_COLORS = "SET_COLORS";
export const SET_VISIBLE_POPUP = "SET_VISIBLE_POPUP";
export const ADD_NEW_LIST = "ADD_NEW_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";


export const setLists = (lists) => ({
    type: SET_LISTS,
    payload: lists
});

export const setColors = (colors) => ({
    type: SET_COLORS,
    payload: colors
});

export const setVisiblePopup = () => ({
    type: SET_VISIBLE_POPUP,
});

export const addNewList = (list) => ({
    type: ADD_NEW_LIST,
    payload: list
});

export const deleteItemList = (id) => ({
    type: DELETE_LIST,
    payload: id
});

export const setActiveItem = (id) => ({
    type: SET_ACTIVE_ITEM,
    payload: id
});



export const getLists = () => (dispatch) => {
    todoAPI.getLists()
        .then(dataLists => {
            todoAPI.getColors().then(dataColors => {
                dataLists.map(itemLists => (
                    itemLists.color = dataColors.filter(itemColor => itemColor.id === itemLists.colorId)[0].name
                ));
                dispatch(setLists(dataLists))
            });
        })
};

export const getColors = () => (dispatch) => {
    todoAPI.getColors()
        .then(response => {
            dispatch(setColors(response))
        })
};

export const addList = (name, colorId) => (dispatch) => {
    todoAPI.addList(name, colorId)
        .then(dataLists => {
            todoAPI.getColors().then(dataColors => {
                dataLists.color = dataColors.filter(itemColor => itemColor.id === dataLists.colorId)[0].name;
                dispatch(addNewList(dataLists))
            });
        })
};

export const deleteList = (id) => (dispatch) => {
    todoAPI.deleteList(id)
        .then(() => {
            dispatch(deleteItemList(id))
        })
};