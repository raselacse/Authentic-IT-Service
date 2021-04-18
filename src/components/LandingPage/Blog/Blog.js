import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import './Blog.css'
import blog1 from '../../../Image_Icon/Image/blog (1).jpg'
import blog2 from '../../../Image_Icon/Image/blog (2).jpg'
import blog3 from '../../../Image_Icon/Image/blog (3).jpg'

const Technology = () => {
    return (
        <section className="text-center p-5">
            <h5 style={{ color: "#0060FF" }}>OUR BLOG</h5>
            <h1>Click Out Our</h1>
            <h1>Latest News & Artical</h1>
            <div className="row">
                <CardDeck className="text-center py-3 mx-0 px-0 col-md-12 col-lg-4">
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        <Card.Img variant="top" src={blog1} />
                        <Card.Body>
                            <Card.Title>Define World Best IT Solution Technology</Card.Title>
                            <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ...</Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <CardDeck className="text-center py-3 mx-0 px-0 col-md-12 col-lg-4">
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        <Card.Img variant="top" src={blog2} />
                        <Card.Body>
                            <Card.Title>You Must Try 20 Secret Of Digital Transform</Card.Title>
                            <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ...</Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <CardDeck className="text-center py-3 mx-0 px-0 col-md-12 col-lg-4">
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        <Card.Img variant="top" src={blog3} />
                        <Card.Body>
                            <Card.Title>Digital Conference Of IT Tech Events in 2020</Card.Title>
                            <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ...</Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </section>
    );
};

export default Technology;