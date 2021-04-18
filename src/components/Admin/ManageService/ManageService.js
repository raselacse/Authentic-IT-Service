import React, { useEffect, useState } from 'react';
import { Button, Jumbotron, Table, Spinner } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './ManageService.css'

const ManageService = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://morning-island-41503.herokuapp.com/manage-service')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    const deleteProduct = (e, id) => {
        fetch('https://morning-island-41503.herokuapp.com/delete/' + id, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    e.target.parentNode.parentNode.style.display = "none"
                }
            })
    }
    return (
        <>
            <div className="row p-5">
                <div className="col-lg-2">
                    <AdminSideBar />
                </div>
                <div className="col-lg-10">
                    <h4 className="mb-3">Manage Service</h4>
                    {loading ? <div className="text-center"><Spinner animation="border" /></div> :
                        <Jumbotron className="py-4">
                            <Table className="text-center bg-light" responsive>
                                <thead>
                                    <tr>
                                        <th>Service Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(pd => <tr key={pd._id}>
                                        <td>{pd.title}</td>
                                        <td><Button onClick={(e) => deleteProduct(e, pd._id)}>Delete</Button></td>
                                    </tr>)}

                                </tbody>
                            </Table>
                        </Jumbotron>
                    }
                </div>
            </div>
        </>
    );
};

export default ManageService;