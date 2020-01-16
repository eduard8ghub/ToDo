import React, {useState, useEffect, useRef} from "react";
import "./TasksList.scss";
import classesNames from "classnames";

import iconCheck from "./../../../assets/img/check.svg"
import iconRemove from "./../../../assets/img/remove.svg"
import iconEdit from "./../../../assets/img/edit.svg"
import {ErrorMessage, Formik} from "formik";
import AddTask from "../AddTask/AddTask";
import List from "../../List/List";
import iconAdd from "../../../assets/img/add.svg";

const TasksList = ({listTasks, changeTaskTitle, changeTaskCheck, onChangeTaskText, deleteTaskItem, addNewTask}) => {
    const [allListTasks, setAllListTasks] = useState(listTasks.length ? listTasks : [listTasks]);
    const [editModeTitle, setEditModeTitle] = useState(false);
    const [currentTitle, setCurrentTitle] = useState(null);
    const [taskTitle, setTaskTitle] = useState(null);
    const [activeTaskChange, setActiveTaskChange] = useState(null);
    const [visibleInput, setVisibleInput] = useState(false);
    const [idInputFolder, setIdInputFolder] = useState(false);

    useEffect(() => {
        if (editModeTitle === false && currentTitle) {
            changeTaskTitle(taskTitle, currentTitle);
        }
    }, [taskTitle, editModeTitle]);

    useEffect(() => {
        setAllListTasks(listTasks.length ? listTasks : [listTasks]);
    }, [listTasks]);


    return (
        <>
            {
                allListTasks.map(itemTask => (
                    <div key={itemTask.id}>
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
                        <ul className="tasks__list">
                            {
                                itemTask.tasks.map(task => (
                                    <li className="tasks__list-item" key={task.id}>
                                        {
                                            activeTaskChange && activeTaskChange === task.id
                                                ?
                                                <div className="change__task">
                                                    <Formik
                                                        initialValues={{taskText: task.text}}
                                                        validate={values => {
                                                            const errors = {};
                                                            if (!values.taskText) {
                                                                errors.taskText = 'Название папки обязательно';
                                                            }
                                                            return errors;
                                                        }}
                                                        onSubmit={(values, {setSubmitting}) => {
                                                            onChangeTaskText(values.taskText, task.id);
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
                                                                              render={msg => <div
                                                                                  className="err">{msg}</div>}/>
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
                                                :
                                                <div className="content__tasks">
                                                    <i className={classesNames('check', {"checked": task.completed})}
                                                       onClick={() => {
                                                           changeTaskCheck(!task.completed, task.id)
                                                       }}>
                                                        <img src={iconCheck} alt="icon"/>
                                                    </i>
                                                    <span>{task.text}</span>
                                                    <i className="edit_item" onClick={() => {
                                                        setActiveTaskChange(task.id)
                                                    }}>
                                                        <img src={iconEdit} alt="edit"/>
                                                    </i>
                                                    <i className="remove_item" onClick={() => {
                                                        deleteTaskItem(task.id, task.listId)
                                                    }}>
                                                        <img src={iconRemove} alt="X"/>
                                                    </i>
                                                </div>

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