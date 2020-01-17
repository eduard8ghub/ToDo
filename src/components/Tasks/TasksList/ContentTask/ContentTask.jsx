import React from 'react';
import classesNames from "classnames";
import iconCheck from "../../../../assets/img/check.svg";
import iconEdit from "../../../../assets/img/edit.svg";
import iconRemove from "../../../../assets/img/remove.svg";

const ContentTask = ({task, changeTaskCheck, deleteTaskItem, taskIdToChange}) => {
    return (
        <div className="content__tasks">
            <i className={classesNames('check', {"checked": task.completed})}
               onClick={() => {
                   changeTaskCheck(!task.completed, task.id)
               }}>
                <img src={iconCheck} alt="icon"/>
            </i>
            <span>{task.text}</span>
            <i className="edit_item" onClick={() => {
                taskIdToChange(task.id)
            }}>
                <img src={iconEdit} alt="edit"/>
            </i>
            <i className="remove_item" onClick={() => {
                deleteTaskItem(task.id, task.listId)
            }}>
                <img src={iconRemove} alt="X"/>
            </i>
        </div>
    );
};

export default ContentTask;