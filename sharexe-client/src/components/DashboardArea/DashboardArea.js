import React from 'react';
import {Link} from 'react-router-dom';

const DashBoardArea = (props) => (
        <section className="dashboard-area">
        <div className="dashboard_menu_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="dashboard_menu">
                            <li>
                                <Link to="/"><span className="lnr lnr-home"></span>Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/car-list"><span className="lnr lnr-bus"></span>Vehicles</Link>        
                            </li>
                            <li className="active">
                                <Link to="/history"><span className="lnr lnr-history"></span>History</Link>                                   
                            </li>
                            <li>
                                <Link to="/"><span className="lnr lnr-license"></span>Add Credits</Link>                                
                            </li>
                            <li>
                                <Link to="/"><span className="lnr lnr-gift"></span>Promotion</Link>                               
                            </li>

                        </ul>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </section>
)

export default DashBoardArea;