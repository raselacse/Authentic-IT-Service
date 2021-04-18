import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import footerIcon1 from '../../../Image_Icon/Image/footer-icon (1).jpg'
import footerIcon2 from '../../../Image_Icon/Image/footer-icon (2).jpg'

const Footer = () => {
    return (
        <section id="footer" className="px-5 pt-5" style={{ background: "#101010" }}>
            <div className="row text-light">
                <div className="col-md-4 col-lg-4">
                    <h5 className="pb-4">Authentic-IT Service</h5>
                    <p>We are the best world Information Technology Company. Providing the highest quality in hardware & Network solutions. About more than 25 years of experience and 1000 of innovative achievements.</p>
                </div>
                <div className="col-md-4 col-lg-4">
                    <h5 className="pb-4">Popular Post</h5>
                    <div className="d-flex">
                        <img className="mr-3" style={{ height: "90px", width: "100px" }} src={footerIcon1} alt="" srcset="" />
                        <div>
                            <h6>Define World Best IT</h6>
                            <h6>Solution Technology</h6>
                            <p>August 24, 2020</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img className="mr-3" style={{ height: "90px", width: "100px" }} src={footerIcon2} alt="" srcset="" />
                        <div>
                            <h6>You Must Try 20</h6>
                            <h6>Secret Of Digital</h6>
                            <h6>Transform</h6>
                            <p>August 24, 2020</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <h5 className="pb-4">Contact Us</h5>
                    <div className="d-flex">
                        <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                        <div>
                            <h6>Address:</h6>
                            <p>125, Suitland Street, USA</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
                        <div>
                            <h6>Phone:</h6>
                            <p>+ 786 875 864 75</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} />
                        <div>
                            <h6>E-Mail:</h6>
                            <p>support@globex.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ background: "#0060FF" }} />
            <div className="d-flex justify-content-center align-items-center pb-3">
                <p className="text-light m-0">© Copyright 2021. All Rights Reserved. Designed by Expert Themes</p>
            </div>
        </section>
    );
};

export default Footer;