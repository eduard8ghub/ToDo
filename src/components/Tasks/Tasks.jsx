import React, {useState, useEffect} from "react";
import TasksList from "./TasksList/TasksList";
import List from "../List/List";

import iconAdd from "./../../assets/img/add.svg";

const Tasks = ({tasks, activeItemList, lists}) => {
    // const [activeItemId, setActiveItemId] = useState(1);

    useEffect(() => {
        // console.log(tasks)
    },[lists]);
    return (
        <>
            <TasksList tasks={tasks[activeItemList]}/>
            <List lists={[{name: 'Добавить папку', icon: iconAdd}]}/>
        </>
    )
};

export default Tasks;