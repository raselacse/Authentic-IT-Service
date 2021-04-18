import React from 'react';
import { useParams } from 'react-router';
import Book from '../Book/Book';

const User = () => {
    const { _id } = useParams()
    return (
        <>
            <Book id={_id} />
        </>
    );
};

export default User;