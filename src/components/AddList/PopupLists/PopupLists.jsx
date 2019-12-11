import React, {useState} from 'react';
import Badge from "../Badge/Badge";
import classNames from "classnames";

import "./../AddList.scss";
import iconClose from "./../../../assets/img/close.svg"
import {ErrorMessage, Formik} from "formik";

const PopupLists = ({colors, setVisiblePopup, visiblePopup, addList}) => {
    const [selectedColor, setColor] = useState(colors[0]);
    return (
        <>
            <div className={classNames('add-list__popup', {"visible__popup": visiblePopup})}>

                <Formik
                    initialValues={{listName: '', color: selectedColor}}
                    validate={values => {
                        const errors = {};
                        if (!values.listName) {
                            errors.listName = 'Название папки обязательно';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                            console.log(values);
                            addList(values.listName, values.color);
                            values.listName = '';
                            setSubmitting(false);
                            setVisiblePopup()
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
                                className={classNames('field',{'inputError': errors.listName})}
                                placeholder="Название папки"
                                name="listName"
                                onChange={handleChange}
                                value={values.listName}
                                autoComplete="off"
                            />
                            <ErrorMessage name="listName" render={msg => <div className="err">{msg}</div> }/>
                            <div className="add-list__popup-colors">
                                {
                                    colors.map((color, index) => (
                                        <Badge
                                            onClick={() => {
                                                setColor(color);
                                                values.color = color
                                            }}
                                            colors={color.name}
                                            key={index}
                                            className={selectedColor.id === color.id && 'active'}
                                        />
                                    ))
                                }
                            </div>
                            <div className="add-list__popup-close" onClick={() => {
                                setVisiblePopup()
                            }}>
                                <img src={iconClose} alt="X"/>

                            </div>
                            <button type="submit" disabled={isSubmitting} className="button">
                                {isSubmitting ? 'Добавляется...' : 'Добавить'}</button>
                        </form>
                    )}
                </Formik>

            </div>

        </>
    )
};

export default PopupLists;