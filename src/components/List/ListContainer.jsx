import React, {Component} from 'react';
import {connect} from "react-redux";
import List from "./List";

import iconLists from "./../../assets/img/list.svg"
import iconRemove from "./../../assets/img/remove.svg"
import {deleteList, getColors, getLists, setActiveItem} from "../../store/Lists/actions";
import {compose} from "redux";

class ListContainer extends Component {
    componentDidMount() {
        this.props.getLists();
        this.props.getColors();
    }

    state = {
        localLists: [
            {name: "Все задачи", icon: iconLists}
        ],
    };


    render() {
        return (
            <>
                <List lists={this.state.localLists}/>
                {
                    this.props.lists.length > 0 &&
                    <List
                        lists={this.props.lists}
                        activeItem={this.props.activeItem}
                        deleteList={this.props.deleteList}
                        setActiveItem={this.props.setActiveItem}
                        tasks={this.props.tasks}
                        isRemovable={true}
                        iconRemove={iconRemove}
                    />
                }

            </>
        );
    }
}

const mapStateToProps = ({lists, tasks}) => {
    return {
        lists: lists.lists,
        activeItem: lists.activeItemLists,
        tasks: tasks.tasks
    }
};

export default compose(
    connect(mapStateToProps, {getLists, getColors, deleteList, setActiveItem}))(ListContainer);