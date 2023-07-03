import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='text-5xl text-center mt-3'>
      <h1>Welcome to next-js</h1>
      <br/>
      <hr/>

      <Link href="/products">Products</Link>
      <br/>
      <Link href="/users">Users</Link>


    </div>
  );
};

export default page;