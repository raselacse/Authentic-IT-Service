import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const MenuBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [data, setData] = useState([]);
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        fetch('https://morning-island-41503.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => {
                setData(data)
                checkAdmin()
            })
    }, [])

    const checkAdmin = () => {
        data.forEach(element => {
            if (element.email === loggedInUser.email) {
                setAdmin(element.email)
            } else {
                setAdmin(null)
            }
        });
    }

    return (
        <>
            <Navbar className="sticky-top" bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/home">Authentic - IT Service</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {admin && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
                        {
                            loggedInUser.email ?
                                <Nav.Link as={Link} to="/login">
                                    <img className="photoURL" src={loggedInUser.photoURL} alt="" /></Nav.Link> :
                                <Nav.Link className="login" as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default MenuBar;