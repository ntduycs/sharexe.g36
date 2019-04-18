import React from 'react';

const message = (props) => (
    <div className="conversation">
        <div className="head">
            <div className="chat_avatar">
                <img src={props.avatar} alt="Notification avatar" />
            </div>

            <div className="name_time">
                <div>
                    <h4>{props.author}</h4>
                    <p></p>
                </div>
                <span className="email">{props.createdAt}</span>
            </div>
                                    
        </div>

        <div className="body">
            <p>{props.content}</p>
        </div>
    </div>
);

export default message;