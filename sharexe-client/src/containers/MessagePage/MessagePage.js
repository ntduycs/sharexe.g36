import React, { Component } from 'react';
import Conversation from '../../components/Conversation/Conversation';
import CardifyMessage from '../../components/CardifyMessage/CardifyMessage';

class MessagePage extends Component {
    

    render() {
        return (
            <section className="message_area">
                <div className="container">
                    <div className="row">
                        <CardifyMessage />
                        <Conversation />
                    </div>
                </div>
            </section>
        );
    }
}

export default MessagePage;