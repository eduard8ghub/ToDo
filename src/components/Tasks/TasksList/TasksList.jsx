import React, {useState, useEffect} from "react";
import "./TasksList.scss";
import classesNames from "classnames";

import iconCheck from "./../../../assets/img/check.svg"
import iconRemove from "./../../../assets/img/remove.svg"
import iconEdit from "./../../../assets/img/edit.svg"
import {ErrorMessage, Formik} from "formik";

const TasksList = ({listTasks, changeTaskTitle, changeTaskCheck, onChangeTaskText, deleteTaskItem}) => {
    const [taskTitle, setTaskTitle] = useState(listTasks.name);
    const [editModeTitle, setEditModeTitle] = useState(false);
    const [activeTaskChange, setActiveTaskChange] = useState(null);

    useEffect(() => {
        if (editModeTitle === false) {
            changeTaskTitle(taskTitle, listTasks.id);
        }
    }, [taskTitle, editModeTitle]);

    useEffect(() => {
        setTaskTitle(listTasks.name)
    }, [listTasks]);

    return (

        <>
            <div className="todo__tasks-title">
                {!editModeTitle ?
                    <span style={{color: `${listTasks.color.hex}`}}>{taskTitle}</span> :
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
                    listTasks.tasks.map(itemTask => (
                        <li key={itemTask.id} className="tasks__list-item">
                            {
                                itemTask.id !== activeTaskChange ?
                                    <div className="content__tasks">
                                        <i className={classesNames('check', {"checked": itemTask.completed})}
                                           onClick={() => {
                                               changeTaskCheck(!itemTask.completed, itemTask.id)
                                           }}>
                                            <img src={iconCheck} alt="icon"/>
                                        </i>
                                        <span>{itemTask.text}</span>
                                        <i className="edit_item" onClick={() => {
                                            setActiveTaskChange(itemTask.id)
                                        }}>
                                            <img src={iconEdit} alt="edit"/>
                                        </i>
                                        <i className="remove_item" onClick={() => {
                                            deleteTaskItem(itemTask.id, itemTask.listId)
                                        }}>
                                            <img src={iconRemove} alt="X"/>
                                        </i>
                                    </div>
                                    :
                                    <div className="change__task">
                                        <Formik
                                            initialValues={{taskText: itemTask.text}}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.taskText) {
                                                    errors.taskText = 'Название папки обязательно';
                                                }
                                                return errors;
                                            }}
                                            onSubmit={(values, {setSubmitting}) => {
                                                onChangeTaskText(values.taskText, itemTask.id);
                                                setActiveTaskChange(null);
                                            }}
                                        >
                                            {({
                                                  values,
                                                  errors,
                                                  handleChange,
                                                  handleSubmit,
                                                  isSubmitting,
                                              }) => (
                                                <form onSubmit={handleSubmit}>
                                                    <input
                                                        type="text"
                                                        className={classesNames('field', {'inputError': errors.taskText})}
                                                        name="taskText"
                                                        onChange={handleChange}
                                                        value={values.taskText}
                                                        autoComplete="off"
                                                        autoFocus={true}
                                                    />
                                                    <ErrorMessage name="taskText"
                                                                  render={msg => <div className="err">{msg}</div>}/>
                                                    <button type="submit"
                                                            className="button button-add__task"
                                                            disabled={isSubmitting}
                                                    >
                                                        <img src={iconCheck} alt="ok"/>
                                                    </button>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                            }
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default TasksList;