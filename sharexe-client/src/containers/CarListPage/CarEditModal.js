import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import { FilePond, registerPlugin } from 'react-filepond';
import ImagePreview from 'filepond-plugin-image-preview';
import FilePondValidator from 'filepond-plugin-file-validate-type';
import ImageEXIFOrientation from 'filepond-plugin-image-exif-orientation';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import './CarListPage.css';

import {addVehicle, editVehicle} from '../../utils/api.connector';

import {notification} from 'antd';

registerPlugin(ImagePreview, ImageEXIFOrientation, FilePondValidator);

class CarEditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: {text: ''},
      model: {text: ''},
      licensePlate: {text: ''},
      capacity: {seat: 2},
      // images: [{imageUrl:''}]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleLicensePlateChange = this.handleLicensePlateChange.bind(this);
    this.handleCapacityChange = this.handleCapacityChange.bind(this);
    this.isFormInvalid = this.isFormInvalid.bind(this);
    
  }

  handleSubmit(event) {
    event.preventDefault();

    const vehicleRequest = {
      brand: this.state.brand.text,
      model: this.state.model.text,
      licensePlate: this.state.licensePlate.text,
      capacity: this.state.capacity.seat
    };

    if (this.props.vehicleInfo === undefined) {
      addVehicle(vehicleRequest)
          .then(response => {
            this.props.history.push("/");
          }).catch(error => {
        notification.error({
          message: "ShareXe webapp",
          description: error.message || "Sorry! Something went wrong. Please try again!"
        });
      })
    } else {
      editVehicle(vehicleRequest, this.props.vehicleInfo.id)
          .then(response => {
            this.props.history.push("/");
          }).catch(error => {
        notification.error({
          message: "ShareXe webapp",
          description: error.message || "Sorry! Something went wrong. Please try again!"
        });
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

  handleBrandChange(event) {
    const value = event.target.value;
    this.setState({
      brand: {
        text: value
      }
    });
  }

  handleModelChange(event) {
    const value = event.target.value;
    this.setState({
      model: {
        text: value
      }
    });
  }

  handleLicensePlateChange(event) {
    const value = event.target.value;
    this.setState({
      licensePlate: {
        text: value
      }
    })
  }

  handleCapacityChange(event) {
    const value = event.target.value;
    this.setState({
      capacity: {
        seat: parseInt(value,10), ...this.validateCapacity(value)
      }
    })
  }

  isFormInvalid() {
    if (this.state.capacity.validateStatus !== 'success') {
      return false;
    }
  }

  componentDidMount() {
    if (this.props.vehicleInfo !== undefined) {
      this.setState({
        brand: {text: this.props.vehicleInfo.brand},
        model: {text: this.props.vehicleInfo.model},
        licensePlate: {text: this.props.vehicleInfo.licensePlate},
        capacity: {seat: this.props.vehicleInfo.capacity}
      })
    }
  }


  render() {
    const title = this.props.vehicleInfo ? "Edit" : "Add";
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
                      <div className="information_wrapper form--fields">
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col">
                              <label htmlFor="brand">Brand</label>
                              <input type="text" id="brand" className="text_field" placeholder="Brand" value={this.state.brand.text} onChange={this.handleBrandChange}/>
                            </div>
                            <div className="col">
                              <label htmlFor="model">Model</label>
                              <input type="text" id="model" className="text_field" placeholder="Model" value={this.state.model.text} onChange={this.handleModelChange}/>
                            </div>
                          </div>

                        </div>

                        <div className="form-group">
                          <div className="form-row">
                            <div className="col">
                              <label htmlFor="licensePlate">Lincense Plate</label>
                              <input type="text" id="licensePlate" className="text_field" placeholder="Display Name" value={this.state.licensePlate.text} onChange={this.handleLicensePlateChange} />
                            </div>
                            <div className="col">
                              <label htmlFor="capacity">Capacity</label>
                              <input type="number" id="capacity" className="text_field" placeholder="Capacity" value={this.state.capacity.seat} onChange={this.handleCapacityChange} />
                            </div>
                          </div>

                        </div>

                        <div className="form-group">
                          <label htmlFor="vimages">Images</label>
                          <FilePond id="vimages" labelIdle="Select your vehicle images"
                            imagePreviewHeight="100px"
                            allowMultiple={true} acceptedFileTypes={['image/*']}
                            onupdatefiles={(images) => { this.setState({ images: images.map(image => `hello/` + image.file.name) }); }}
                          />

                        </div>
                      </div>
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

export default CarEditModal;
