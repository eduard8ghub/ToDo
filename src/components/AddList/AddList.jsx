import React from 'react';
import {List} from "../index";
import PopupListsContainer from "./PopupLists/PopupListsContainer";

import iconAdd from "../../assets/img/add.svg";
import "./AddList.scss";

const AddList = ({setVisiblePopup}) => {

    return (
        <div className="add-list">
            <List lists={[
                {name: "Добавить папку", icon: iconAdd}
            ]} onClick={() => {
                setVisiblePopup()
            }}/>
            <PopupListsContainer/>
        </div>
    );
};

export default AddList;