import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>Welcome to <span>SpeedyBites</span></h1>
                            <h2>Delivering great food for more than 18 years!</h2>

                            <div className="btns">
                                <Link to="/menu" className="btn-menu animated fadeInUp scrollto">Our Menu</Link>
                                <Link to="/" className="btn-book animated fadeInUp scrollto">Book a Table</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                            <Link to="/" className="glightbox play-btn"></Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;