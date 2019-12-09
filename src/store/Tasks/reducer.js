import {ADD_NEW_TASK, CHANGE_TASK_CHECK, SET_TASKS} from "./actions";


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
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(task => {
                  if (task.id === action.payload.listId) {
                      return task.tasks.push(action.payload);
                  }
                  return task;
                })]
            };
            case CHANGE_TASK_CHECK:
            return {
                ...state,
                tasks: [...state.tasks.filter(task => {
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
        default:
            return state;
    }
};

