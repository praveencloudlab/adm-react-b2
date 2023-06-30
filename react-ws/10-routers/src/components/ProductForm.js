import React from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';
const ProductForm = () => {
    const {register, handleSubmit,formState: { errors }} = useForm({mode:'onChange'});
    const f1 = (data) =>{
        axios.post('http://localhost:3000/products/',data)
        .then(response=>console.log(response.data));
    } ;

    return (
        <div>
         <form onSubmit={handleSubmit(f1)}  >
        <div>
        <input placeholder='product ID' {...register("id",{required:true,pattern: /^\d*\.?\d*$/i })} />
            {errors.price?.type==='required' &&<p className='text-danger'>Product ID is required</p>}
            {errors.price?.type==='pattern' &&<p className='text-danger'>ID must be number</p>}


        </div>
        <div>
            <input placeholder='product Name' {...register("name",{required:true,minLength:3,pattern: /^[A-Za-z ]+$/i })} />
            {errors.name?.type==='required' &&<p className='text-danger'>Product name is required</p>}
            {errors.name?.type==='minLength' &&<p className='text-danger'>Product name should be minimum 3 characters long</p>}
            {errors.name?.type==='pattern' &&<p className='text-danger'>name must have only alphabets</p>}

        </div>

        <div>
            <input placeholder='product Price' {...register("price",{required:true,pattern: /^\d*\.?\d*$/i })} />
            {errors.price?.type==='required' &&<p className='text-danger'>Price is required</p>}
            {errors.price?.type==='pattern' &&<p className='text-danger'>Price must be number</p>}

        </div>

        <div>
            <textarea placeholder='Description' {...register("description",{required:true})} />
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