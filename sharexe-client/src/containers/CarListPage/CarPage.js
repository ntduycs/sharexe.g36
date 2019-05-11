import React, { Component } from 'react'

export default class CarPage extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="product product--card">
          <div className="product__thumbnail">
            <img src="images/p1.jpg" alt="Product Image" />
            <div className="prod_btn">

              <a onClick={() => this.openModal()} className="transparent btn--sm btn--round">Edit</a>

              <a onClick={() => this.openModal()} className="transparent btn--sm btn--round">Delete</a>
            </div>
          </div>
          <div className="product-desc">
            <a href="#" className="product_title">
              <h4>Ferrari 458 Italia</h4>
            </a>
            <ul className="titlebtm">
              <li>
                <img className="auth-img" src="images/auth.jpg" alt="author image" />
                <p>
                  <a href="#">Ferrari</a>
                </p>
              </li>
              <li className="product_cat">
                <a href="#">
                  <span className="lnr lnr-user" />Seats: <span>4</span></a>
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
      </div>
    )
  }
}
