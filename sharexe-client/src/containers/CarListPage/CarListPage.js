import React, { Component } from 'react';

class CarListPage extends Component {
    render() {
        return (
                <section class="dashboard-area">

        <div class="dashboard_contents">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="dashboard_title_area clearfix">
                            <div class="dashboard__title dashboard__title pull-left">
                                <h3>Manage Vehicles</h3>
                            </div>

                            <div class="pull-right">
                                <span><b>4</b> Vehicles</span>
                                <a href="#" class="btn btn--round print_btn" data-toggle="modal" data-target="#addModal">
                                    <span class="lnr lnr-file-add"></span>Add New</a>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                

                <div class="row">
                    
                    <div class="col-lg-4 col-md-6">
                        
                        <div class="product product--card">

                            <div class="product__thumbnail">
                                <img src="images/p1.jpg" alt="Product Image" />

                                <div class="prod_btn">
                                        <a href="single-product.html" class="transparent btn--sm btn--round" data-toggle="modal" data-target="#editModal">Edit</a>
                                        <a href="single-product.html" class="transparent btn--sm btn--round" data-toggle="modal" data-target="#deleteModal">Delete</a>
                                    </div>
                            </div>
                            

                            <div class="product-desc">
                                <a href="#" class="product_title">
                                    <h4>Ferrari 458 Italia</h4>
                                </a>
                                <ul class="titlebtm">
                                    <li>
                                        <img class="auth-img" src="images/auth.jpg" alt="author image"/>
                                        <p>
                                            <a href="#">Ferrari</a>
                                        </p>
                                    </li>
                                    <li class="product_cat">
                                        <a href="#">
                                            <span class="lnr lnr-user"></span>Seats: <span>4</span></a>
                                    </li>
                                </ul>

                                
                            </div>
                            

                            <div class="product-purchase">
                                <div class="price_love">
                                    <span>Trips: <b>10</b></span>
                                    <p>
                                        <span class="lnr lnr-heart"></span> 90</p>
                                </div>
                                <div class="rating product--rating">
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
                                                <span class="fa fa-star-half-o"></span>
                                            </li>
                                        </ul>
                                    </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    

                    
                    <div class="col-lg-4 col-md-6">
                        
                        <div class="product product--card">

                            <div class="product__thumbnail">
                                <img src="images/p2.jpg" alt="Product Image"/>

                                <div class="prod_btn">
                                        <a href="single-product.html" class="transparent btn--sm btn--round" data-toggle="modal" data-target="#editModal">Edit</a>
                                        <a href="single-product.html" class="transparent btn--sm btn--round" data-toggle="modal" data-target="#deleteModal">Delete</a>
                                    </div>
                            </div>
                            

                            <div class="product-desc">
                                <a href="#" class="product_title">
                                    <h4>BMW M850i xDrive</h4>
                                </a>
                                <ul class="titlebtm">
                                    <li>
                                        <img class="auth-img" src="images/auth2.jpg" alt="author image"/>
                                        <p>
                                            <a href="#">BMW</a>
                                        </p>
                                    </li>
                                    <li class="product_cat">
                                        <a href="#">
                                            <span class="lnr lnr-user"></span>Seats: <span>4</span></a>
                                    </li>
                                </ul>

                                
                            </div>
                            

                            <div class="product-purchase">
                                <div class="price_love">
                                        <span>Trips: <b>8</b></span>
                                    <p>
                                        <span class="lnr lnr-heart"></span> 48</p>
                                </div>

                                <div class="rating product--rating">
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
                                            <span class="fa fa-star-half-o"></span>
                                        </li>
                                    </ul>
                                </div>

                                
                            </div>
                            
                        </div>
                        
                    </div>
                    

                    
                    <div class="col-lg-4 col-md-6">
                        
                        <div class="product product--card">

                            <div class="product__thumbnail">
                                <img src="images/p3.jpg" alt="Product Image"/>

                                <div class="prod_btn">
                                        <a href="single-product.html" class="transparent btn--sm btn--round" data-toggle="modal" data-target="#editModal">Edit</a>
                                        <a href="single-product.html" class="transparent btn--sm btn--round" data-toggle="modal" data-target="#deleteModal">Delete</a>
                                    </div>
                            </div>
                            

                            <div class="product-desc">
                                <a href="#" class="product_title">
                                    <h4>Mercedes-Maybach S600</h4>
                                </a>
                                <ul class="titlebtm">
                                    <li>
                                        <img class="auth-img" src="images/auth3.jpg" alt="author image"/>
                                        <p>
                                            <a href="#">Mercedes-Benz</a>
                                        </p>
                                    </li>
                                    <li class="product_cat">
                                        <a href="#">
                                            <span class="lnr lnr-user"></span>Seats: 4</a>
                                    </li>
                                </ul>

                    
                            </div>
                            

                            <div class="product-purchase">
                                <div class="price_love">
                                        <span>Trips: <b>7</b></span>
                                    <p>
                                        <span class="lnr lnr-heart"></span> 24</p>
                                </div>

                                <div class="rating product--rating ml-auto">
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
                                            <span class="fa fa-star-half-o"></span>
                                        </li>
                                    </ul>
                                </div>

                                
                            </div>
                            
                        </div>
                        
                    </div>
                    

                    

                    
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="pagination-area">
                            <nav class="navigation pagination" role="navigation">
                                <div class="nav-links">
                                    <a class="prev page-numbers" href="#">
                                        <span class="lnr lnr-arrow-left"></span>
                                    </a>
                                    <a class="page-numbers current" href="#">1</a>
                                    <a class="page-numbers" href="#">2</a>
                                    <a class="page-numbers" href="#">3</a>
                                    <a class="next page-numbers" href="#">
                                        <span class="lnr lnr-arrow-right"></span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </section>
        );
    }
}

export default CarListPage;