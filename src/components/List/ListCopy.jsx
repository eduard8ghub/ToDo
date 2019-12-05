import React from "react";
import "./List.scss";
import classNames from "classnames";
import Badge from "../AddList/Badge/Badge";

const List = ({items, isRemovable, iconRemove, onClick}) => {
    return (
        <ul className="todo__list">
            {
                items.map((item, id) => (
                    <li key={id}
                        className={classNames({'removable': isRemovable}, {'active': item.active})}
                        onClick={onClick}
                    >
                        <i>{item.icon ? item.icon : (<Badge color={item.color}/>)}</i>
                        <span className={isRemovable ? 'name--item' : ''}>{item.name}</span>
                        {isRemovable ? <span className="remove_item">{iconRemove}</span> : ''}
                    </li>
                ))
            }
        </ul>
    )
};

export default List;