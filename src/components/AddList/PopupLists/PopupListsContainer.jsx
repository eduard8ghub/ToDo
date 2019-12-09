import React, {Component} from 'react';
import {connect} from "react-redux";
import PopupLists from "./PopupLists";
import {addList, setVisiblePopup} from "../../../store/Lists/actions";

class PopupListsContainer extends Component {
    render() {
        return (
            <>
                {/*{console.log(this.props.colors)}*/}
                {   this.props.colors &&
                    this.props.colors.length > 0 &&
                <PopupLists
                        colors={this.props.colors}
                        // statusPopup={this.props.statusPopup}
                        visiblePopup={this.props.visiblePopup}
                        setVisiblePopup={this.props.setVisiblePopup}
                        addList={this.props.addList}
                    />
                }
            </>
        );
    }
}

const mapDispatchToProps = (state) => {
    return {
        colors: state.lists.colors,
        visiblePopup: state.lists.visiblePopup
    }
};

export default connect(mapDispatchToProps,{setVisiblePopup, addList})(PopupListsContainer);