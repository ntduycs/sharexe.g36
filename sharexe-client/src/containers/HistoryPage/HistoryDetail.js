import React, { Component } from 'react'

export default class HistoryDetail extends Component {
    render() {
        return (
            <section className="dashboard-area">
                <div className="dashboard_contents dashboard_statement_area">
                    <div className="container">
                        {/* cards */}
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="forum_detail_area ">
                                    <div className="forum--replays cardify">
                                        <div className="area_title">
                                            <h4>3 Feedbacks</h4>
                                        </div>
                                        {/* end .area_title */}
                                        <div className="forum_single_reply">
                                            <div className="reply_avatar">
                                                <img src="images/notification_head2.png" alt="reply avatar" />
                                            </div>
                                            <div className="reply_content">
                                                <div className="name_vote">
                                                    <div className="pull-left">
                                                        <h4>Cristiano Ronaldo
                                                            <span>VIP</span>
                                                        </h4>
                                                        <p>Answered <span>3</span> days ago</p>
                                                    </div>
                                                    {/* end .pull-left */}
                                                    <div className="vote">
                                                        <span className="item-count rating">
                                                            <ul>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star-half-o" />
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* end .vote */}
                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut sceleris que the
                  mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. </p>
                                            </div>
                                            {/* end .reply_content */}
                                        </div>
                                        {/* end .forum_single_reply */}
                                        <div className="forum_single_reply">
                                            <div className="reply_avatar">
                                                <img src="images/notification_head.png" alt="reply avatar" />
                                            </div>
                                            <div className="reply_content">
                                                <div className="name_vote">
                                                    <div className="pull-left">
                                                        <h4>Scarlet Witch</h4>
                                                        <p>Answered <span>2</span> days ago</p>
                                                    </div>
                                                    {/* end .pull-left */}
                                                    <div className="vote">
                                                        <span className="item-count rating">
                                                            <ul>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star-half-o" />
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* end .vote */}
                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut sceleris que the
                  mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. </p>
                                            </div>
                                            {/* end .reply_content */}
                                        </div>
                                        {/* end .forum_single_reply */}
                                        <div className="forum_single_reply">
                                            <div className="reply_avatar">
                                                <img src="images/notification_head6.png" alt="reply avatar" />
                                            </div>
                                            <div className="reply_content">
                                                <div className="name_vote">
                                                    <div className="pull-left">
                                                        <h4>Yasuo</h4>
                                                        <p>Answered 15 minutes ago</p>
                                                    </div>
                                                    {/* end .pull-left */}
                                                    <div className="vote">
                                                        <span className="item-count rating">
                                                            <ul>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star-half-o" />
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* end .vote */}
                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut sceleris que the
                  mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. </p>
                                            </div>
                                            {/* end .reply_content */}
                                        </div>
                                        {/* end .forum_single_reply */}
                                        <div className="pagination-area">
                                            <nav className="navigation pagination" role="navigation">
                                                <div className="nav-links">
                                                    <a className="prev page-numbers" href="#">
                                                        <span className="lnr lnr-arrow-left" />
                                                    </a>
                                                    <a className="page-numbers current" href="#">1</a>
                                                    <a className="page-numbers" href="#">2</a>
                                                    <a className="page-numbers" href="#">3</a>
                                                    <a className="next page-numbers" href="#">
                                                        <span className="lnr lnr-arrow-right" />
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="comment-form-area">
                                            <h4>Leave a comment</h4>
                                            {/* comment reply */}
                                            <div className="media comment-form support__comment">
                                                <div className="media-left">
                                                    <a href="#">
                                                        <img className="media-object" src="images/m7.png" alt="Commentator Avatar" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <form action="#" className="comment-reply-form">
                                                        <div id="trumbowyg-demo" />
                                                        <button className="btn btn--sm btn--round">Post Comment</button>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* comment reply */}
                                        </div>
                                    </div>
                                    {/* end .forum_replays */}
                                </div>
                                {/* end .forum_detail_area */}
                            </div>
                            {/* end .col-md-8 */}
                            <div className="col-lg-4">
                                <aside className="sidebar support--sidebar">
                                    <div className="sidebar-card card--forum_categories">
                                        <div className="card-title">
                                            <h4>Trip of <b>Duy Nguyen</b></h4>
                                        </div>
                                        <div className="collapsible-content">
                                            <ul className="card-content">
                                                <li>
                                                    <a href="#">
                                                        <span className="lnr lnr-chevron-right" />Name
                    <span className="item-count"> Driver 1</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="lnr lnr-chevron-right" />From
                    <span className="item-count"> Ho Chi Minh city</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="lnr lnr-chevron-right" />To
                    <span className="item-count">Ha Noi</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="lnr lnr-chevron-right" />Passengers
                    <span className="item-count">4</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="lnr lnr-chevron-right" />Duration
                    <span className="item-count">10 days</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="lnr lnr-chevron-right" />Vehicles
                    <span className="item-count">BMW s8</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="lnr lnr-chevron-right" />Rating
                    <span className="item-count rating">
                                                            <ul>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star-half-o" />
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end /.collapsible_content */}
                                    </div>
                                    {/* end .card--forum_categories */}
                                </aside>
                                {/* end .sidebar */}
                            </div>
                            {/* end .col-md-4 */}
                        </div>
                        {/* end .row */}
                    </div>
                    {/* end /.container */}
                </div>

            </section>
        )
    }
}
