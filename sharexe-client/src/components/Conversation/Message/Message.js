import React from 'react';
import { connect} from 'react-redux';

import { getDateTimeToNow } from '../../../utils/datetime';

const message = (props) => (
    <div className="conversation">
        <div className="head">
            <div className="chat_avatar">
                <img src={`images/notification_head${props.author === props.user.username ? props.user.profileImage : props.profileImage}.png`} alt="Notification avatar" />
            </div>

            <div className="name_time">
                <div>
                    <h4>{props.author === props.user.username ? "You" : props.authorName}</h4>
                    <p></p>
                </div>
                <span className="email">{getDateTimeToNow(props.createdAt)}</span>
            </div>
                                    
        </div>

        <div className="body">
            <p>{props.text}</p>
        </div>
    </div>
);

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(message);