import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Tasks from "./Tasks";
import {getTasks} from "../../store/Tasks/actions";

const TasksContainer = ({getTasks, tasks, activeItemList, lists}) => {
    useEffect(() => {
        getTasks();
        console.log(tasks);
    }, [lists]);

    return (
        <>
            {
                tasks && tasks.length > 0 && <Tasks tasks={tasks} activeItemList={activeItemList} lists={lists}/>
            }
        </>
    );
};

const mapStateToProps = ({tasks, lists}) => {
    return {
        tasks: tasks.tasks,
        activeItemList: lists.activeItemLists,
        lists: lists.lists
    }
};

export default connect(mapStateToProps, {getTasks})(TasksContainer);