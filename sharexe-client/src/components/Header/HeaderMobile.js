import React, { Component } from 'react'

export default class HeaderMobile extends Component {
  render() {
    return (
      <div className="mobile_content ">
        <span className="lnr lnr-user menu_icon"></span>
        <div className="offcanvas-menu closed">
          <span className="lnr lnr-cross close_menu"></span>
          <div className="author-author__info">
            <div className="author__avatar v_middle">
              <img src="images/usr_avatar.png" alt="user avatar" />
            </div>
            <div className="autor__info v_middle">
              <p className="name">
                Jhon Doe
          </p>
              <p className="ammount">$20.45</p>
            </div>
          </div>

          <div className="author__notification_area">
            <ul>
              <li>
                <a href="notification.html">
                  <div className="icon_wrap">
                    <span className="lnr lnr-alarm"></span>
                    <span className="notification_count noti">25</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="message.html">
                  <div className="icon_wrap">
                    <span className="lnr lnr-envelope"></span>
                    <span className="notification_count msg">6</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="cart.html">
                  <div className="icon_wrap">
                    <span className="lnr lnr-cart"></span>
                    <span className="notification_count purch">2</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>


          <div className="dropdowns dropdown--author">
            <ul>
              <li>
                <a href="author.html">
                  <span className="lnr lnr-user"></span>Profile</a>
              </li>
              <li>
                <a href="dashboard.html">
                  <span className="lnr lnr-home"></span> Dashboard</a>
              </li>
              <li>
                <a href="dashboard-setting.html">
                  <span className="lnr lnr-cog"></span> Setting</a>
              </li>
              <li>
                <a href="cart.html">
                  <span className="lnr lnr-cart"></span>Purchases</a>
              </li>
              <li>
                <a href="favourites.html">
                  <span className="lnr lnr-heart"></span> Favourite</a>
              </li>
              <li>
                <a href="dashboard-add-credit.html">
                  <span className="lnr lnr-dice"></span>Add Credits</a>
              </li>
              <li>
                <a href="dashboard-statement.html">
                  <span className="lnr lnr-chart-bars"></span>Sale Statement</a>
              </li>
              <li>
                <a href="dashboard-upload.html">
                  <span className="lnr lnr-upload"></span>Upload Item</a>
              </li>
              <li>
                <a href="dashboard-manage-item.html">
                  <span className="lnr lnr-book"></span>Manage Item</a>
              </li>
              <li>
                <a href="dashboard-withdrawal.html">
                  <span className="lnr lnr-briefcase"></span>Withdrawals</a>
              </li>
              <li>
                <a href="#">
                  <span className="lnr lnr-exit"></span>Logout</a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a href="signup.html" className="author-area__seller-btn inline">Become a Seller</a>
          </div>
        </div>
      </div>

    )
  }
}
