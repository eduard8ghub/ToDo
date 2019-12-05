import React, {useState, useEffect } from 'react';
import Badge from "../Badge/Badge";
import classNames from "classnames";

import "./../AddList.scss";
import iconClose from "./../../../assets/img/close.svg"

const PopupLists = ({colors, setVisiblePopup, visiblePopup}) => {
    const [selectedColor, setColor] = useState(colors[0].id);


    return (
        <>
            <div className={classNames('add-list__popup', {"visible__popup": visiblePopup})}>

                <input
                    type="text"
                    className="field"
                    placeholder="Название папки"
                />
                <div className="add-list__popup-colors">
                    {
                        colors.map((color, index) => (
                            <Badge
                                onClick={() => {setColor(color.id)}}
                                colors={color.name}
                                key={index}
                                className={selectedColor === color.id && 'active'}
                            />
                        ))
                    }
                </div>
                <div className="add-list__popup-close" onClick={() => {
                    setVisiblePopup()
                }}>
                    <img src={iconClose} alt="X"/>

                </div>
                <button className="button" onClick={() => {
                    // console.log({})
                    // getNewList(newList, selectedColor);
                    // setVisiblePopup(false);
                    // setVisiblePopup();
                    // setNewList('')
                }}>Добавить</button>
            </div>

        </>
    )
};

export default PopupLists;