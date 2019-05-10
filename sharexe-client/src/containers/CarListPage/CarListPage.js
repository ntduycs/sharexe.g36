import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as uiActions from '../../actions/ui.action';
import * as modalTypes from '../../constants/modalTypes';

import Modal from 'react-awesome-modal';




class CarListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }


  render() {
    return (
      <section className="dashboard-area">
        <div className="dashboard_contents">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="dashboard_title_area clearfix">
                  <div className="dashboard__title dashboard__title pull-left">
                    <h3>Manage Vehicles</h3>
                  </div>
                  <div className="pull-right">
                    <span><b>4</b> Vehicles</span>
                    <button type="button" className="btn btn--round print_btn" onClick={() => this.openModal()}>
                      <span className="lnr lnr-file-add" />Add New</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="product product--card">
                  <div className="product__thumbnail">
                    <img src="images/p1.jpg" alt="Product Image" />
                    <div className="prod_btn">
                   
                      <a onClick={()=>this.openModal()} className="transparent btn--sm btn--round">Edit</a>
                      
                      <a onClick={()=>this.openModal()} className="transparent btn--sm btn--round">Delete</a>
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
              <div className="col-lg-4 col-md-6">
                <div className="product product--card">
                  <div className="product__thumbnail">
                    <img src="images/p2.jpg" alt="Product Image" />
                    <div className="prod_btn">
                    <a onClick={()=>this.openModal()} className="transparent btn--sm btn--round">Edit</a>
                      
                      <a onClick={()=>this.openModal()} className="transparent btn--sm btn--round">Delete</a>
                    </div>
                  </div>
                  <div className="product-desc">
                    <a href="#" className="product_title">
                      <h4>BMW M850i xDrive</h4>
                    </a>
                    <ul className="titlebtm">
                      <li>
                        <img className="auth-img" src="images/auth2.jpg" alt="author image" />
                        <p>
                          <a href="#">BMW</a>
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
                      <span>Trips: <b>8</b></span>
                      <p>
                        <span className="lnr lnr-heart" /> 48</p>
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
              <div className="col-lg-4 col-md-6">
                <div className="product product--card">
                  <div className="product__thumbnail">
                    <img src="images/p3.jpg" alt="Product Image" />
                    <div className="prod_btn">
                    <a onClick={()=>this.openModal()} className="transparent btn--sm btn--round">Edit</a>
                      
                      <a onClick={()=>this.openModal()} className="transparent btn--sm btn--round">Delete</a>
                    </div>
                  </div>
                  <div className="product-desc">
                    <a href="#" className="product_title">
                      <h4>Mercedes-Maybach S600</h4>
                    </a>
                    <ul className="titlebtm">
                      <li>
                        <img className="auth-img" src="images/auth3.jpg" alt="author image" />
                        <p>
                          <a href="#">Mercedes-Benz</a>
                        </p>
                      </li>
                      <li className="product_cat">
                        <a href="#">
                          <span className="lnr lnr-user" />Seats: 4</a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-purchase">
                    <div className="price_love">
                      <span>Trips: <b>7</b></span>
                      <p>
                        <span className="lnr lnr-heart" /> 24</p>
                    </div>
                    <div className="rating product--rating ml-auto">
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
            </div>
            <div className="row">
              <div className="col-md-12">
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
              </div>
            </div>
          </div>
        </div>

        <Modal visible={this.state.visible}
          onClickAway={() => this.closeModal()}>
          <div id="editModal" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              {/* start edit form */}
              <form action method="post" encType="multipart/form-data">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4 className="modal-title">Update vehicle information</h4>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="car_model">Vehicle Model</label>
                      <input id="car_model" type="text" className="text_field" placeholder="BMW X4 M40i" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="car_capacity">Capacity</label>
                      <input id="car_capacity" type="number" className="text_field" placeholder={4} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="car_trip_made">Trip Made</label>
                      <input id="car_trip_made" type="text" className="text_field" placeholder={10} readOnly style={{ cursor: 'not-allowed' }} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="car_purchased_day">Purchased Date</label>
                      <input id="car_purchased_day" type="date" defaultValue="2017-03-31" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="car_images">Images</label>
                      <div className="input-group">
                        <span className="input-group-btn">
                          <span className="btn btn-default btn-file">
                            Browse <input type="file" id="files" name="files[]" multiple />
                          </span>
                        </span>
                        <input className="num-imgs-chosen" type="text" readOnly />
                      </div>
                      <div className="review-img-area" />
                    </div>
                  </div>
                  <div className="modal-footer" style={{ justifyContent: 'center' }}>
                    <button type="submit" className="btn btn-default" data-dismiss="modal" onClick={()=>this.closeModal()}>Confirm</button>
                    <button type="button" className="btn btn-default btn-secondary" data-dismiss="modal" onClick={()=>this.closeModal()}>Cancel</button>
                  </div>
                </div>
              </form>
              {/* end edit form */}
            </div>
          </div>
        </Modal>
      </section>


    );
  }
}



export default CarListPage;
