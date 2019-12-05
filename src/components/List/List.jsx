import React, {useState} from "react";
import "./List.scss";
import classNames from "classnames";
import Badge from "../AddList/Badge/Badge";

const List = React.memo(({lists, isRemovable, iconRemove, onClick, deleteList, setActiveItem, activeItem}) => {
    // const [activeItemId, setActiveItemId] = useState(3);

    return (
        <ul className={classNames('todo__list', {'list__removable': isRemovable})} onClick={onClick}>

            {
                lists.map((listItem, index) => (
                    <li key={index}
                        className={classNames({'removable': isRemovable, 'active': index === activeItem})}
                        onClick={ isRemovable && (() => {setActiveItem(index)})}>
                        <i>
                            {listItem.icon ? <img src={listItem.icon} alt="icon"/> : <Badge colors={listItem.color}/>}
                        </i>
                        <span className="name--item">{listItem.name}</span>
                        {
                            isRemovable ?
                                <span className="remove_item" onClick={() => {
                                    deleteList(listItem.id);
                                    // console.log(listItem.id);
                                }}>
                                    <img src={iconRemove} alt="X"/>
                                </span>
                                : ''
                        }
                    </li>
                ))
            }
        </ul>
    )
});

export default List;