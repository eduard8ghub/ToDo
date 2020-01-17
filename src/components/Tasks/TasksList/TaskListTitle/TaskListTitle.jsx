import React, {useEffect, useState} from 'react';
import iconEdit from "../../../../assets/img/edit.svg";

const TaskListTitle = ({changeTaskTitle, itemTask}) => {
    const [editModeTitle, setEditModeTitle] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(null);
    const [taskTitle, setTaskTitle] = useState(null);

    useEffect(() => {
        if (editModeTitle === false && currentTitle) {
            changeTaskTitle(taskTitle, currentTitle);
        }
    }, [taskTitle, editModeTitle, currentTitle, changeTaskTitle]);

    return (
        <div className="todo__tasks-title">
            {editModeTitle && itemTask.id === currentTitle
                ?
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
                :
                <span style={{color: `${itemTask.color.hex}`}}>{itemTask.name}</span>
            }
            <i onClick={() => {
                setCurrentTitle(itemTask.id);
                setEditModeTitle(!editModeTitle);
                setTaskTitle(itemTask.name);
            }}>
                <img src={iconEdit} alt="edit"/>
            </i>
        </div>
    );
};

export default TaskListTitle;