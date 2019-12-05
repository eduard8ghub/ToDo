import React from "react";
import "./TasksList.scss";
import classesNames from "classnames";

import iconCheck from "./../../../assets/img/check.svg"
import iconRemove from "./../../../assets/img/remove.svg"
import iconEdit from "./../../../assets/img/edit.svg"

const TasksList = ({tasks}) => {
    return (
        <>
            <div className="todo__tasks-title">
                <span>{tasks.name}</span>
                <i>
                    <img src={iconEdit} alt="edit"/>
                </i>
            </div>
            <ul className="tasks__list">
                {
                    tasks.tasks.map(itemTask => (
                        <li key={itemTask.id} className="tasks__list-item">
                            <i className={classesNames('check', {"checked": itemTask.completed})}>
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