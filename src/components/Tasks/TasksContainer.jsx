import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Tasks from "./Tasks";
import {addNewTask, changeTaskCheck, changeTaskTitle, getTasks} from "../../store/Tasks/actions";

const TasksContainer = ({getTasks, tasks, activeItemList, changeTaskTitle, addNewTask, changeTaskCheck}) => {
    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            {
                tasks && tasks.length > 0 &&
                <Tasks
                    tasks={tasks}
                    activeItemList={activeItemList}
                    changeTaskTitle={changeTaskTitle}
                    addNewTask={addNewTask}
                    changeTaskCheck={changeTaskCheck}
                />
            }
        </>
    );
};

const mapStateToProps = ({tasks, lists}) => {
    return {
        tasks: tasks.tasks,
        activeItemList: lists.activeItemLists,
    }
};

export default connect(mapStateToProps, {getTasks, changeTaskTitle, addNewTask, changeTaskCheck})(TasksContainer);