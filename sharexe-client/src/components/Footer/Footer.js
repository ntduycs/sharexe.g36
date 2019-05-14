import React from 'react';



const Footer = (props) => (
    <footer className="footer-area">
        <div className="footer-big section--padding">
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="info-footer">
                            <div className="info__logo">
                                <img src="images/flogo.png" alt="footer logo" />
                            </div>
                            <p className="info--text">We go everywhere. Literally thousands of destinations. No station
                                required.</p>
                            <ul className="info-contact">
                                <li>
                                    <span className="lnr lnr-phone info-icon"></span>
                                    <span className="info">Phone: +1234-567-8900</span>
                                </li>
                                <li>
                                    <span className="lnr lnr-envelope info-icon"></span>
                                    <span className="info">example@example.com</span>
                                </li>
                                <li>
                                    <span className="lnr lnr-map-marker info-icon"></span>
                                    <span className="info">HCMC Bach Khoa University, Ly Thuong Kiet, Ward 10, HCMC</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    

                    <div className="col-lg-5 col-md-6">
                        <div className="footer-menu">
                            <h4 className="footer-widget-title text--white">Our Company</h4>
                            <ul>
                                <li>
                                    <a href="#">How to Join Us</a>
                                </li>
                                <li>
                                    <a href="#">How It Work</a>
                                </li>
                                <li>
                                    <a href="#">Buying and Selling</a>
                                </li>
                                <li>
                                    <a href="#">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#">Copyright Notice</a>
                                </li>
                                <li>
                                    <a href="#">Refund Policy</a>
                                </li>
                                <li>
                                    <a href="#">Affiliates</a>
                                </li>
                            </ul>
                        </div>
                        

                        <div className="footer-menu">
                            <h4 className="footer-widget-title text--white">Help and FAQs</h4>
                            <ul>
                                <li>
                                    <a href="#">How to Join Us</a>
                                </li>
                                <li>
                                    <a href="#">How It Work</a>
                                </li>
                                <li>
                                    <a href="#">Buying and Selling</a>
                                </li>
                                <li>
                                    <a href="#">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#">Copyright Notice</a>
                                </li>
                                <li>
                                    <a href="#">Refund Policy</a>
                                </li>
                                <li>
                                    <a href="#">Affiliates</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    

                    <div className="col-lg-4 col-md-12">
                        <div className="newsletter">
                            <h4 className="footer-widget-title text--white">Newsletter</h4>
                            <p>Subscribe to get the latest news, update and offer information. Don't worry, we won't
                                send spam!</p>
                            <div className="newsletter__form">
                                <form action="#">
                                    <div className="field-wrapper">
                                        <input className="relative-field rounded" type="text" placeholder="Enter email" />
                                        <button className="btn btn--round" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>

                            
                            <div className="social social--color--filled">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-facebook"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-google-plus"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-pinterest"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-linkedin"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-dribbble"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        

        <div className="mini-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright-text">
                            <p>&copy; 2019
                                <a href="#">ShareXe</a>. All rights reserved. Created by
                                <a href="#">Anonymous</a>
                            </p>
                        </div>

                        <div className="go_top" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })}>
                            <span className="lnr lnr-chevron-up"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;