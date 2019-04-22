import React, { PureComponent, createRef } from 'react';
import ContentEditable from 'react-contenteditable';
import { connect} from 'react-redux';
import { animateScroll } from "react-scroll";

import Message from './Message/Message';

import { getRoomMessages } from '../../services/message.service';
import { createChatRoom } from '../../services/room.service';
import * as socketEvents from '../../constants/socketEvents';
import Socket from '../../socket';

class Conversation extends PureComponent {
    state = {
        messages: [],
        html: ""
    };

    constructor(props) {
        super(props);
        this.messageContainer = createRef();
        this.contentEditable = createRef();

        Socket.getInstance().on(socketEvents.A_USER_SENDS_MESSAGE, ({ message, roomId, partnerFullName, partnerUsername , profileImage}) => {
            if (this.props.activeParticipant.roomId === roomId)  this.setState((prevState) => ({ messages: [...prevState.messages, message] }));
            this.props.hoistContactForReceiver(roomId, message, partnerFullName, partnerUsername, profileImage);
        });
    }

    componentDidMount = async () => {
        try {
            const { data: messages } = await getRoomMessages(this.props.activeParticipant.roomId);
            this.setState({ messages });
            this.contentEditable.current.focus();
        } catch (e) {
            console.log(e);
        }
        window.scrollTo(0, this.messageContainer.current.offsetTop);
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevProps.activeParticipant.partnerUsername !== this.props.activeParticipant.partnerUsername) {
            /** Case active contact changes */
            try {
                const { data: messages } = await getRoomMessages(this.props.activeParticipant.roomId);
                this.setState({ messages });
                this.contentEditable.current.focus();                
            } catch (e) {
                console.log(e);
            }
            window.scrollTo(0, this.messageContainer.current.offsetTop);
        } else {
            /** Case new message arrives */
            if (prevState.messages.length !== this.state.messages.length) {
                animateScroll.scrollToBottom({
                    containerId: "message-container",
                    duration: 0
                });
            }
        }
    }

    onInputChanged = (e) => {
        if (e.target.value.includes("<div><br></div>")) {
            this.onFormSubmit();
        } else  {
            this.setState({ html: e.target.value.replace(/&nbsp;/gi, ' ') });
        }
    }

    onFormSubmit = async () => {
        const submitText = this.state.html.trim();

        let { roomId } = this.props.activeParticipant;

        if (!roomId) {
            const { data } = await createChatRoom(this.props.activeParticipant.partnerUsername);
            roomId = data;
            Socket.getInstance().emit(socketEvents.THIS_USER_INVITES, ({ roomId, partnerId: this.props.activeParticipant.partnerId }));
        }
        
        this.props.hoistContact(roomId, submitText);

        console.log('heere');
        this.setState((prevState) => ({
            html: "",
            messages: [...prevState.messages,
            {
                id: new Date().getTime(),
                roomId,
                isNew: true,
                text: submitText,
                author: this.props.user.username,
                authorName: this.props.user.fullName,
                createdAt: new Date().getTime()
            }]
        }));

        Socket.getInstance().emit(socketEvents.THIS_USER_SENDS_MESSAGE, {
            message: {
                id: new Date().getTime(),
                text: submitText,
                author: this.props.user.username,
                authorName: this.props.user.fullName,
                createdAt: new Date().getTime(),
            },
            roomId,
            partnerFullName: this.props.user.fullName,
            partnerUsername: this.props.user.username,
            profileImage: this.props.user.profileImage
        });
    }

    render() {
        return (
            <div className="col-lg-7" ref={this.messageContainer}>
                <div className="chat_area cardify">
                    <div className="chat_area--title">
                        <h3>Message with &nbsp;<span className="name">{this.props.activeParticipant.partnerFullName}</span>
                        </h3>
                        <div className="message_toolbar">
                            <button style={{ background: 'none', outline: 'none', border: 0 }} id="drop1" className="dropdown-trigger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <img src="images/menu_icon.png" className="dropdown-trigger" alt="Menu icon" />
                            </button>

                            <ul className="custom_dropdown dropdown-menu" aria-labelledby="drop1">
                                <li>
                                    <span>Mark as unread</span>
                                </li>
                                <li>
                                    <span>Dropdown link</span>
                                </li>
                                <li>
                                    <span>All Attachments</span>
                                </li>
                            </ul>
                                
                        </div>
                            
                    </div>

                    <div className="chat_area--conversation" id="message-container">
                        {this.state.messages.map((message) => <Message key={message.id} {...message} user={this.props.user} profileImage={this.props.activeParticipant.profileImage} />)}
                    </div>

                    <div className="message_composer" style={{ display: 'flex', background: '#f4f5f8', padding: 5, paddingTop: 0 }}>
                        <ContentEditable innerRef={this.contentEditable} html={this.state.html} className="composer_editor" placeholder="Type message here..." style={{ flexGrow: '1', borderRadius: 5 }} onChange={this.onInputChanged} />
                        <div className="btns" style={{ flexBasis: 100, marginTop: 10 }}>
                            <button onClick={this.onFormSubmit} className="btn send btn--sm btn--round">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });


export default connect(mapStateToProps)(Conversation);