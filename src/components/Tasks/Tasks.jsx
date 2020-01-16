import React, {useState, useEffect} from "react";
import TasksList from "./TasksList/TasksList";

import { useHistory } from "react-router-dom";

const Tasks = React.memo(({activeItemList, changeTaskTitle, addNewTask, changeTaskCheck, listTasks, onChangeTaskText, deleteTaskItem}) => {
    const [activeItem, setActiveItem] = useState(0);
    let history = useHistory().location.pathname;

    useEffect(() => {
        let activeLink = history.split('/lists/');
        setActiveItem(Number(activeLink[1]) - 1);
    }, [history]);

    return (
        <>
            {
                <TasksList listTasks={!isNaN(activeItem) ? listTasks[activeItem] : listTasks}
                           changeTaskTitle={changeTaskTitle}
                           changeTaskCheck={changeTaskCheck}
                           onChangeTaskText={onChangeTaskText}
                           deleteTaskItem={deleteTaskItem}
                           addNewTask={addNewTask}
                />
            }
        </>
    )
});

export default Tasks;