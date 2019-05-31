import React, {Component} from 'react';
import CarEditModal from "./CarEditModal";

import {getVehicleById} from '../../utils/api.connector';
import CarDeleteModal from "./CarDeleteModal";

export default class CarPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            deleteItem: false,
            vehicleInfo: {
                id: this.props.id,
                brand: this.props.brand,
                model: this.props.model,
                licensePlate: this.props.licensePlate,
                capacity: this.props.capacity
            }
        };

        this.triggerVisible = this.triggerVisible.bind(this);
        this.triggerModal = this.triggerModal.bind(this);

        this.triggerDelete = this.triggerDelete.bind(this);
        this.triggerDeleteModal = this.triggerDeleteModal.bind(this);

        this.loadVehicleById = this.loadVehicleById.bind(this);

        this.updateState = this.updateState.bind(this);
    }

    updateState(content) {
        this.setState({
            vehicleInfo: {...content}
        })
    }

    loadVehicleById() {
        getVehicleById(this.props.id)
            .then(response => {
                this.setState({
                    vehicleInfo: {
                        id: this.props.id,
                        brand: response.brand,
                        model: response.model,
                        licensePlate: response.licensePlate,
                        capacity: response.capacity
                    }
                })
            })
            .catch(error => {
                // alert("In TripPage:" + error)
            })
    }

    componentDidMount() {
        this.loadVehicleById();
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
            <CarEditModal triggerModal={this.triggerVisible} vehicleInfo={this.state.vehicleInfo}
                          updateState={this.updateState}/> : null;
    }

    triggerDeleteModal() {
        return this.state.deleteItem ?
            <CarDeleteModal trigglerDelete={this.triggerDelete} vehicleId={this.props.id}
                            updateState={this.updateState}
                            loadVehicleList={this.props.loadVehicleList}
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
                            <h4>{this.state.vehicleInfo.model}</h4>
                        </a>
                        <ul className="titlebtm">
                            <li>
                                <img className="auth-img" src="images/auth.jpg" alt="author"/>
                                <p>
                                    <a href="#">{this.state.vehicleInfo.brand}</a>
                                </p>
                            </li>
                            <li className="product_cat">
                                <a href="#">
                                    <span
                                        className="lnr lnr-user"/>Seats: <span>{this.state.vehicleInfo.capacity}</span></a>
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
