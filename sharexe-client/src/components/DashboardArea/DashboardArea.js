import React from 'react';

const DashBoardArea = (props) => (
        <section className="dashboard-area">
        <div className="dashboard_menu_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="dashboard_menu">
                            <li>
                                <a href="dashboard.html">
                                    <span className="lnr lnr-home"></span>Dashboard</a>
                            </li>
                            <li>
                                <a href="dashboard-setting.html">
                                    <span className="lnr lnr-bus"></span>Vehicles</a>
                            </li>
                            <li className="active">
                                <a href="dashboard-purchase.html">
                                    <span className="lnr lnr-history"></span>History</a>
                            </li>
                            <li>
                                <a href="dashboard-add-credit.html">
                                    <span className="lnr lnr-license"></span>Add Credits</a>
                            </li>
                            <li>
                                <a href="dashboard-add-credit.html">
                                    <span className="lnr lnr-gift"></span>Promotion</a>
                            </li>

                        </ul>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </section>
)

export default DashBoardArea;