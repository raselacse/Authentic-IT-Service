import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const Services = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://morning-island-41503.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [products])
    return (
        <section className="p-5">
            <h5 style={{color: "#0463D7"}} className="text-center">WHO WE ARE</h5>
            <h1 className='text-center'>We deal with the aspects of</h1>
            <h1 className='text-center'>professional IT Services</h1>
            {loading ? <div className="text-center"><Spinner animation="border" /></div> :
                <div className="row justify-content-center align-items-center pt-5">
                    {
                        products.map(pd => <ServiceDetails key={pd._id} product={pd}></ServiceDetails>)
                    }
                </div>
                }
        </section>
    );
};

export default Services;