import React, { PureComponent, createRef } from 'react';
import ContentEditable from 'react-contenteditable';
import { animateScroll } from "react-scroll";

import Message from './Message/Message';
import { getRoomMessages } from '../../services/message.service';

class Conversation extends PureComponent {
    state = {
        messages: [],
        html: ""
    };

    constructor(props) {
        super(props);
        this.messageContainer = createRef();
        this.contentEditable = createRef();
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
            const submitText = this.state.html;
            this.props.hoistContact({ ...this.props.activeParticipant, lastMessageContent: submitText });
            this.setState((prevState) => ({
                html: "",
                messages: [...prevState.messages,
                    {
                        id: new Date().getTime(),
                        text: prevState.html,
                        author: this.props.activeParticipant.partnerUsername,
                        authorName: this.props.activeParticipant.partnerFullName,
                        createdAt: new Date().getTime()
                    }]
            }));
        } else {
            this.setState({ html: e.target.value });
        }
    }

    onButtonClicked = () => {
        const submitText = this.state.html;
        this.props.hoistContact({ ...this.props.activeParticipant, lastMessageContent: submitText });
        this.setState((prevState) => ({
            html: "",
            messages: [...prevState.messages,
            {
                id: new Date().getTime(),
                text: prevState.html,
                author: this.props.activeParticipant.partnerUsername,
                authorName: this.props.activeParticipant.partnerFullName,
                createdAt: new Date().getTime()
            }]
        }));
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
                        {this.state.messages.map((message) => <Message key={message.id} {...message} profileImage={this.props.activeParticipant.profileImage} />)}
                    </div>

                    <div className="message_composer" style={{ display: 'flex', background: '#f4f5f8', padding: 5, paddingTop: 0 }}>
                        <ContentEditable innerRef={this.contentEditable} html={this.state.html} className="composer_editor" placeholder="Type message here..." style={{ flexGrow: '1', borderRadius: 5 }} onChange={this.onInputChanged} />
                        <div className="btns" style={{ flexBasis: 100, marginTop: 10 }}>
                            <button onClick={this.onButtonClicked} className="btn send btn--sm btn--round">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conversation;