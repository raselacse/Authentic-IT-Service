import React, { useState } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import { useHistory, useLocation } from 'react-router';
import { Button, Col, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [admin, setAdmin] = useState({})
    const [validated, setValidated] = useState(false);

    const hangleValue = (e) => {
        const newData = { ...admin }
        newData[e.target.id] = e.target.value;
        setAdmin(newData)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() === true) {
            fetch('http://localhost:27017/make-admin', {
                method: 'POST',
                body: JSON.stringify(admin),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            history.replace(from);
        }
    }
    return (
        <div className="row p-5">
            <div className="col-lg-2">
                <AdminSideBar />
            </div>
            <div className="col-lg-10">
                <div>
                    <h4 className="mb-3">Make Admin</h4>
                    <Form className="py-4" noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Row>
                            <Form.Group as={Col} hasValidation>
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={(e) => hangleValue(e)} id="email" value={admin.email} type="email" placeholder="yourmail@mail.com" required />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;