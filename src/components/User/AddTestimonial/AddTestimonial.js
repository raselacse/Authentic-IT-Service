import React, { useState } from 'react';
import { Button, Col, Form, Nav } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import SideBar from '../SideBar/SideBar';

const AddTestimonial = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [data, setData] = useState({
        name: "",
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
            fetch('http://localhost:27017/add-testimonial', {
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
                <div className="col-lg-2 aside">
                    <SideBar/>
                </div>
                <div className="col-lg-10">
                    <div>
                        <h4 className="mb-3">Review</h4>

                        <Form className="py-4" noValidate validated={validated} onSubmit={handleSubmit} >
                            <Form.Row>
                                <Form.Group as={Col} hasValidation>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control onChange={(e) => hangleValue(e)} id="name" value={data.name} type="text" placeholder="Enter Your name" required />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Your Photo</Form.Label>
                                    <Form.Control onChange={(e) => hangleFile(e)} type="file" required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onChange={(e) => hangleValue(e)} id="description" value={data.description} type="text" placeholder="Enter Description" required as='textarea' rows='6' />
                                </Form.Group>
                            </Form.Row>
                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddTestimonial;