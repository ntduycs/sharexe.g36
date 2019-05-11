import React, { Component } from 'react';

import CarPage from './CarPage';
import CarModal from './CarModal';

class CarListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
    this.triggerVisible = this.triggerVisible.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  triggerVisible() {
    this.setState({visible: !this.state.visible});
  }


  triggerModal () {
    return this.state.visible ? <CarModal triggerModal={this.triggerVisible}/> : null;
  }


  render() {

    return (
      <section className="dashboard-area">
        <div className="dashboard_contents">
          <div className="container">
          
            {/** Top area , which contains Add New button */}
            <div className="row">
              <div className="col-md-12">
                <div className="dashboard_title_area clearfix">
                  <div className="dashboard__title dashboard__title pull-left">
                    <h3>Manage Vehicles</h3>
                  </div>
                  <div className="pull-right">
                    <span><b>4</b> Vehicles</span>
                    <button type="button" className="btn btn--round print_btn" onClick={() => this.openModal()}>
                      <span className="lnr lnr-file-add" />Add New</button>
                  </div>
                </div>
              </div>
            </div>
            {/** End Top area */}

            {/** Car info card */}
            <div className="row">
              <CarPage/>
              <CarPage/>
              <CarPage/>
            </div>
            {/** End Car info card */}

            {/** Pagination area */}
            <div className="row">
              <div className="col-md-12">
                <div className="pagination-area">
                  <nav className="navigation pagination" role="navigation">
                    <div className="nav-links">
                      <a className="prev page-numbers" href="#">
                        <span className="lnr lnr-arrow-left" />
                      </a>
                      <a className="page-numbers current" href="#">1</a>
                      <a className="page-numbers" href="#">2</a>
                      <a className="page-numbers" href="#">3</a>
                      <a className="next page-numbers" href="#">
                        <span className="lnr lnr-arrow-right" />
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            {/** End Pagination area */}

          </div>
        </div>

        
        {this.triggerModal()}
      </section>


    );
  }
}



export default CarListPage;
