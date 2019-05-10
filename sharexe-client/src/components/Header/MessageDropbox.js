import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import SmallCardifyMessage from '../SmallCardifyMessage/SmallCardifyMessage';

import '../../style.css';

class MessageDropbox extends Component {
  constructor(props) {
    super(props);
    this.smallCardifyMessage = React.createRef();
  }

  render() {
    return (
      <li className="has_dropdown" onMouseEnter={() => this.smallCardifyMessage.current.fetchMessages()}>
        <div className="icon_wrap">
          <span className="lnr lnr-envelope"></span>
        </div>

        <div className="dropdowns messaging--dropdown">
          <div className="dropdown_module_header">
            <h4>My Messages</h4>
            <Link to="/messages">View All</Link>
          </div>

          <SmallCardifyMessage ref={this.smallCardifyMessage} user={this.props.user} />

        </div>
      </li>
    )
  }
}

export default MessageDropbox;
