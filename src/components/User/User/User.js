import React from 'react';
import { useParams } from 'react-router';
import Book from '../Book/Book';

const User = () => {
    const { key } = useParams()
    return (
        <>
            <Book id={key} />
        </>
    );
};

export default User;