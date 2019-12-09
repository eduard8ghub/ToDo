import React, {useState, useEffect} from "react";
import "./TasksList.scss";
import classesNames from "classnames";

import iconCheck from "./../../../assets/img/check.svg"
import iconRemove from "./../../../assets/img/remove.svg"
import iconEdit from "./../../../assets/img/edit.svg"
import {createStore} from "redux";

const TasksList = ({tasks, changeTaskTitle, changeTaskCheck}) => {


    const [taskTitle, setTaskTitle] = useState(tasks.name);
    const [editModeTitle, setEditModeTitle] = useState(false);

    useEffect(() => {
        if (editModeTitle === false) {
            changeTaskTitle(taskTitle, tasks.id);
        }
    }, [taskTitle, editModeTitle]);

    useEffect(() => {
        setTaskTitle(tasks.name)
    }, [tasks]);

    return (
        <>
            <div className="todo__tasks-title">
                {!editModeTitle ?
                    <span style={{color: `${tasks.color.hex}`}}>{taskTitle}</span> :
                    <input
                        type="text"
                        value={taskTitle}
                        autoFocus={true}
                        onBlur={() => {
                            setEditModeTitle(false)
                        }}
                        onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }}
                    />
                }
                <i onClick={() => {
                    setEditModeTitle(!editModeTitle)
                }}>
                    <img src={iconEdit} alt="edit"/>
                </i>
            </div>
            <ul className="tasks__list">
                {
                    tasks.tasks.map(itemTask => (
                        <li key={itemTask.id} className="tasks__list-item">
                            <i className={classesNames('check', {"checked": itemTask.completed})}
                               onClick={() => {
                                   changeTaskCheck(!itemTask.completed, itemTask.id)
                               }}>
                                <img src={iconCheck} alt="icon"/>
                            </i>
                            <span>{itemTask.text}</span>
                            <i className="edit_item">
                                <img src={iconEdit} alt="edit"/>
                            </i>
                            <i className="remove_item">
                                <img src={iconRemove} alt="X"/>
                            </i>
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default TasksList;