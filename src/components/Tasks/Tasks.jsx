import React, {useState} from "react";
import TasksList from "./TasksList/TasksList";
import List from "../List/List";
import AddTask from "./AddTask/AddTask";

import iconAdd from "./../../assets/img/add.svg";

const Tasks = React.memo(({activeItemList, changeTaskTitle, addNewTask, changeTaskCheck, listTasks, onChangeTaskText, deleteTaskItem}) => {
    const [visibleInput, setVisibleInput] = useState(false);

    return (
        <>
            {
                <TasksList listTasks={listTasks[activeItemList ? activeItemList : 0]}
                           changeTaskTitle={changeTaskTitle}
                           changeTaskCheck={changeTaskCheck}
                           onChangeTaskText={onChangeTaskText}
                           deleteTaskItem={deleteTaskItem}
                />
            }
            {visibleInput ?
                <AddTask task={listTasks[activeItemList]} onHiddenInput={setVisibleInput} addNewTask={addNewTask}/> :
                <List
                    lists={[{name: 'Добавить папку', icon: iconAdd}]}
                    isTasksList={true}
                    onAddTask={() => {
                        setVisibleInput(true)
                    }}
                />}
        </>
    )
});

export default Tasks;