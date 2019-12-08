import React, {PureComponent} from "react";
import {connect} from "react-redux";

import {Messenger} from "components/Messenger";
import {load} from "actions/chats";

export class MessengerContainer extends PureComponent {
    render() {
        return (
            <Messenger/>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        chats: state.chats.get('entries').toJS()
};

}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: ()=> dispatch(load())
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);