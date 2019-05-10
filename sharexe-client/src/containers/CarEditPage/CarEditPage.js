import React, { Component } from 'react';

class CarEditPage extends Component {
    render() {
        return (
          <section class="single-product-desc">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="item-preview">
                        <div class="item__preview-slider">
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                            <div class="prev-slide">
                                <img src="images/itprv.jpg"
                                    alt="Keep calm this isn't the end of the world, the preview is just ."/>
                            </div>
                        </div>
                         

                        <div class="item__preview-thumb">
                            <div class="prev-thumb">
                                <div class="thumb-slider">
                                    <div class="item-thumb">
                                        <img src="images/thumb1.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                    <div class="item-thumb">
                                        <img src="images/thumb2.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                    <div class="item-thumb">
                                        <img src="images/thumb3.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                    <div class="item-thumb">
                                        <img src="images/thumb4.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                    <div class="item-thumb">
                                        <img src="images/thumb5.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                    <div class="item-thumb">
                                        <img src="images/thumb1.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                    <div class="item-thumb">
                                        <img src="images/thumb2.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                    <div class="item-thumb">
                                        <img src="images/thumb3.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                    <div class="item-thumb">
                                        <img src="images/thumb4.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                    <div class="item-thumb">
                                        <img src="images/thumb5.jpg" alt="This is the thumbnail of the item"/>
                                    </div>
                                </div>
                                 

                                <div class="prev-nav thumb-nav">
                                    <span class="lnr nav-left lnr-arrow-left"></span>
                                    <span class="lnr nav-right lnr-arrow-right"></span>
                                </div>
                                 
                            </div>

                            
                             
                        </div>
                         


                    </div>
                     

                    
                </div>
                 

                <div class="col-lg-4">
                    <aside class="sidebar sidebar--single-product">


                        <div class="sidebar-card card--product-infos">
                            <div class="card-title">
                                <h4>Vehicle information</h4>
                            </div>

                            <ul class="infos">
                                <li>
                                    <p class="data-label">Vehicle Model</p>
                                    <p class="info">BMW X4 M40i</p>
                                </li>
                                <li>
                                    <p class="data-label">Capacity</p>
                                    <p class="info">4</p>
                                </li>

                                <li>
                                    <p class="data-label">Trip Made</p>
                                    <p class="info">
                                        10
                                    </p>
                                </li>
                                <li>
                                        <p class="data-label">Purchased Date</p>
                                        <p class="info">
                                            10/10/2010
                                        </p>
                                    </li>
                            </ul>

                            <div class="author-card">
                                <div class="author-infos">
                                    <div class="author-btn">
                                        <button href="#" class="btn btn--sm btn--round btn-success">History</button>
                                        <button href="#" class="btn btn--sm btn--round btn-warning" data-toggle="modal" data-target="#editModal">Edit</button>
                                        <button href="#" class="btn btn--sm btn--round btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                                    </div>
                                     
                                </div>

                            </div>

                            

                        </div>
                         

                        


                    </aside>
                     

                    
                </div>
                 

            </div>
             
        </div>
         
    </section>
        );
    }
}

export default CarEditPage;