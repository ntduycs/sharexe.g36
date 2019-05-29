import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import './TripListPage.css';

import {deleteTrip} from "../../utils/api.connector";

class TripDeleteModal extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();

        deleteTrip(this.props.tripId)
            .then(response => {
                alert(this.props.tripId);

                this.props.loadTripList(0);
                this.props.trigglerDelete();
            }).catch(error => {
            alert(error);
        })

    }


    render() {
        const title = "Delete";
        return (
            <Modal visible="true" onClickAway={this.props.triggerModal} >

                <div className="dashboard_contents">
                    <div className="container">
                        <form action="#" className="setting_form" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="information_module">
                                        <a className="toggle_title">
                                            <h4>{title}</h4>
                                        </a>
                                        <div className="information__set toggle_module">
                                            <h6>Really niggle ????</h6>
                                            {/* end /.information_wrapper */}
                                        </div>
                                        {/* end /.information__set */}
                                    </div>
                                    {/* end /.information_module */}

                                    {/* end /.information_module */}
                                    <div className="dashboard_setting_btn">
                                        <button type="submit" className="btn btn--round btn--md">Confirm</button>
                                    </div>
                                </div>
                                {/* end /.col-md-12 */}
                            </div>
                            {/* end /.row */}
                        </form>
                        {/* end /form */}
                    </div>
                    {/* end /.container */}
                </div>

            </Modal>

        )
    }
}

export default TripDeleteModal;
