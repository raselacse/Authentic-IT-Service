import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <h4>Dashboard</h4>
            <Nav.Link className="text-dark" as={Link} to="/book">Book</Nav.Link>
            <Nav.Link className="text-dark" as={Link} to="/booking-list">Booking List</Nav.Link>
            <Nav.Link className="text-dark" as={Link} to="/review">Review</Nav.Link>
        </div>
    );
};

export default SideBar;