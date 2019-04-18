import React from 'react';
import Conversation from '../../components/Conversation/Conversation';
import CardifyMessage from '../../components/CardifyMessage/CardifyMessage';

const MessagePage = (props) => (
    <section class="message_area">
        <div class="container">
            <div class="row">
                <CardifyMessage />
                <Conversation />
            </div>
        </div>
    </section>
);

export default MessagePage;