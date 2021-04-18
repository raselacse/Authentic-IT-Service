import { Button, Card, CardDeck } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Testimonial = (props) => {
    const { name, description, image } = props.product;

    return (
        <>
            <CardDeck className="text-center py-3 mx-0 px-0 col-md-6 col-lg-3">
                <Card>
                    <Card.Img style={{height: "250px"}} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </> 
    );
};

export default Testimonial;