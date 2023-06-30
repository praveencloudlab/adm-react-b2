import {useState,useEffect} from 'react';
import axios from 'axios';
import Product from './Product';
const Products = () => {

    const[products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/products/')
        .then(prods=>setProducts(prods.data))
    },[])

    function renderPrducts(){
        return products.map((prod,idx)=>{
            return(
                <tr>
                    <Product prod={prod}/>
                </tr>
                
            )
        });
    }

    return (
        <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Op1</th>
                    <th>Op2</th>
                </tr>
            </thead>
        <tbody>
        {renderPrducts()}
        </tbody>
        </table>
         
        </div>
    );
};

export default Products;