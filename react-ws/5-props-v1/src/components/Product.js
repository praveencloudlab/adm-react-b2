import React from 'react';

const Product = (props) => {
    let {product}=props;
    return (
             <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
    );
};

export default Product;