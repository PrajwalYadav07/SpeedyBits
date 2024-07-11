import React from 'react'
import Hero from '../Components/Hero';
import Menu from '../Components/Menu';
import About from '../Components/About';
import Us from '../Components/Us';
import Specials from '../Components/Specials';
import Events from '../Components/Events';
import Book from '../Components/Book';
import Testimonials from '../Components/Testimonial';
import Gallery from '../Components/Gallery';
import OurChefs from '../Components/OurChefs';

const HomePage = () => {
    return (
        <>
            <Hero />
            <main id="main">
                <About />
                <Us />
                <Events />
                <Testimonials />
                <OurChefs />
            </main>
        </>
    )
}
export default HomePage;
