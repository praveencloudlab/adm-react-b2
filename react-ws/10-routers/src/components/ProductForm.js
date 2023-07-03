import React, { useEffect,useState } from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';
import ProductService from '../ProductService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ProductForm = () => {
    const{id}=useParams();
    const navigate=useNavigate();
    const {register, handleSubmit,reset,formState: { errors }} = useForm({mode:'onChange'});

    if(id){
        console.log(">>> EDIT::: "+id);
    }else{
        console.log(">> New Product:: ");
    }

    function saveProduct(product){

    }
    function editProduct(product){

    }

    const[product,setProduct] = useState({});
    useEffect(()=>{
        if(id){
            ProductService.findProductById(id)
            .then(response =>{
                    console.log(response.data);
                    setProduct(response.data)
                    reset(response.data);
            })
        }else{
            setProduct({})
        }
    },[reset])

    const f1 = (data) =>{
        if(id){
            // edit
            ProductService.updateProduct(id,data);
            navigate('/products')

        }else{
            //save
            ProductService.saveProduct(data);
            navigate('/products');
        }
       
    } ;

    return (
        <div>
         <form onSubmit={handleSubmit(f1)}  >
        <div>
        <input defaultValue={product.id} placeholder='product ID' {...register("id",{required:true,pattern: /^\d*\.?\d*$/i })} />
            {errors.price?.type==='required' &&<p className='text-danger'>Product ID is required</p>}
            {errors.price?.type==='pattern' &&<p className='text-danger'>ID must be number</p>}


        </div>
        <div>
            <input defaultValue={product.name} placeholder='product Name' {...register("name",{required:true,minLength:3,pattern: /^[A-Za-z ]+$/i })} />
            {errors.name?.type==='required' &&<p className='text-danger'>Product name is required</p>}
            {errors.name?.type==='minLength' &&<p className='text-danger'>Product name should be minimum 3 characters long</p>}
            {errors.name?.type==='pattern' &&<p className='text-danger'>name must have only alphabets</p>}

        </div>

        <div>
            <input defaultValue={product.price} placeholder='product Price' {...register("price",{required:true,pattern: /^\d*\.?\d*$/i })} />
            {errors.price?.type==='required' &&<p className='text-danger'>Price is required</p>}
            {errors.price?.type==='pattern' &&<p className='text-danger'>Price must be number</p>}

        </div>

        <div>
            <textarea defaultValue={product.description} placeholder='Description' {...register("description",{required:true})} />
            {errors.description?.type==='required' &&<p className='text-danger'>Description is required</p>}

        </div>

        <div>
            <button>Save</button>
        </div>
        
      </form>
      <hr/>
        </div>
    );
};

export default ProductForm;