import React, {Component} from 'react';
import TripEditModal from "./TripEditModal";
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'

import {getTripById} from '../../utils/api.connector';
import TripDeleteModal from "./TripDeleteModal";

class TripPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            deleteItem: false,
            tripInfo: {
                id: this.props.id,
                from: this.props.from,
                to: this.props.to,
                capacity: this.props.capacity,
                price: this.props.price,
                beginAt: this.props.beginAt,
                endAt: this.props.endAt,
                description: this.props.description,
                restrictions: this.props.restrictions
            },
            participants: []
        };

        this.triggerVisible = this.triggerVisible.bind(this);
        this.triggerModal = this.triggerModal.bind(this);

        this.triggerDelete = this.triggerDelete.bind(this);
        this.triggerDeleteModal = this.triggerDeleteModal.bind(this);

        this.loadTripById = this.loadTripById.bind(this);

        this.updateState = this.updateState.bind(this);
    }

    updateState(content) {
        this.setState({
            tripInfo: {...content}
        })
    }

    loadTripById() {
        getTripById(this.props.id)
            .then(response => {
                this.setState({
                    tripInfo: {
                        id: this.props.id,
                        from:  response.from,
                        to:  response.to,
                        capacity:  response.capacity,
                        price:  response.price,
                        beginAt:  response.beginAt,
                        endAt:  response.endAt,
                        description:  response.description,
                        restrictions:  response.restrictions

                    }
                })
            })
            .catch(error => {
                // alert("In TripPage:" + error)
            })
    }

    componentDidMount() {
        this.loadTripById();

        axios.get(`/api/trips/participants?tripID=${this.props.id}&userID=${this.props.user.id}`)
            .then( ({data}) => {
                this.setState({participants: data});
        }).catch((err) => alert(err));
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    openDeleteModal() {
        this.setState({
            deleteItem: true
        })
    }

    triggerVisible() {
        this.setState({visible: !this.state.visible});
    }

    triggerDelete() {
        this.setState({deleteItem: !this.state.deleteItem})
    }

    triggerModal() {
        return this.state.visible ?
            <TripEditModal triggerModal={this.triggerVisible} tripInfo={this.state.tripInfo}
                          updateState={this.updateState}/> : null;
    }

    triggerDeleteModal() {
        return this.state.deleteItem ?
            <TripDeleteModal trigglerDelete={this.triggerDelete} tripId={this.props.id}
                             updateState={this.updateState}
                             loadTripList={this.props.loadTripList}
                            /> : null;
    }

    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="product product--card">
                    <div className="product__thumbnail">
                        <img src="images/p1.jpg" alt="Product Image"/>
                        <div className="prod_btn">

                            <a onClick={() => this.openModal()} className="transparent btn--sm btn--round">Edit</a>

                            <a onClick={() => this.openDeleteModal()}
                               className="transparent btn--sm btn--round">Delete</a>
                        </div>
                    </div>
                    <div className="product-desc">
                        <a href="#" className="product_title">
                            <h4>{this.state.tripInfo.id} > {this.state.participants.map(participant => <Link to={`/users?userID=${participant.Username}`}>{participant.Fullname + " "}</Link>)}</h4>
                        </a>
                        <ul className="titlebtm">
                            <li>
                                <img className="auth-img" src="images/auth.jpg" alt="author"/>
                                <p>
                                    <a href="#">{this.state.tripInfo.from}</a>
                                </p>
                            </li>
                            <li className="product_cat">
                                <a href="#">
                                    <span
                                        className="lnr lnr-user"/>Seats: <span>{this.state.tripInfo.to}</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="product-purchase">
                        <div className="price_love">
                            <span>Trips: <b>10</b></span>
                            <p>
                                <span className="lnr lnr-heart"/> 90</p>
                        </div>
                        <div className="rating product--rating">
                            <ul>
                                <li>
                                    <span className="fa fa-star"/>
                                </li>
                                <li>
                                    <span className="fa fa-star"/>
                                </li>
                                <li>
                                    <span className="fa fa-star"/>
                                </li>
                                <li>
                                    <span className="fa fa-star"/>
                                </li>
                                <li>
                                    <span className="fa fa-star-half-o"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {this.triggerModal()}
                {this.triggerDeleteModal()}
            </div>
        )
    }
}

const mapStateToProps = ({auth:{user}}) => ({user});

export default connect(mapStateToProps)(TripPage);
