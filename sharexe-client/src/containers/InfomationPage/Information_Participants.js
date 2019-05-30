import React, { Component } from 'react';
import {getAllVehicles, getUserInfo} from "../../utils/api.connector";
import { connect } from 'react-redux';
import axios from 'axios';

import {Link} from 'react-router-dom';

class InformationPage extends Component {

    constructor(props) {
        super(props);
    }

    state = {

    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const userID = params.get('userID');
        axios.get("/api/users/" + userID).then(({data}) => this.setState({...data})).catch((err) => alert(err));
    }

    render() {
        return (
            <section class="author-profile-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <aside class="sidebar sidebar_author">
                                <div class="author-card sidebar-card">
                                    <div class="author-infos">
                                        <div class="author_avatar">
                                            <img src="images/duy2.jpg" alt="Presenting the broken author avatar :D" />
                                        </div>

                                        <div class="author">
                                            <h4>{this.state.fullName}</h4>
                                            <p>Signed Up: {this.state.createdAt}</p>
                                        </div>


                                        <div class="author-badges">
                                            <ul class="list-unstyled">
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Diamnond Author">
                                                        <img src="images/svg/author_rank_diamond.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Has sold more than $10k">
                                                        <img src="images/svg/author_level_3.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Referred 10+ members">
                                                        <img src="images/svg/affiliate_level_1.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Has Collected 2+ Items">
                                                        <img src="images/svg/collection_level_1.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Exclusive Author">
                                                        <img src="images/svg/exclusive_author.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Weekly Featured Author">
                                                        <img src="images/svg/featured_author.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Member for 2 Year">
                                                        <img src="images/svg/members_years.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="The seller is recommended by authority">
                                                        <img src="images/svg/recommended.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Won a contest">
                                                        <img src="images/svg/contest_winner.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Helped to resolve copyright issues">
                                                        <img src="images/svg/copyright.svg" alt="" class="svg" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>



                                        <div class="author-btn">

                                        </div>

                                    </div>

                                </div>




                                <div class="sidebar-card freelance-status">
                                    <div class="custom-radio">
                                        <input type="radio" id="opt1" class="" name="filter_opt" checked="" />
                                        <Link to={"/messages?username=" + this.state.username}><label for="opt1">
                                            <span class="circle"></span>Contact {this.state.username}</label></Link>


                                    </div>
                                </div>



                            </aside>
                        </div>


                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-md-4 col-sm-4">
                                    <div class="author-info mcolorbg4">
                                        <p>Driver</p>
                                        <h3>123</h3>
                                    </div>
                                </div>


                                <div class="col-md-4 col-sm-4">
                                    <div class="author-info pcolorbg">
                                        <p>Passenger</p>
                                        <h3>14</h3>
                                    </div>
                                </div>


                                <div class="col-md-4 col-sm-4">
                                    <div class="author-info scolorbg">
                                        <p>Average Rating</p>
                                        <div class="rating">
                                            <ul>
                                                <li>
                                                    <span class="fa fa-star"></span>
                                                </li>
                                                <li>
                                                    <span class="fa fa-star"></span>
                                                </li>
                                                <li>
                                                    <span class="fa fa-star"></span>
                                                </li>
                                                <li>
                                                    <span class="fa fa-star"></span>
                                                </li>
                                                <li>
                                                    <span class="fa fa-star-half-alt"></span>
                                                </li>
                                            </ul>
                                            <span class="rating__count">(69)</span>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="row">
                                <div class="col-md-12">


                                    <div class="user_area">
                                        <ul>


                                            <li>
                                                <div class="user_single">
                                                    <div class="user__short_desc">

                                                        <div class="user_info">
                                                            <p><b>Name</b>: {this.state.fullName}</p>
                                                            <p><b>BirthDay</b>: {this.state.dateOfBirth}</p>
                                                            <p><b>Gender</b>: {this.state.sex}</p>
                                                            <p><b>Mail</b>:{this.state.email}</p>
                                                            <p><b>Phone number</b>:{this.state.phoneNumber}</p>
                                                            <p><b>OverallRaring</b>:{this.state.overallRating}</p>

                                                        </div>
                                                    </div>


                                                </div>

                                            </li>

                                            <li>
                                                <div class="user_single">
                                                    <div class="user__short_desc">
                                                        <div class="user_avatar">
                                                            <img src="images/notification_head4.png" alt="" />
                                                        </div>
                                                        <div class="user_info">
                                                            <p><b>Passenger</b>: Trần Thanh An
                                                            </p><p><b>From</b>: Hai Phong</p>

                                                        </div>
                                                    </div>
                                                    <div class="user__meta">
                                                        <p><b>Travelers</b>:Đà Lạt</p>
                                                        <p><b>Comment</b>: Chuyến đi rất là vui vẻ và chúng ta ....</p>
                                                        <div class="rating product--rating">
                                                            <ul>
                                                                <li>
                                                                    <span class="fa fa-star"></span>
                                                                </li>
                                                                <li>
                                                                    <span class="fa fa-star"></span>
                                                                </li>
                                                                <li>
                                                                    <span class="fa fa-star"></span>
                                                                </li>
                                                                <li>
                                                                    <span class="fa fa-star-half-alt"></span>
                                                                </li>
                                                                <li>
                                                                    <span class="far fa-star"></span>
                                                                </li>
                                                            </ul>
                                                            <span class="rating__count">(34)</span>
                                                        </div>
                                                    </div>
                                                    <div class="user__status user--following">
                                                        <a href="#" class="btn btn--round btn--md">Details</a>
                                                    </div>
                                                </div>

                                            </li>

                                            <li>
                                                <div class="user_single">
                                                    <div class="user__short_desc">
                                                        <div class="user_avatar">
                                                            <img src="images/notification_head2.png" alt="" />
                                                        </div>
                                                        <div class="user_info">
                                                            <p><b>Passenger</b>:  Lê Thanh An
                                                            </p><p>From: Ha Noi</p>

                                                        </div>
                                                    </div>
                                                    <div class="user__meta">
                                                        <p><b>Travelers</b>: Huế</p>
                                                        <p><b>Comment</b>: Cám ơn rất nhiều về chuyến đi. mong ...</p>
                                                        <div class="rating product--rating">
                                                            <ul>
                                                                <li>
                                                                    <span class="fa fa-star"></span>
                                                                </li>
                                                                <li>
                                                                    <span class="fa fa-star"></span>
                                                                </li>
                                                                <li>
                                                                    <span class="fa fa-star"></span>
                                                                </li>
                                                                <li>
                                                                    <span class="fa fa-star"></span>
                                                                </li>
                                                                <li>
                                                                    <span class="fa fa-star"></span>
                                                                </li>
                                                            </ul>
                                                            <span class="rating__count">(8)</span>
                                                        </div>
                                                    </div>
                                                    <div class="user__status user--following">
                                                        <a href="#" class="btn btn--round btn--md">Details</a>
                                                    </div>
                                                </div>

                                            </li>
                                        </ul>

                                        <div class="pagination-area pagination-area2">
                                            <nav class="navigation pagination " role="navigation">
                                                <div class="nav-links">
                                                    <a class="page-numbers current" href="#">1</a>
                                                    <a class="page-numbers" href="#">2</a>
                                                    <a class="page-numbers" href="#">3</a>
                                                    <a class="next page-numbers" href="#">
                                                        <span class="lnr lnr-arrow-right"></span>
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </section>

        );
    }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(InformationPage) ;