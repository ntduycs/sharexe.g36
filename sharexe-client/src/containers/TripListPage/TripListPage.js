import React, {Component} from 'react';

import TripPage from './TripPage';
import TripEditModal from './TripEditModal';

import {getAllTrips} from '../../utils/api.connector';
import {getAllCreateTrips} from '../../utils/api.connector';
import {TRIP_LIST_SIZE} from '../../constants/common';

import $ from 'jquery';


class TripListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openAddModal: false,
            trips: [],
            page: 0,
            size: TRIP_LIST_SIZE,
            totalElements: 0,
            totalPages: 0,
            isLast: true,
            isLoading: false,
        };

        this.loadTripList = this.loadTripList.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);

        this.triggerVisible = this.triggerVisible.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);

        this.addNewTripToState = this.addNewTripToState.bind(this);
    }

    addNewTripToState() {
        // this.setState((prevState) => ({

        //     totalElements: prevState.totalElements + 1
        // }))
        this.loadTripList(0);
    }

    loadTripList(page = 0, size = TRIP_LIST_SIZE) {
        let promise = getAllCreateTrips(page, size);

        if (!promise) {
            return;
        }

        this.setState({
            isLoading: true
        });


        promise
            .then(response => {
                this.setState({
                    trips: response.content,
                    page: response.page,
                    size: response.size,
                    totalElements: response.totalElements,
                    totalPages: response.totalPages,
                    isLast: response.isLast,
                    isLoading: false
                })
            })
            .catch(error => {
                alert("From TripListPage component:" + error);
                this.setState({
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.loadTripList();
    }

    componentDidUpdate(nextProps) {
        if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
            this.setState({
                trips: [],
                page: 0,
                size: TRIP_LIST_SIZE,
                totalElements: 0,
                totalPages: 0,
                isLast: true,
                isLoading: false
            });
            this.loadTripList();
        }
    }

    handleLoadMore(event) {
        this.loadTripList($(event.target).text() - 1);
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
        return this.state.openAddModal ? <TripEditModal toggleAddModal={this.triggerVisible}
                                                       addNewTripToState={this.addNewTripToState}/> : null;
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
                                        <h3>Manage Trips</h3>
                                    </div>
                                    <div className="pull-right">
                                        <span><b>{this.state.totalElements}</b> Trips</span>
                                        <button type="button" className="btn btn--round print_btn"
                                                onClick={() => this.openModal()}>
                                            <span className="lnr lnr-file-add"/>Add New
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/** End Top area */}

                        {/** Trip info card */}
                        <div className="row">
                            {this.state.trips.map((trip, index) => {
                                    return <TripPage
                                        loadTripList={this.loadTripList}
                                        key={trip.id}
                                        brand={trip.brand}
                                        model={trip.model}
                                        capacity={trip.capacity}
                                        id={trip.id}
                                    />
                                }
                            )
                            }
                            {
                                !this.state.isLoading && this.state.trips.length === 0 ? (
                                    <div className="no-trips-found"><span>No trips found.</span></div>
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


export default TripListPage;
