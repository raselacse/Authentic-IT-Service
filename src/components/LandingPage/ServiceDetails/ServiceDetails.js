import { Button, Card, CardDeck } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const ServiceDetails = (props) => {
    const { title, image, description, _id } = props.product;

    return (
        <>
            <CardDeck className="text-center py-3 mx-0 px-0 col-md-6 col-lg-3">
                <Card>
                    <Card.Img variant="top pt-3 m-auto image" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button className="px-3 stretched-link" as={Link} to={"user/" + _id} variant="primary"><FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </> 
    );
};

export default ServiceDetails;