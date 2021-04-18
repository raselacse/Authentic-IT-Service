import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const BookingDetails = ({ book }) => {
    return (
        <>
        <CardDeck className="text-center py-3 mx-0 px-0 col-md-6 col-lg-3">
            <Card>
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Img variant="top img" src={book.image} />
                    <Card.Text>Status</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.description}</Card.Text>
                </Card.Body>
            </Card>
            </CardDeck>
        </>
    );
};

export default BookingDetails;