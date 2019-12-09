import './Layout.css';

import React, {PureComponent} from 'react';
import {Header} from "components/Header";
import {MessengerRedux} from 'containers/MessengerContainer'

export class Layout extends PureComponent {
    render() {
        const {match}=this.props;
        return (
            <div>
                <header className="header">
                    <Header/>
                </header>
                <MessengerRedux match={match} />
            </div>
        )
    }
}