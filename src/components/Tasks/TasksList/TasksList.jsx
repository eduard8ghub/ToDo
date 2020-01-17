import React, {useState, useEffect} from "react";
import "./TasksList.scss";

import AddTask from "../AddTask/AddTask";
import List from "../../List/List";
import iconAdd from "../../../assets/img/add.svg";
import TaskListTitle from "./TaskListTitle/TaskListTitle";
import ChangeTaskForm from "./ChangeTaskForm/ChangeTaskForm";
import ContentTask from "./ContentTask/ContentTask";

const TasksList = ({listTasks, changeTaskTitle, changeTaskCheck, onChangeTaskText, deleteTaskItem, addNewTask}) => {
    const [allListTasks, setAllListTasks] = useState(listTasks.length ? listTasks : [listTasks]);
    const [activeTaskChange, setActiveTaskChange] = useState(null);
    const [visibleInput, setVisibleInput] = useState(false);
    const [idInputFolder, setIdInputFolder] = useState(false);

    useEffect(() => {
        setAllListTasks(listTasks.length ? listTasks : [listTasks]);
    }, [listTasks]);

    return (
        <>
            {
                allListTasks.map(itemTask => (
                    <div key={itemTask.id}>
                        <TaskListTitle changeTaskTitle={changeTaskTitle} itemTask={itemTask} />

                        <ul className="tasks__list">
                            {
                                itemTask.tasks.map(task => (
                                    <li className="tasks__list-item" key={task.id}>
                                        {
                                            activeTaskChange && activeTaskChange === task.id
                                                ?
                                                <ChangeTaskForm task={task}
                                                                onChangeTaskText={onChangeTaskText}
                                                                setCloseInput={setActiveTaskChange}
                                                />
                                                :
                                                <ContentTask task={task}
                                                             changeTaskCheck={changeTaskCheck}
                                                             deleteTaskItem={deleteTaskItem}
                                                             taskIdToChange={setActiveTaskChange}
                                                />

                                        }
                                    </li>

                                ))
                            }
                        </ul>
                        {
                            visibleInput && itemTask.id === idInputFolder ?
                                <AddTask taskId={itemTask.id} onHiddenInput={setVisibleInput}
                                         addNewTask={addNewTask}/> :
                                <List
                                    lists={[{name: 'Добавить папку', icon: iconAdd}]}
                                    isTasksList={true}
                                    onAddTask={(e) => {
                                        setVisibleInput(true);
                                        setIdInputFolder(itemTask.id);
                                    }}
                                />
                        }
                    </div>
                ))
            }
        </>
    )
};

export default TasksList;