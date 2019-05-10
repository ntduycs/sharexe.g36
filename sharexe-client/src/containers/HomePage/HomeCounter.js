import React, { Component } from 'react'

export default class HomeCounter extends Component {
  render() {
    return (
      <section className="counter-up-area counter-up--area2">
        {/* start .container */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Today We are in Here</h2>
            </div>
          </div>
          {/* start .col-md-12 */}
          <div className="col-md-12">
            <div className="counter-up">
              <div className="counter mcolor2">
                <span className="lnr lnr-briefcase" />
                <span className="count">38,436</span>
                <p>items for sale</p>
              </div>
              <div className="counter mcolor3">
                <span className="lnr lnr-cart" />
                <span className="count">38,436</span>
                <p>total sales</p>
              </div>
              <div className="counter mcolor1">
                <span className="lnr lnr-smile" />
                <span className="count">38,436</span>
                <p>appy customers</p>
              </div>
              <div className="counter mcolor4">
                <span className="lnr lnr-users" />
                <span className="count">38,436</span>
                <p>members</p>
              </div>
            </div>
          </div>
          {/* end /.col-md-12 */}
        </div>
        {/* end /.container */}
      </section>

    )
  }
}
