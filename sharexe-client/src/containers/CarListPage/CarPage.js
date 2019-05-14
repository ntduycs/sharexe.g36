import React, { Component } from 'react'
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
        id: 0,
        brand: '',
        model: '',
        licensePlate: '',
        capacity: 0
      }
    };

    this.triggerVisible = this.triggerVisible.bind(this);
    this.triggerModal = this.triggerModal.bind(this);

    this.triggerDelete = this.triggerDelete.bind(this);
    this.triggerDeleteModal = this.triggerDeleteModal.bind(this);

    this.loadVehicleById = this.loadVehicleById.bind(this);
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
        .catch(error => {})
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
    return this.state.visible ? <CarEditModal triggerModal={this.triggerVisible} vehicleInfo={this.state.vehicleInfo}/> : null;
  }

  triggerDeleteModal() {
    return this.state.deleteItem ? <CarDeleteModal trigglerModal={this.triggerDelete} vehicleId={this.state.vehicleInfo.id}/>: null;
  }

  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="product product--card">
          <div className="product__thumbnail">
            <img src="images/p1.jpg" alt="Product Image" />
            <div className="prod_btn">

              <a onClick={() => this.openModal()} className="transparent btn--sm btn--round">Edit</a>

              <a onClick={() => this.openDeleteModal()} className="transparent btn--sm btn--round">Delete</a>
            </div>
          </div>
          <div className="product-desc">
            <a href="#" className="product_title">
              <h4>{this.props.model}</h4>
            </a>
            <ul className="titlebtm">
              <li>
                <img className="auth-img" src="images/auth.jpg" alt="author image" />
                <p>
                  <a href="#">{this.props.brand}</a>
                </p>
              </li>
              <li className="product_cat">
                <a href="#">
                  <span className="lnr lnr-user" />Seats: <span>{this.props.capacity}</span></a>
              </li>
            </ul>
          </div>
          <div className="product-purchase">
            <div className="price_love">
              <span>Trips: <b>10</b></span>
              <p>
                <span className="lnr lnr-heart" /> 90</p>
            </div>
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
                  <span className="fa fa-star-half-o" />
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
