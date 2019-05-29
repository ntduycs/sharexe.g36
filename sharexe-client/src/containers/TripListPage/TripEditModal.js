import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import {withRouter} from 'react-router';

import {FilePond, registerPlugin} from 'react-filepond';
import ImagePreview from 'filepond-plugin-image-preview';
import FilePondValidator from 'filepond-plugin-file-validate-type';
import ImageEXIFOrientation from 'filepond-plugin-image-exif-orientation';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import './TripListPage.css';

import {addTrip, editTrip} from '../../utils/api.connector';
import {notification} from "antd";

import $ from 'jquery';

registerPlugin(ImagePreview, ImageEXIFOrientation, FilePondValidator);

const openNotificationWithIcon = type => {
    notification[type]({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

class TripEditModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            from: {text: ''},
            to: {text: ''},
            beginAt: {text: ''},
            endAt: {text: ''},
            price: {text: ''},
            capacity: {seat: 0},
            description: {text: ''},
            restrictions: [{text: ''}]
        };

        this.handleConfirm = this.handleConfirm.bind(this);

        this.handlefromChange = this.handlefromChange.bind(this);
        this.handletoChange = this.handletoChange.bind(this);
        this.handlebeginAtChange = this.handlebeginAtChange.bind(this);
        this.handleendAtChange = this.handleendAtChange.bind(this)
        this.handledescriptionChange = this.handledescriptionChange.bind(this);
        this.handlerestrictionsChange = this.handlerestrictionsChange.bind(this);
        this.handlepriceChange = this.handlepriceChange.bind(this);
        this.handlecapacityChange = this.handlecapacityChange.bind(this);

        this.isFormInvalid = this.isFormInvalid.bind(this);

    }

    handleConfirm (event) {

        event.preventDefault();

        const tripRequest = {
           from: this.state.from.text,
            to: this.state.to.text,
            beginAt: this.state.beginAt.text,
            endAt: this.state.endAt.text,
            description: this.state.description.text,
            restrictions: [this.state.restrictions.text],
            price: this.state.price.text,
            capacity: this.state.capacity.seat
        };

        if (this.props.tripInfo === undefined) {
            addTrip(tripRequest)
                .then(response => {
                    alert(response.id);
                    tripRequest.id = response.id;
                    this.props.addNewTripToState();
                    this.props.toggleAddModal();
                }).catch(error => {
                alert(error);
            })
        } else {
            editTrip(tripRequest, this.props.tripInfo.id)
                .then(response => {
                    this.props.updateState(tripRequest);
                    this.props.triggerModal();
                }).catch(error => {
                alert(error);
            })
        }


    }

    validateCapacity = (capacity) => {
        if (capacity < 2) {
            return {
                validateStatus: 'error',
                errorMsg: 'Capacity must be equal or greater than 2'
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null
            }
        }
    };

    handlefromChange(event) {
        const value = event.target.value;
        this.setState({
            from: {
                text: value
            }
        });
    }

    handletoChange(event) {
        const value = event.target.value;
        this.setState({
            to: {
                text: value
            }
        });
    }

    handlebeginAtChange(event) {
        let value = event.target.value;
        console.log(value);
        this.setState({
            beginAt: {
                text: value
            }
        })
    }
    handleendAtChange(event) {
        const value = event.target.value;
        this.setState({
            endAt: {
                text: value
            }
        });
    }



    handlecapacityChange(event) {
        const value = event.target.value;
        this.setState({
            capacity: {
                seat: parseInt(value, 10), ...this.validateCapacity(value)
            }
        })
    }

    handlepriceChange(event) {
        const value = event.target.value;
        this.setState({
            price: {
                text: value
            }
        });
    }


    handledescriptionChange(event) {
        const value = event.target.value;
        this.setState({
            description: {
                text: value
            }
        });
    }




    handlerestrictionsChange(event) {
        const value = event.target.value;
        this.setState({
            restrictions: {
                text: value
            }
        });
    }
    isFormInvalid() {
        if (this.state.capacity.validateStatus !== 'success') {
            return false;
        }
    }

    componentDidMount() {
        if (this.props.tripInfo !== undefined) {
            this.setState({
                from: {text: this.props.tripInfo.from},
                to: {text: this.props.tripInfo.to},
                beginAt: {text: this.props.tripInfo.beginAt},
                endAt: {text: this.props.tripInfo.endAt},
                price: {text: this.props.tripInfo.price},
                description: {text: this.props.tripInfo.description},
                restrictions: {text: this.props.tripInfo.restrictions},
                capacity: {seat: this.props.tripInfo.capacity}
            })
        }
    }


    render() {
        const title = this.props.tripInfo ? "Edit" : "Add";
        return (
            <Modal visible="true" onClickAway={this.props.toggleAddModal}>

                <div className="dashboard_contents">
                    <div className="container">
                        <form action="#" className="setting_form" onSubmit={this.handleConfirm}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="information_module">
                                        <a className="toggle_title">
                                            <h4>{title}</h4>
                                        </a>
                                        <div className="information__set toggle_module">
                                            <div className="information_wrapper form--fields">
                                                <div className="form-group">
                                                    <div className="form-row">
                                                        <div className="col">
                                                            <label htmlFor="beginAt">beginAt</label>
                                                            <input type="date" id="beginAt" className="text_field"
                                                                   placeholder="time_start" value={this.state.beginAt.text}
                                                                   onChange={this.handlebeginAtChange}/>
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="endAt">endAt</label>
                                                            <input type="date" id="endAt" className="text_field"
                                                                   placeholder="time_end" value={this.state.endAt.text}
                                                                   onChange={this.handleendAtChange}/>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                    <div className="form-row">
                                                        <div className="col">
                                                            <label htmlFor="from">From</label>
                                                            <input type="text" id="from" className="text_field"
                                                                   placeholder="From"
                                                                   value={this.state.from.text}
                                                                   onChange={this.handlefromChange}/>
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="to">To</label>
                                                            <input type="text" id="to" className="text_field"
                                                                   placeholder="To"
                                                                   value={this.state.to.text}
                                                                   onChange={this.handletoChange}/>
                                                        </div>
                                                    </div>

                                                </div>



                                                <div className="form-group">
                                                    <div className="form-row">
                                                        <div className="col">
                                                            <label htmlFor="capacity">Capacity</label>
                                                            <input type="number" id="capacity" className="text_field"
                                                                   placeholder="capacity"
                                                                   value={this.state.capacity.seat}
                                                                   onChange={this.handlecapacityChange}/>
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="price">Price</label>
                                                            <input type="text" id="price" className="text_field"
                                                                   placeholder="Price"
                                                                   value={this.state.price.text}
                                                                   onChange={this.handlepriceChange}/>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="form-group">


                                                            <label htmlFor="description">description</label>
                                                            <input type="text" id="description" className="text_field"
                                                                   placeholder="description"
                                                                   value={this.state.description.text}
                                                                   onChange={this.handledescriptionChange}/>

                                                </div>


                                            <div className="form-group">


                                            <label htmlFor="restrictions">restrictions</label>
                                            <input type="text" id="restrictions" className="text_field"
                                                   placeholder="restrictions"
                                                   value={this.state.restrictions.text}
                                                   onChange={this.handlerestrictionsChange}/>

                                        </div>

                                    </div>
                                            {/* end /.information_wrapper */}
                                        </div>
                                        {/* end /.information__set */}
                                    </div>
                                    {/* end /.information_module */}

                                    {/* end /.information_module */}
                                    <div className="dashboard_setting_btn">
                                        <button type="submit" className="btn btn--round btn--md" onClick={() => openNotificationWithIcon('success')}>Confirm</button>
                                        <button type="reset" className="btn btn--round btn--md" onClick={this.props.toggleAddModal}>Cancel</button>
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

export default withRouter(TripEditModal);
