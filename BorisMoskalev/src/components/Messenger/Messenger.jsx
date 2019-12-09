import './Messenger.css';

import React, {PureComponent} from 'react';

import {MessagesList} from 'components/MessagesList';
import {MessageForm} from 'components/MessageForm';
import {ChatList} from 'components/ChatList'

export class Messenger extends PureComponent {

    get messages() {
        let {match, chats} = this.props;

        let messages = [];
        if (match && chats[match.params.id]) {
            messages = chats[match.params.id].messages;
        }
        return messages;
    }

    interval = null;

    componentDidUpdate() {
        let {match,chats } = this.props;
        const chat = chats[match.params.id];
        if (chat.messages.length) {
            const {author} = chat.messages[chat.messages.length - 1];
            console.log(author);
            if (author !== 'Bot') {
                const message = {
                    author: 'Bot',
                    text: 'Привет ' + author + '! Бот на связи! Повторите я вас не расслышал!'
                }
                setTimeout(() => {
                    this.handleMessageSend(message);
                }, 1000);
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleMessageSend = (message) => {
        let {match,chats} = this.props;
        const chat = chats[match.params.id];
        const messages = this.messages.concat(message)
        chat.messages = messages;
        this.setState({
            ...this.state.chats,
            [match.params.id]: chat,
        });
    };

    render() {
        return (
            <div className="container">
                <div className="chatlist">
                    <ChatList/>
                </div>
                <div className="messenger">
                    {this.props.chat ? <MessagesList items={this.messages}/> : 'Чат еще не выбран'}
                    {this.props.chat && <MessageForm onSend={this.handleMessageSend}/>}
                </div>
            </div>

        )
    }
}