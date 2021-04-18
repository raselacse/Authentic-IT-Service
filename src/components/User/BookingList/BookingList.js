import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import BookingDetails from '../BookingDetails/BookingDetails';
import SideBar from '../SideBar/SideBar';
import './BookingList.css'

const BookingList = () => {
    const [booking, setBooking] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://morning-island-41503.herokuapp.com/booking?email=' + loggedInUser.email, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <div className="row p-5">
                <div className="col-lg-2 aside">
                    <SideBar />
                </div>
                <div className="col-lg-10">
                    <h4 className="mb-3 ml-3">Book List</h4>
                    {loading ? <div className="text-center"><Spinner animation="border" /></div> :
                        <div className="d-flex">
                            {
                                booking.map(book => <BookingDetails key={book._id} book={book}></BookingDetails>)
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default BookingList;