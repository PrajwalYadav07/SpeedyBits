import React from 'react'

const Events = () => {
    return (
        <>
            <section id="events" className="events">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Events</h2>
                        <p>Organize Your Events in our Restaurant</p>
                    </div>
                    <div className="events-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="row event-item">
                                    <div className="col-lg-6">
                                        <img src="assets/img/event-birthday.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>Birthday Parties</h3>
                                        <div className="price">
                                            <p><span>₹10,000</span></p>
                                        </div>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        </ul>
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Events;