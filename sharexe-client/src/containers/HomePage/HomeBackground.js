import React, { Component } from 'react'

export default class HomeBackground extends Component {
  render() {
    return (
      <section className="about_hero bgimage">
        <div className="bg_image_holder gallery-img">
          <img src="images/about_hero.jpg" alt />
        </div>
        <div className="container content_above">
          <div className="row">
            <div className="col-md-12">
              <div className="about_hero_contents">
                <h1>Welcome to ShareXe!</h1>
                <p>Make a little money. <span>Save a little money.</span>
                </p>
                <div className="about_hero_btns">
                  <a href="#" className="play_btn" data-toggle="modal" data-target="#myModal">
                    <img src="images/play_btn.png" alt="PLay" />Take a trip</a>
                  <a href="#" className="btn btn--white btn--lg btn--round">Join us today</a>
                </div>
              </div>
              {/* end /.about_hero_contents */}
            </div>
            {/* end /.col-md-12 */}
          </div>
          {/* end /.row*/}
        </div>
        {/* end /.container */}
      </section>

    )
  }
}
