import React, {useEffect} from "react";
import "./List.scss";
import classNames from "classnames";
import Badge from "../AddList/Badge/Badge";

const List = React.memo(({
                             lists,
                             isRemovable,
                             iconRemove,
                             onSetVisiblePopup,
                             deleteList,
                             setActiveItem,
                             activeItem,
                             onAddTask,
                             isTasksList,
                             tasks}) =>
{
    return (
        <ul className={classNames('todo__list', {'list__removable': isRemovable})}
            onClick={isTasksList ? onAddTask : onSetVisiblePopup}
        >

            {
                lists.map((listItem, index) => (
                    <li key={index}
                        className={classNames({'removable': isRemovable, 'active': index === activeItem})}
                        onClick={ isRemovable && ((e) => {
                            if(e.target.tagName !== "IMG") {
                                setActiveItem(index)
                            }
                        })}>
                        <i>
                            {listItem.icon ? <img src={listItem.icon} alt="icon"/> : <Badge colors={listItem.color}/>}
                        </i>
                        <span className="name--item">{listItem.name}</span>
                        {
                            isRemovable &&
                                <span className="remove_item" onClick={() => {
                                    setActiveItem(0);
                                    deleteList(listItem.id);
                                }}>
                                    <img src={iconRemove} alt="X"/>
                                </span>
                        }
                    </li>
                ))
            }
        </ul>
    )
});

export default List;