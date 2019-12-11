import {todoAPI} from "../../api/api";

export const SET_TASKS = "SET_TASKS";
export const CHANGE_TASK_TITLE = "CHANGE_TASK_TITLE";
export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const CHANGE_TASK_CHECK = "CHANGE_TASK_CHECK";
export const CHANGE_TASK_TEXT = "CHANGE_TASK_TEXT";
export const DELETE_TASK = "DELETE_TASK";


export const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks
});

export const changeTitle = (payload) => {
    return {
    type: CHANGE_TASK_TITLE,
        payload

}};

export const onAddNewTask = (payload) => {
    return {
    type: ADD_NEW_TASK,
        payload

}};

export const onChangeCheckTasks = (payload) => {
    return {
    type: CHANGE_TASK_CHECK,
        payload

}};

export const onChangeTasksText = (payload) => {
    return {
    type: CHANGE_TASK_TEXT,
        payload

}};

export const onDeleteTask = (id, listId) => {
    return {
    type: DELETE_TASK,
        id,
        listId

}};


export const getTasks = () => (dispatch) => {
    todoAPI.getTasks()
        .then(data => {
            dispatch(setTasks(data));
        })
};


export const changeTaskTitle = (text, id) => (dispatch) => {
    todoAPI.changeTaskTitle(text, id)
        .then(data => {
            dispatch(changeTitle(data));
        })
};
export const addNewTask = (text, id) => (dispatch) => {
    todoAPI.addTask(text, id)
        .then(data => {
            dispatch(onAddNewTask(data));
        })
};

export const changeTaskCheck = (checkStatus, id) => (dispatch) => {
    todoAPI.changeTaskCheck(checkStatus, id)
        .then(data => {
            dispatch(onChangeCheckTasks(data));
        })
};

export const onChangeTaskText = (taskText, id) => (dispatch) => {
    todoAPI.changeTaskText(taskText, id)
        .then(data => {
            dispatch(onChangeTasksText(data));
        })
};

export const deleteTaskItem = (id, listId) => (dispatch) => {
    todoAPI.deleteTask(id)
        .then((data) => {
            dispatch(onDeleteTask(id, listId))
        })
};