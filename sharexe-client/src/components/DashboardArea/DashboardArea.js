import React from 'react';

const DashBoardArea = (props) => (
        <section class="dashboard-area">
        <div class="dashboard_menu_area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ul class="dashboard_menu">
                            <li>
                                <a href="dashboard.html">
                                    <span class="lnr lnr-home"></span>Dashboard</a>
                            </li>
                            <li>
                                <a href="dashboard-setting.html">
                                    <span class="lnr lnr-bus"></span>Vehicles</a>
                            </li>
                            <li class="active">
                                <a href="dashboard-purchase.html">
                                    <span class="lnr lnr-history"></span>History</a>
                            </li>
                            <li>
                                <a href="dashboard-add-credit.html">
                                    <span class="lnr lnr-license"></span>Add Credits</a>
                            </li>
                            <li>
                                <a href="dashboard-add-credit.html">
                                    <span class="lnr lnr-gift"></span>Promotion</a>
                            </li>

                        </ul>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </section>
)

export default DashBoardArea;