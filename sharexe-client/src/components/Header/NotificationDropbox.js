import React, { Component } from 'react'

export default class NotificationDropbox extends Component {
  render() {
    return (
      <div>
        <div className="icon_wrap">
          <span className="lnr lnr-alarm"></span>
        </div>

        <div className="dropdowns notification--dropdown">

          <div className="dropdown_module_header">
            <h4>My Notifications</h4>
          </div>

          <div className="notifications_module">
            <div className="notification">
              <div className="notification__info">
                <div className="info_avatar">
                  <img src="images/notification_head5.png" alt="" />
                </div>
                <div className="info">
                  <div>
                    <p><span>Khamoka Smith</span> has just allowed you to join his ride</p>
                    <p><a href="#">Ride detail</a></p>
                  </div>
                  <p className="time">Just now</p>
                </div>
              </div>

            </div>

            <div className="notification">
              <div className="notification__info">
                <div className="info_avatar">
                  <img src="images/notification_head6.png" alt="" />
                </div>
                <div className="info">
                  <div>
                    <p className="thanglozviettemplatengunhucho"><span>John</span> wants to join your ride</p>
                    <p><a href="#">Ride detail</a></p>
                  </div>
                  <p className="time">1 minute ago</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
