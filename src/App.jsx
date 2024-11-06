import React from 'react';
import HomePage from "./HomePage";

function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Sweet Delights</a>
                    <button className="navbar-toggler" type="button"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
                            <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="hero-section text-white text-center">
                <div className="container">
                    <h1>Delicious Cupcakes for Every Occasion</h1>
                    <p>Handcrafted, fresh, and delivered right to your door.</p>
                    <a href="#products" className="btn btn-primary btn-lg">Shop Now</a>
                </div>
            </section>
        </>
    );
}

export default App;