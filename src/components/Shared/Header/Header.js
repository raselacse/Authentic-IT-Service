import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-content">
                        <h5 className="font-weight-bolder">IT Business Consulting</h5>
                        <h1>
                            <span className="d-block font-weight-bolder">Our Agency Provide</span>
                            <span className="d-block font-weight-bolder">Best IT Solutions</span>
                        </h1>
                        <p>
                            <span className="d-block font-weight-bolder">We are 100+ professtional software engineers with more then</span>
                            <span className="d-block font-weight-bolder">100 years of experience in delivering superior products</span>
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;