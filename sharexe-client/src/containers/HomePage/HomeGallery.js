import React, { Component } from 'react';

import './HomePage.css';

export default class HomeGallery extends Component {
  render() {
    return (
      <section className="gallery_area">
        <div className="gallery_contents_wrapper bgimage">
          <div className="bg_image_holder gallery-img">
            <img src="images/galbg.jpg" alt="" />
          </div>
          <div className="container content_above">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="gallery_contents">
                  <h3>Work Together</h3>
                  <p>We love what we do and come to work every day hungry to change the world of work!</p>
                </div>
              </div>
            </div>
            {/* start /.row */}
          </div>
          {/* start /.container */}
        </div>
        {/* start /.gallery_contents_wrapper */}
      </section>

    )
  }
}
