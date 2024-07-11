import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <section id="menu" className="menu section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Menu</h2>
                        <p>Check Our Tasty Menu</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="menu-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-starters">Starters</li>
                                <li data-filter=".filter-salads">Salads</li>
                                <li data-filter=".filter-specialty">Specialty</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-6 menu-item filter-starters">
                            <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt="" />
                            <div className="menu-content">
                                <Link to="/">Lobster Bisque</Link><span>₹400</span>
                            </div>
                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-specialty">
                            <img src="assets/img/menu/bread-barrel.jpg" className="menu-img" alt="" />
                            <div className="menu-content">
                                <Link to="/">Bread Barrel</Link><span>₹400</span>
                            </div>
                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-starters">
                            <img src="assets/img/menu/cake.jpg" className="menu-img" alt="" />
                            <div className="menu-content">
                                <Link to="/">Crab Cake</Link><span>₹400</span>
                            </div>
                            <div className="menu-ingredients">
                                A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-salads">
                            <img src="assets/img/menu/caesar.jpg" className="menu-img" alt="" />
                            <div className="menu-content">
                                <Link to="/">Caesar Selections</Link><span>₹400</span>
                            </div>
                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-specialty">
                            <img src="assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt="" />
                            <div className="menu-content">
                                <Link to="/">Tuscan Grilled</Link><span>₹400</span>
                            </div>
                            <div className="menu-ingredients">
                                Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-starters">
                            <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt="" />
                            <div className="menu-content">
                                <Link to="/">Mozzarella Stick</Link><span>₹400</span>
                            </div>
                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-salads">
                            <img src="assets/img/menu/greek-salad.jpg" className="menu-img" alt="" />
                            <div className="menu-content">
                                <Link to="/">Greek Salad</Link><span>₹400</span>
                            </div>
                            <div className="menu-ingredients">
                                Fresh spinach, crisp romaine, tomatoes, and Greek olives
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-salads">
                            <img src="assets/img/menu/spinach-salad.jpg" className="menu-img" alt="" />
                            <div className="menu-content">
                                <Link to="/">Spinach Salad</Link><span>₹400</span>
                            </div>
                            <div className="menu-ingredients">
                                Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-specialty">
                            <img src="assets/img/menu/lobster-roll.jpg" className="menu-img" alt="" />
                            <div className="menu-content">
                                <Link to="/">Lobster Roll</Link><span>₹400</span>
                            </div>
                            <div className="menu-ingredients">
                                Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default Menu;