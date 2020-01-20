import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import "./List.scss";
import classNames from "classnames";
import Badge from "../AddList/Badge/Badge";


const List = React.memo((props) => {
    const {lists, isRemovable, iconRemove, onSetVisiblePopup, deleteList, setActiveItem, activeItem, onAddTask, isTasksList, isAllList} = props;
    let history = useHistory();

    useEffect(() => {
        const historyId = history.location.pathname.split('/lists/')[1];
        setActiveItem && setActiveItem(Number(historyId) - 1);
    }, [history.location.pathname]);

    return (
        <ul className={classNames('todo__list', {'list__removable': isRemovable})}
            onClick={isTasksList ? onAddTask : onSetVisiblePopup}
        >

            {
                lists.map((listItem, index) => (
                    <li key={index}
                        className={
                            classNames({
                                'removable': isRemovable,
                                'active': index === activeItem,
                            })
                        }
                        onClick={
                            isRemovable ? ((e) => {
                                if (e.target.tagName !== "IMG") {
                                    history.push(`/lists/${listItem.id}`);
                                }
                            }) :
                            isAllList &&
                                (() => {
                                    history.push(`/lists`);
                                })
                        }>

                        <i>
                            {listItem.icon ? <img src={listItem.icon} alt="icon"/> :
                                <Badge colors={listItem.color.name}/>}
                        </i>
                        <span className="name--item">{listItem.name}</span>
                        {isRemovable && <span className="count__list">({listItem.tasks.length})</span>}
                        {
                            isRemovable &&
                            <span className="remove_item" onClick={() => {
                                history.push(`/lists/1`);
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