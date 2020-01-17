import React from 'react';
import {ErrorMessage, Formik} from "formik";
import classesNames from "classnames";
import iconCheck from "../../../../assets/img/check.svg";

const ChangeTaskForm = ({task, onChangeTaskText, setCloseInput}) => {
    return (
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
                    setCloseInput(null);
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
    );
};

export default ChangeTaskForm;