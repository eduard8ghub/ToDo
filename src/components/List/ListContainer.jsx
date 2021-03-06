import React, {Component} from 'react';
import {connect} from "react-redux";
import List from "./List";

import iconLists from "./../../assets/img/list.svg"
import iconRemove from "./../../assets/img/remove.svg"
import {deleteList, getColors, getListsTasks, setActiveItem} from "../../store/Lists/actions";
import {compose} from "redux";

class ListContainer extends Component {
    componentDidMount() {
        this.props.getListsTasks();
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
                <List lists={this.state.localLists} isAllList={true}/>
                {
                    this.props.lists.length > 0 &&
                    <List
                        lists={this.props.lists}
                        activeItem={this.props.activeItem}
                        deleteList={this.props.deleteList}
                        setActiveItem={this.props.setActiveItem}
                        isRemovable={true}
                        iconRemove={iconRemove}
                    />
                }
            </>
        );
    }
}

const mapStateToProps = ({lists}) => {
    return {
        lists: lists.lists,
        activeItem: lists.activeItemLists,
    }
};

export default compose(
    connect(mapStateToProps, {getListsTasks, getColors, deleteList, setActiveItem}))(ListContainer);