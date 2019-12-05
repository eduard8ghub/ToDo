import React from 'react';
import ListContainer from "./components/List/ListContainer";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./store/index"
import AddListContainer from "./components/AddList/AddListContainer";
import TasksContainer from "./components/Tasks/TasksContainer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

function App() {
    return (
        <Provider store={store}>
            <div className="wrap">
                <div className="todo">
                    <div className="todo__sidebar">
                        <ListContainer/>
                        <AddListContainer />
                    </div>
                    <div className="todo__tasks">
                        <TasksContainer />
                    </div>
                </div>
            </div>
        </Provider>
    );
}


export default App;
