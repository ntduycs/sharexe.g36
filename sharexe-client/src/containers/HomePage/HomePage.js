import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomePage.css';

import HomeBackground from './HomeBackground';
import HomeMission from './HomeMission';
import HomeTimeLine from './HomeTimeLine';
import HomeCounter from './HomeCounter';
import HomeBestUser from './HomeBestUser';
import HomeGallery from './HomeGallery';
import HomeBeforeFooter from './HomeBeforeFooter';
class HomePage extends Component {

  render() {
    return (
      <div>
        {/* <button onClick={this.props.openLoginModal}>Click me</button> */}
        <HomeBackground/>
        <HomeMission/>
        <HomeTimeLine/>
        <HomeCounter/>
        <HomeBestUser/>
        <HomeGallery/>
        <HomeBeforeFooter/>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(HomePage);
