import React, {Component} from 'react';

import CarPage from './CarPage';
import CarEditModal from './CarEditModal';

import {getAllVehicles} from '../../utils/api.connector';
import {VEHICLE_LIST_SIZE} from '../../constants/common';

class CarListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      vehicles: [],
      page: 0,
      size: 6,
      totalElements: 0,
      totalPages: 0,
      last: true,
      isLoading: false
    };

    this.loadVehicleList = this.loadVehicleList.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);

    this.triggerVisible = this.triggerVisible.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
  }

  loadVehicleList(page = 0, size = VEHICLE_LIST_SIZE) {
    let promise = getAllVehicles(page, size);

    if (!promise) {
      return;
    }

    this.setState({
      isLoading: true
    });

    promise
        .then(response => {
          const vehicles = this.state.vehicles.slice();

          this.setState({
            vehicles: vehicles.concat(response.content),
            page: response.page,
            size: response.size,
            totalElements: response.totalElements,
            totalPages: response.totalPages,
            last: response.isLast,
            isLoading: false
          })
        })
        .catch(error => {
          this.setState({
            isLoading: false
          })
        });
  }

  componentDidMount() {
    this.loadVehicleList();
  }

  componentDidUpdate(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      this.setState({
        vehicles: [],
        page: 0,
        size: 6,
        totalElements: 0,
        totalPages: 0,
        last: true,
        isLoading: false
      });
      this.loadVehicleList();
    }
  }

  handleLoadMore() {
    this.loadVehicleList(this.state.page + 1);
  }


  openModal() {
    this.setState({
      visible: true
    });
  }

  triggerVisible() {
    this.setState({visible: !this.state.visible});
  }


  triggerModal() {
    return this.state.visible ? <CarEditModal triggerModal={this.triggerVisible}/> : null;
  }


  render() {
    const vehicles = [];
    this.state.vehicles.forEach((vehicle, index) => {
      vehicles.push(
          <CarPage brand={vehicle.brand} model={vehicle.model} capacity={vehicle.capacity} id={vehicle.id}/>
      )
    });
    return (
        <section className="dashboard-area">
          <div className="dashboard_contents">
            <div className="container">

              {/** Top area , which contains Add New button */}
              <div className="row">
                <div className="col-md-12">
                  <div className="dashboard_title_area clearfix">
                    <div className="dashboard__title dashboard__title pull-left">
                      <h3>Manage Vehicles</h3>
                    </div>
                    <div className="pull-right">
                      <span><b>{this.state.totalElements}</b> Vehicles</span>
                      <button type="button" className="btn btn--round print_btn" onClick={() => this.openModal()}>
                        <span className="lnr lnr-file-add"/>Add New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/** End Top area */}

              {/** Car info card */}
              <div className="row">
                {vehicles}
                {
                  !this.state.isLoading && this.state.vehicles.length === 0 ? (
                      <div className="no-vehicles-found"><span>No vehicles found.</span></div>
                  ): null
                }

              </div>
              {/** End Car info card */}

              {/** Pagination area */}
              <div className="row">
                <div className="col-md-12">
                  <div className="pagination-area">
                    <nav className="navigation pagination" role="navigation">
                      <div className="nav-links">
                        <a className="prev page-numbers" href="#">
                          <span className="lnr lnr-arrow-left"/>
                        </a>
                        <a className="page-numbers current" href="#">1</a>
                        <a className="page-numbers" href="#">2</a>
                        <a className="page-numbers" href="#">3</a>
                        <a className="next page-numbers" href="#">
                          <span className="lnr lnr-arrow-right"/>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              {/** End Pagination area */}

            </div>
          </div>


          {this.triggerModal()}
        </section>


    );
  }
}


export default CarListPage;
