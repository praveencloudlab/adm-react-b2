import React from 'react';
import {products} from '../data'
import Product from './Product';

const Products = () => {
    function loadProducts(){
    
        return products.map((product,idx)=>{
            return(
                <Product key={product.imageHash} product={product}/>
            )
          })
       }
    return (
        <div>
 <table className='table'>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          </tr>
        </thead>
        
        <tbody>
        {loadProducts()}
        </tbody>
      </table>

            
        </div>
    );
};

export default Products;