import React, { Component } from 'react'

export default class HomeTimeLine extends Component {
  render() {
    return (
      <section className="timeline_area section--padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h1>MartPlace Milestone
            <span className="highlighted"> Achievements</span>
                </h1>
                <p>Laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats. Lid
            est laborum dolo rumes fugats untras.</p>
              </div>
            </div>
            {/* end /.col-md-12 */}
          </div>
          {/* end /.row */}
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                <li className="happening">
                  <div className="happening--period">
                    <p>February 2009</p>
                  </div>
                  <div className="happening--detail">
                    <h4 className="title">MartPlace was Launched</h4>
                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra justo ut scelerisque the mattis,
                leo quam aliquet diam congue is laoreet.</p>
                  </div>
                </li>
                <li className="happening">
                  <div className="happening--period">
                    <p>February 2010</p>
                  </div>
                  <div className="happening--detail">
                    <h4 className="title">Launched Premium Version</h4>
                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra justo ut scelerisque the mattis,
                leo quam aliquet diam congue is laoreet.</p>
                  </div>
                </li>
                <li className="happening">
                  <div className="happening--period">
                    <p>July 2012</p>
                  </div>
                  <div className="happening--detail">
                    <h4 className="title">3 Million Downloads Reached</h4>
                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra justo ut scelerisque the mattis,
                leo quam aliquet diam congue is laoreet.</p>
                  </div>
                </li>
                <li className="happening">
                  <div className="happening--period">
                    <p>November 2015</p>
                  </div>
                  <div className="happening--detail">
                    <h4 className="title">50,000+ Community Members</h4>
                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra justo ut scelerisque the mattis,
                leo quam aliquet diam congue is laoreet.</p>
                  </div>
                </li>
                <li className="happening">
                  <div className="happening--period">
                    <p>August 2016</p>
                  </div>
                  <div className="happening--detail">
                    <h4 className="title">Added Payoneer as a Payment Method</h4>
                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra justo ut scelerisque the mattis,
                leo quam aliquet diam congue is laoreet.</p>
                  </div>
                </li>
              </ul>
              {/* end /.timeline */}
            </div>
            {/* end /.col-md-12 */}
          </div>
          {/* end /.row */}
        </div>
        {/* end /.container */}
      </section>

    )
  }
}
