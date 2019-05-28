import React, {Component} from 'react';

import CarPage from './CarPage';
import CarEditModal from './CarEditModal';

import {getAllVehicles} from '../../utils/api.connector';
import {VEHICLE_LIST_SIZE} from '../../constants/common';

import $ from 'jquery';


class CarListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openAddModal: false,
            vehicles: [],
            page: 0,
            size: VEHICLE_LIST_SIZE,
            totalElements: 0,
            totalPages: 0,
            isLast: true,
            isLoading: false,
        };

        this.loadVehicleList = this.loadVehicleList.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);

        this.triggerVisible = this.triggerVisible.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);

        this.addNewVehicleToState = this.addNewVehicleToState.bind(this);
    }

    addNewVehicleToState() {
        // this.setState((prevState) => ({
        //     vehicles: [newVehicle, ...prevState.vehicles],
        //     totalElements: prevState.totalElements + 1
        // }))
        this.loadVehicleList(0);
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
                this.setState({
                    vehicles: response.content,
                    page: response.page,
                    size: response.size,
                    totalElements: response.totalElements,
                    totalPages: response.totalPages,
                    isLast: response.isLast,
                    isLoading: false
                })
            })
            .catch(error => {
                alert("From CarListPage component:" + error);
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
                size: VEHICLE_LIST_SIZE,
                totalElements: 0,
                totalPages: 0,
                isLast: true,
                isLoading: false
            });
            this.loadVehicleList();
        }
    }

    handleLoadMore(event) {
        this.loadVehicleList($(event.target).text() - 1);
        $('.page-numbers').removeClass('current');
        $(event.target).addClass("current");
    }


    openModal() {
        this.setState({
            openAddModal: true
        });
    }

    triggerVisible() {
        this.setState({openAddModal: !this.state.openAddModal});
    }


    toggleAddModal() {
        return this.state.openAddModal ? <CarEditModal toggleAddModal={this.triggerVisible}
                                                       addNewVehicleToState={this.addNewVehicleToState}/> : null;
    }


    render() {
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
                                        <button type="button" className="btn btn--round print_btn"
                                                onClick={() => this.openModal()}>
                                            <span className="lnr lnr-file-add"/>Add New
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/** End Top area */}

                        {/** Car info card */}
                        <div className="row">
                            {this.state.vehicles.map((vehicle, index) => {
                                    return <CarPage
                                        loadVehicleList={this.loadVehicleList}
                                        key={vehicle.id}
                                        brand={vehicle.brand}
                                        model={vehicle.model}
                                        capacity={vehicle.capacity}
                                        id={vehicle.id}
                                    />
                                }
                            )
                            }
                            {
                                !this.state.isLoading && this.state.vehicles.length === 0 ? (
                                    <div className="no-vehicles-found"><span>No vehicles found.</span></div>
                                ) : null
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
                                            <a className="page-numbers current" onClick={this.handleLoadMore}>1</a>
                                            <a className="page-numbers" onClick={this.handleLoadMore}>2</a>
                                            <a className="page-numbers" onClick={this.handleLoadMore}>3</a>
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


                {this.toggleAddModal()}
            </section>


        );
    }
}


export default CarListPage;
