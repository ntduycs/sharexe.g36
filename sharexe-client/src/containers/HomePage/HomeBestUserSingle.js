import React, { Component } from 'react'

export default class HomeBestUserSingle extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4">
        <div className="single_team_member">
          <figure>
            <img src="images/IMG_0242.JPG" alt="Team Member" />
            <figcaption>
              <div className="name_desig">
                <h4>Robert Jellybean</h4>
                <p>Application Developer</p>
              </div>
              {/* end /.name_desig */}
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* end /.social */}
            </figcaption>
            {/* end /.figcaption */}
          </figure>
          {/* end /.figure */}
        </div>
        {/* end /.single_team_member */}
      </div>
    )
  }
}
