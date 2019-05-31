import React, { Component } from 'react';

import HomeBestUserSingle from './HomeBestUserSingle';

export default class HomeBestUser extends Component {
  render() {
    return (
      <section className="team_area section--padding">
        <div className="container">
          {/* start row */}
          <div className="row">
            {/* start col-md-12 */}
            <div className="col-md-12">
              <div className="section-title">
                <h1>The Team at <span className="highlighted">MartPlace</span>
                </h1>
                <p>Laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats. Lid
            est laborum dolo rumes fugats untras.</p>
              </div>
            </div>
            {/* end /.col-md-12 */}
          </div>
          {/* end /.row */}
          <div className="row">
            <HomeBestUserSingle/>
            <HomeBestUserSingle/>
            <HomeBestUserSingle/>
            <HomeBestUserSingle/>
          </div>
          {/* end /.row */}
        </div>
        {/* end /.container */}
      </section>

    )
  }
}
