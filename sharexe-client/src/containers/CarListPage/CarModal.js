import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class CarModal extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <Modal visible="true"
          onClickAway={this.props.triggerModal}>
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
                    <button type="submit" className="btn btn-default" data-dismiss="modal" onClick={this.props.triggerModal}>Confirm</button>
                    <button type="button" className="btn btn-default btn-secondary" data-dismiss="modal" onClick={this.props.triggerModal}>Cancel</button>
                  </div>
                </div>
              </form>
              {/* end edit form */}
            </div>
          </div>
        </Modal>
    )
  }
}

export default CarModal;
