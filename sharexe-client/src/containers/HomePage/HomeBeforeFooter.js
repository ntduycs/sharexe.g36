import React, { Component } from 'react'

export default class HomeBeforeFooter extends Component {
  render() {
    return (
      <section className="call-to-action bgimage">
        <div className="bg_image_holder gallery-img">
          <img src="images/calltobg.jpg" alt />
        </div>
        <div className="container content_above">
          <div className="row">
            <div className="col-md-12">
              <div className="call-to-wrap">
                <h1 className="text--white">Ready to Join Our Marketplace!</h1>
                <h4 className="text--white">Over 25,000 designers and developers trust the MartPlace.</h4>
                <a href="#" className="btn btn--lg btn--round btn--white callto-action-btn">Join Us Today</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}
