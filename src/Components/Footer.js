import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>SpeedyBites</h3>
                                    <p>A108 Adam Street <br/>
                                            NY 535022, USA<br/><br/>
                                                <strong>Phone:</strong> +1 5589 55488 55<br/>
                                                    <strong>Email:</strong> info@example.com<br/>
                                                    </p>
                                                    <div className="social-links mt-3">
                                                        <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                                        <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
                                                        <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link>
                                                        <Link to="/" className="google-plus"><i className="bx bxl-skype"></i></Link>
                                                        <Link to="/" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                                                    </div>
                                                </div>
                                            </div>

                                                <div className="col-lg-3 col-md-6 footer-links ">
                                                    <h4>Useful Links</h4>
                                                    <ul>
                                                        <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                                        <li><i className="bx bx-chevron-right"></i> <Link to="/">About us</Link></li>
                                                        <li><i className="bx bx-chevron-right"></i> <Link to="/">Services</Link></li>
                                                        <li><i className="bx bx-chevron-right"></i> <Link to="/">Terms of service</Link></li>
                                                        <li><i className="bx bx-chevron-right"></i> <Link to="/">Privacy policy</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-5  col-md-6 footer-newsletter">
                                                    <h4>Our Newsletter</h4>
                                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                                    <form action="" method="post">
                                                        <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                                                        </form>

                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="copyright">
                                                &copy; Copyright <strong><span>SpeedyBites</span></strong>. All Rights Reserved | Create By Prajwal Yadav
                                            </div>
                                        </div>
                                    </footer>
                                </>
                                )
}
                                export default Footer;