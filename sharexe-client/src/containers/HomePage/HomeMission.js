import React, { Component } from 'react';

import './HomePage.css';

class HomeMission extends Component {

  render() {
    return (
      <section className="about_mission">
        <div className="content_block1">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <div className="content_area">
                  <h1 className="content_area--title">About
              <span className="highlight">MartPlace</span>
                  </h1>
                  <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra justo ut sceler isque the mattis,
                    leo quam aliquet congue this there placerat mi id nisi they interdum mollis. Praesent pharetra
                    justo ut sceleris que the mattis, leo quam aliquet. Nunc placer atmi id nisi interdum mollis
                    quam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt sanctus est Lorem ipsum dolor sit amet consetetur sadipscing.</p>
                </div>
              </div>
              {/* end /.col-md-5 */}
            </div>
            {/* end /.row */}
          </div>
          {/* end /.container */}
          <div className="content_image bgimage">
            <div className="bg_image_holder mission-img" ref="bg_image_1">
              <img src="images/duy2.jpg" alt />
            </div>
          </div>
        </div>
        {/* end /.about */}
        <div className="content_block2">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6  offset-md-6 offset-lg-7">
                <div className="content_area2">
                  <h1 className="content_area2--title">MartPlace
              <span className="highlight">Mission</span>
                  </h1>
                  <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra justo ut sceler isque the mattis,
                    leo quam aliquet congue this there placerat mi id nisi they interdum mollis. Praesent pharetra
                    justo ut sceleris que the mattis, leo quam aliquet. Nunc placer atmi id nisi interdum mollis
                    quam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt sanctus est Lorem ipsum dolor sit amet consetetur sadipscing.</p>
                </div>
              </div>
              {/* end /.col-md-5 */}
            </div>
            {/* end /.row */}
          </div>
          {/* end /.container */}
          <div className="content_image2 bgimage">
            <div className="bg_image_holder mission-img" ref="bg_image_2">
              <img src="images/duy2.jpg" alt />
            </div>
          </div>
        </div>
        {/* end /.mission*/}
      </section>

    )
  }
}


export default HomeMission;