import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './AddService.css'
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AddService = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [data, setData] = useState({
        title: "",
        description: ""
    })
    const [image, setImage] = useState({
        image: ""
    })
    const [validated, setValidated] = useState(false);

    const hangleValue = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData)
    }
    const hangleFile = (e) => {
        const imageData = new FormData();
        imageData.set('key', 'd2bfea558227bc5d8f9aafe87815be50')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImage({
                    image: response.data.data.display_url
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() === true) {
            const newProduct = Object.assign(data, image);
            fetch('https://morning-island-41503.herokuapp.com/add-service', {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            history.replace(from);
        }
    }
    return (
        <>
            <div className="row p-5">
                <div className="col-lg-2">
                    <AdminSideBar />
                </div>
                <div className="col-lg-10">
                    <div>
                        <h4 className="mb-3">Add Service</h4>

                        <Form className="py-4" noValidate validated={validated} onSubmit={handleSubmit} >
                            <Form.Row>
                                <Form.Group as={Col} hasValidation>
                                    <Form.Label>Service Title</Form.Label>
                                    <Form.Control onChange={(e) => hangleValue(e)} id="title" value={data.title} type="text" placeholder="Enter Title" required />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Add Photo</Form.Label>
                                    <Form.Control onChange={(e) => hangleFile(e)} type="file" required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onChange={(e) => hangleValue(e)} id="description" value={data.description} type="textarea" placeholder="Enter Description" required as='textarea' rows='6' />
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddService;


