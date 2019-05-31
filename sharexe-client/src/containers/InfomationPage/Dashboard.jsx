import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div class="row">
                 <div class="col-md-4 col-sm-4">
                     <div class="author-info mcolorbg4">
                         <p>Driver</p>
                         <h3>123</h3>
                     </div>
                 </div>
         

                 <div class="col-md-4 col-sm-4">
                     <div class="author-info pcolorbg">
                         <p>Passenger</p>
                         <h3>14</h3>
                     </div>
                 </div>
         

                 <div class="col-md-4 col-sm-4">
                     <div class="author-info scolorbg">
                         <p>Average Rating</p>
                         <div class="rating">
                             <ul>
                                 <li>
                                     <span class="fa fa-star"></span>
                                 </li>
                                 <li>
                                     <span class="fa fa-star"></span>
                                 </li>
                                 <li>
                                     <span class="fa fa-star"></span>
                                 </li>
                                 <li>
                                     <span class="fa fa-star"></span>
                                 </li>
                                 <li>
                                     <span class="fa fa-star-half-alt"></span>
                                 </li>
                             </ul>
                             <span class="rating__count">(69)</span>
                         </div>
                     </div>
                 </div>
            </div>
        );
    }
}

export default Dashboard;