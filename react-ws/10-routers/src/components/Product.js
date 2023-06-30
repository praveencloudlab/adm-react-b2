import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({prod}) => {
    return (
        <>
            <td><Link to={'/product'}>{prod.id}</Link></td>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td>{prod.description}</td>
            <td>Edit</td>
            <td>Delete</td>
        </>
    );
};

export default Product;