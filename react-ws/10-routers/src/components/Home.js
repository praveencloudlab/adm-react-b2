import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './Products';
import ProductForm from './ProductForm';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                         <Link className="nav-link active" aria-current="page" to={"products"}>List Products</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to={"new-product"}>Add Products</Link>
                    </li>
                   
  
                </ul>
                </div>
                <div className='col-9'>
                <Routes>
                    <Route path='products' element={<Products/>}></Route>
                    <Route path='new-product' element={<ProductForm/>}></Route>
                    <Route path='product-form/:id' element={<ProductForm/>}></Route>
                    <Route path='product' element={<Product/>}></Route>
                </Routes>
            </div>
        </div>
    </div>
    );
};

export default Home;