import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class MainMenu extends Component {
  render() {
    return (
      <div className="mainmenu">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/** Search bar area */}
              <div className="navbar-header">

                <div className="mainmenu__search">
                  <form action="#">
                    <div className="searc-wrap">
                      <input type="text" placeholder="Search here ..." />
                      <button type="submit" className="search-wrap__btn">
                        <span className="lnr lnr-magnifier"></span>
                      </button>
                    </div>
                  </form>
                </div>

              </div>
              {/** End Search bar area */}

              {/** Menu area */}
              <nav className="navbar navbar-expand-md navbar-light mainmenu__menu">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="has_dropdown">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="has_dropdown">
                      <Link to="/find-trip">Find a ride</Link>
                    </li>
                    <li className="has_dropdown">
                      <Link to="/offer-trip">Offer a ride</Link>
                    </li>
                    <li className="has_dropdown">
                      <Link to="/information">Personal</Link>
                      <div className="dropdowns dropdown--menu">
                        <ul>
                          <li>
                            <Link to="/information">Profile</Link>
                          </li>
                          <li>
                            <Link to="/history">History</Link>
                          </li>
                          <li>
                            <Link to="/car-list">Vehicle</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has_dropdown">
                      <Link to="/about-us">about us</Link>
                    </li>
                    <li>
                      <Link to="/faq">faq</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/** End menu area */}
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
