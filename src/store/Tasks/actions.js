import {todoAPI} from "../../api/api";

export const SET_TASKS = "SET_TASKS";


export const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks
});



export const getTasks = () => (dispatch) => {
    todoAPI.getTasks()
        .then(data => {
            dispatch(setTasks(data));
        })
};

