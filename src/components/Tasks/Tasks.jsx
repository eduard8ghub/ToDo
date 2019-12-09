import React, {useState} from "react";
import TasksList from "./TasksList/TasksList";
import List from "../List/List";
import AddTask from "./AddTask/AddTask";

import iconAdd from "./../../assets/img/add.svg";

const Tasks = React.memo(({tasks, activeItemList, changeTaskTitle, addNewTask, changeTaskCheck}) => {

    console.log(tasks);

    const [visibleInput, setVisibleInput] = useState(false);

    return (
        <>
            {
                <TasksList tasks={tasks[activeItemList]} changeTaskTitle={changeTaskTitle} changeTaskCheck={changeTaskCheck}/>
            }
            {visibleInput ?
                <AddTask task={tasks[activeItemList]} onHiddenInput={setVisibleInput} addNewTask={addNewTask}/> :
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