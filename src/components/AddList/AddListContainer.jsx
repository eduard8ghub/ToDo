import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddList from "./AddList";
import {setVisiblePopup} from "../../store/Lists/actions";

function mapStateToProps(state) {
    return {
        visiblePopup: state.lists.visiblePopup
    };
}

class AddListContainer extends Component {
    render() {
        return (
            <>
                <AddList visiblePopup={this.props.visiblePopup} setVisiblePopup={this.props.setVisiblePopup}/>
            </>
        );
    }
}

export default connect(
    mapStateToProps,{setVisiblePopup}
)(AddListContainer);