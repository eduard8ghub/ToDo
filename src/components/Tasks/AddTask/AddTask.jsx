import React from 'react';
import "./AddTask.scss"
import classNames from "classnames";
import {ErrorMessage, Formik} from "formik";


const AddTask = ({onHiddenInput, task, addNewTask}) => {

    return (
        <div className="add-task__input">
            <Formik
                initialValues={{taskText: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.taskText) {
                        errors.taskText = 'Название папки обязательно';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    addNewTask(values.taskText, task.id);
                    onHiddenInput(false);
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
                            className={classNames('field', {'inputError': errors.taskText})}
                            placeholder="Текст задачи"
                            name="taskText"
                            onChange={handleChange}
                            value={values.taskText}
                            autoComplete="off"
                        />
                        <ErrorMessage name="taskText" render={msg => <div className="err">{msg}</div>}/>
                        <div className="wrap__button">
                            <button type="submit" className="button button-add__task" disabled={isSubmitting}>Добавить
                                задачу
                            </button>
                            <button className="button button-cancel" onClick={() => {
                                onHiddenInput(false)
                            }}>Отмена
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default AddTask;