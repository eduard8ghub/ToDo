import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import Tasks from "./Tasks";
import {
    addNewTask,
    changeTaskCheck,
    changeTaskTitle,
    getTasks,
    onChangeTaskText,
    deleteTaskItem
} from "../../store/Tasks/actions";


const TasksContainer = ({getTasks, activeItemList, changeTaskTitle, addNewTask, changeTaskCheck, listTasks, onChangeTaskText, deleteTaskItem}) => {
    useEffect(() => {
        getTasks()
    }, [getTasks]);


    return (
        <>
            <Route path="/lists/">
                {
                    listTasks && listTasks.length > 0 &&
                    <Tasks
                        listTasks={listTasks}
                        activeItemList={activeItemList}
                        changeTaskTitle={changeTaskTitle}
                        addNewTask={addNewTask}
                        changeTaskCheck={changeTaskCheck}
                        onChangeTaskText={onChangeTaskText}
                        deleteTaskItem={deleteTaskItem}
                    />
                }
            </Route>
        </>
    );
};

const mapStateToProps = ({lists}) => {
    return {
        activeItemList: lists.activeItemLists,
        listTasks: lists.lists
    }
};

export default connect(mapStateToProps, {
    getTasks,
    changeTaskTitle,
    addNewTask,
    changeTaskCheck,
    onChangeTaskText,
    deleteTaskItem
})(TasksContainer);