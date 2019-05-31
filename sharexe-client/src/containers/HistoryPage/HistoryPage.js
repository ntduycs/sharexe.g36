import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {TRIP_LIST_SIZE} from "../../constants/common";
import {getMyTrips} from "../../utils/api.connector";

class HistoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joined: 0,
            created: 0
        }
    }

    getMyJoinedTrips(page = 0, size = TRIP_LIST_SIZE) {
        let promise = getMyTrips(page, size);

        promise
            .then(response => {
                this.setState({
                    trips: response.content,
                    page: response.page,
                    size: response.size,
                    totalElements: response.totalElements,
                    totalPages: response.totalPages,
                    isLast: response.isLast,
                    joined: response.content.reduce((acc, cur) => acc + (this.props.user.id !== cur.createdBy ? 1 :0), 0),
                    created: response.content.reduce((acc, cur) => acc + (this.props.user.id === cur.createdBy ? 1 :0), 0)
                })
            })
            .catch(error => {
                alert("From HistoryPage component:" + error);
            });
    }

    componentDidMount() {
        this.getMyJoinedTrips();

    }

    render() {
        return (
            <section className="author-profile-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <aside className="sidebar sidebar_author">
                                <div className="author-card sidebar-card">
                                    <div className="author-infos">
                                        <div className="author_avatar">
                                            <img src="images/author-avatar.jpg" alt="Presenting the broken author avatar :D" />
                                        </div>
                                        <div className="author">
                                            <h4>{this.props.user.fullName}</h4>
                                            <p>Signed Up: {this.props.user.createdAt}</p>
                                        </div>
                                        {/* end /.author */}
                                        <div className="author-badges">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="Diamnond Author">
                                                        <img src="images/svg/author_rank_diamond.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="Has sold more than $10k">
                                                        <img src="images/svg/author_level_3.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="Referred 10+ members">
                                                        <img src="images/svg/affiliate_level_1.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="Has Collected 2+ Items">
                                                        <img src="images/svg/collection_level_1.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="Exclusive Author">
                                                        <img src="images/svg/exclusive_author.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="Weekly Featured Author">
                                                        <img src="images/svg/featured_author.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="Member for 2 Year">
                                                        <img src="images/svg/members_years.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="The seller is recommended by authority">
                                                        <img src="images/svg/recommended.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="Won a contest">
                                                        <img src="images/svg/contest_winner.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="Helped to resolve copyright issues">
                                                        <img src="images/svg/copyright.svg" alt className="svg" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end /.author-badges */}
                                        <div className="author-btn">
                                            <a href="#" className="btn btn--md btn--round">Edit Profile</a>
                                        </div>
                                        {/* end /.author-btn */}
                                    </div>
                                    {/* end /.author-infos */}
                                </div>
                                {/* end /.author-card */}
                                <div className="sidebar-card freelance-status">
                                    <div className="custom-radio">
                                        <input type="radio" id="opt1" className name="filter_opt" defaultChecked />
                                        <label htmlFor="opt1">
                                            <span className="circle" />Status: Available Now</label>
                                    </div>
                                </div>
                                {/* end /.author-card */}
                            </aside>
                        </div>
                        {/* end /.sidebar */}
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="author-info mcolorbg4">
                                        <p>Driver</p>
                                        <h3>{this.state.created}</h3>
                                    </div>
                                </div>
                                {/* end /.col-md-4 */}
                                <div className="col-md-4 col-sm-4">
                                    <div className="author-info pcolorbg">
                                        <p>Passenger</p>
                                        <h3>{this.state.joined}</h3>
                                    </div>
                                </div>
                                {/* end /.col-md-4 */}
                                <div className="col-md-4 col-sm-4">
                                    <div className="author-info scolorbg">
                                        <p>Average Rating</p>
                                        <div className="rating">
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
                                                    <span className="fa fa-star-half-alt" />
                                                </li>
                                            </ul>
                                            {/*<span className="rating__count">(48)</span>*/}
                                        </div>
                                    </div>
                                </div>
                                {/* end /.col-md-4 */}
                            </div>
                            {/* end /.row */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="user_area">
                                        <ul>
                                            <li>
                                                <div className="user_single">
                                                    <div className="user__short_desc">
                                                        <div className="user_avatar">
                                                            <img src="images/m7.png" alt />
                                                        </div>
                                                        <div className="user_info">
                                                            <a href="#">Driver: 1</a>
                                                            <p>From: Ha Noi</p>
                                                            <p>To: Ho Chi Minh city</p>
                                                        </div>
                                                    </div>
                                                    <div className="user__meta">
                                                        <p>Travelers: 5</p>
                                                        <p>Duration: 7 days</p>
                                                        <div className="rating product--rating">
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
                                                                    <span className="fa fa-star-half-alt" />
                                                                </li>
                                                            </ul>
                                                            <span className="rating__count">(6)</span>
                                                        </div>
                                                    </div>
                                                    <div className="user__status user--following">
                                                        <Link to="/history-detail" className="btn btn--round btn--md">Details</Link>
                                                    
                                                    </div>
                                                </div>
                                                {/* end /.user_single */}
                                            </li>
                                            <li>
                                                <div className="user_single">
                                                    <div className="user__short_desc">
                                                        <div className="user_avatar">
                                                            <img src="images/m10.png" alt />
                                                        </div>
                                                        <div className="user_info">
                                                            <a href="#">Passenger: 1</a>
                                                            <p>From: Hai Phong</p>
                                                            <p>To: Hue</p>
                                                        </div>
                                                    </div>
                                                    <div className="user__meta">
                                                        <p>Travelers: 4</p>
                                                        <p>Duration: 7 days</p>
                                                        <div className="rating product--rating">
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
                                                                    <span className="fa fa-star-half-alt" />
                                                                </li>
                                                                <li>
                                                                    <span className="far fa-star" />
                                                                </li>
                                                            </ul>
                                                            <span className="rating__count">(34)</span>
                                                        </div>
                                                    </div>
                                                    <div className="user__status user--following">
                                                        <Link to="/history-detail" className="btn btn--round btn--md">Details</Link>
                                                        
                                                    </div>
                                                </div>
                                                {/* end /.user_single */}
                                            </li>
                                            <li>
                                                <div className="user_single">
                                                    <div className="user__short_desc">
                                                        <div className="user_avatar">
                                                            <img src="images/m3.png" alt />
                                                        </div>
                                                        <div className="user_info">
                                                            <a href="#">Driver: 2</a>
                                                            <p>From: Ha Noi</p>
                                                            <p>To: Quang Binh</p>
                                                        </div>
                                                    </div>
                                                    <div className="user__meta">
                                                        <p>Travelers: 5</p>
                                                        <p>Duration: 4 days</p>
                                                        <div className="rating product--rating">
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
                                                                    <span className="fa fa-star" />
                                                                </li>
                                                            </ul>
                                                            <span className="rating__count">(8)</span>
                                                        </div>
                                                    </div>
                                                    <div className="user__status user--following">
                                                        <Link to="/history-detail" className="btn btn--round btn--md">Details</Link>
                                                    </div>
                                                </div>
                                                {/* end /.user_single */}
                                            </li>
                                        </ul>
                                        <div className="pagination-area pagination-area2">
                                            <nav className="navigation pagination " role="navigation">
                                                <div className="nav-links">
                                                    <a className="page-numbers current" href="#">1</a>
                                                    <a className="page-numbers" href="#">2</a>
                                                    <a className="page-numbers" href="#">3</a>
                                                    <a className="next page-numbers" href="#">
                                                        <span className="lnr lnr-arrow-right" />
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    {/* end /.user_area */}
                                </div>
                                {/* end /.col-md-12 */}
                            </div>
                            {/* end /.row */}
                        </div>
                        {/* end /.col-md-8 */}
                    </div>
                    {/* end /.row */}
                </div>
                {/* end /.container */}
            </section>


        )
    }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(HistoryPage);
