import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Payment from '../Payment/Payment';
import SideBar from '../SideBar/SideBar';

const Book = ({ id }) => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://morning-island-41503.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false)
            })
    }, [])
    const product = service.find(pd => pd._id === id);
    return (
        <>
            <div className="row p-5">
                <div className="col-lg-2">
                    <SideBar />
                </div>
                <div className="col-lg-10">
                    <h4 className="mb-3 ml-3">Book</h4>
                    {loading ? <div className="text-center"><Spinner animation="border" /></div> :
                    <Payment keys={id} title={product.title} price={product.price}/>}
                </div>
            </div>
        </>
    );
};

export default Book;