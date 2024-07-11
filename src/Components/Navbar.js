import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div id="topbar" class="d-flex align-items-center fixed-top bg-dark">
                {/* <div class="container d-flex justify-content-center justify-content-md-between">

                    <div class="contact-info d-flex align-items-center">
                        <i class="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
                    </div>
                    <div class="languages d-none d-md-flex align-items-center">
                        <ul>
                            <li>En</li>
                            <li><Link to="/">De</Link></li>
                        </ul>
                    </div>
                </div> */}
            </div>
            <header id="header" class="fixed-top d-flex align-items-center bg-dark">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                    <h1 class="logo me-auto me-lg-0"><Link to="/">SpeedyBits</Link></h1><Link to="/" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid" /></Link>

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><Link class="nav-link " to="/hero">Home</Link></li>
                            <li><Link class="nav-link " to="/menu">Menu</Link></li>
                            <li><Link class="nav-link " to="/events">Events</Link></li>
                            <li><Link class="nav-link " to="/specials">Specials</Link></li>
                            <li><Link class="nav-link " to="/chefs">Chefs</Link></li>
                            <li><Link class="nav-link " to="/contact">Contact</Link></li>
                            <li><Link class="nav-link " to="/about">About</Link></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Navbar;