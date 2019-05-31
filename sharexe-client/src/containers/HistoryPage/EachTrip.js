import React, {Component} from 'react';
import {Link} from "react-router-dom";

class EachTrip extends Component {
    render() {
        return (
            <li>
                <div className="user_single">
                    <div className="user__short_desc">
                        <div className="user_avatar">
                            <img src="images/m7.png" alt />
                        </div>
                        <div className="user_info">
                            <a href="#">Trip: {this.props.id}</a>
                            <p>From: {this.props.from}</p>
                            <p>To: {this.props.to}</p>
                        </div>
                    </div>
                    <div className="user__meta">
                        <p>Travelers: {this.props.numOfPeople}</p>
                        <p>Duration: {this.props.duration} days</p>
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
        );
    }
}

export default EachTrip;