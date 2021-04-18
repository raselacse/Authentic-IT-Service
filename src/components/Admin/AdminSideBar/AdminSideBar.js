import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div>
            <h4>Admin Panel</h4>
            <Nav.Link className="text-dark" as={Link} to="/manage-service">Manage Service</Nav.Link>
            <Nav.Link className="text-dark" as={Link} to="/add-service">Add Service</Nav.Link>
            <Nav.Link className="text-dark" as={Link} to="/make-admin">Make Admin</Nav.Link>
            <Nav.Link className="text-dark" as={Link} to="/book-list">Booking List</Nav.Link>
        </div>
    );
};

export default AdminSideBar;