import React, { useEffect, useState } from 'react';
import { Jumbotron, Spinner, Table } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AdminBookingList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:27017/all-booking')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return (

        <div className="row p-5">
            <div className="col-lg-2">
                <AdminSideBar />
            </div>
            <div className="col-lg-10">
                <div>
                    <h4 className="mb-3">Booking List</h4>
                    {loading ? <div className="text-center"><Spinner animation="border" /></div> :
                        <Jumbotron className="py-4">
                            <Table className="text-center bg-light" responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Service</th>
                                        <th>Pay With</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(pd => <tr key={pd._id}>
                                        <td>{pd.name}</td>
                                        <td>{pd.email}</td>
                                        <td>{pd.title}</td>
                                        <td>Credit Card</td>
                                        <td>
                                            <select>
                                                <option>Padding</option>
                                                <option>On Going</option>
                                                <option>Done</option>
                                            </select>
                                            </td>
                                    </tr>)}

                                </tbody>
                            </Table>
                        </Jumbotron>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminBookingList;