import React from 'react';
import Payment from '../Payment/Payment';
import SideBar from '../SideBar/SideBar';

const Book = ({ id }) => {
    return (
        <>
            <div className="row p-5">
                <div className="col-lg-2">
                    <SideBar />
                </div>
                <div className="col-lg-10">
                <h4 className="mb-3">Book</h4>
                    <Payment keys={id} />
                </div>
            </div>
        </>
    );
};

export default Book;