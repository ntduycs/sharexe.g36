import React, { Component } from 'react';
import qs from 'query-string';

import Conversation from '../../components/Conversation/Conversation';
import CardifyMessage from '../../components/CardifyMessage/CardifyMessage';

class MessagePage extends Component {
    render() {
        const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });

        return (
            <section className="message_area">
                <div className="container">
                    <div className="row">
                        <CardifyMessage activeOtherParticipantName={query.name} activeOtherParticipant={query.username}/>
                        <Conversation activeOtherParticipantName={query.name} activeOtherParticipant={query.username}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MessagePage;