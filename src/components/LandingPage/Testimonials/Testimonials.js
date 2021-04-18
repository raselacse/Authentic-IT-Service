import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';
const Testimonials = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://morning-island-41503.herokuapp.com/testimonial')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [products])
    return (
        <section className="p-5">
            <h5 style={{color: "#0463D7"}} className='text-center'>REAL TESTIMONIALS</h5>
            <h1 className='text-center'>What They Say About Our</h1>
            <h1 className='text-center'>Company?</h1>
            {loading ? <div className="text-center"><Spinner animation="border" /></div> :
                <div className="row justify-content-center align-items-center pt-5">
                    {
                        products.map(pd => <Testimonial key={pd._id} product={pd}></Testimonial>)
                    }
                </div>
                }
        </section>
    );
};

export default Testimonials;