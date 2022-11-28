import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsFilterBars = () => {
    const [data,setData]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    console.log(data);
    return (
        <section className=' mx-5 md:mx-20 lg:mx-[150px] h-full'>
            <div className=''>
                <h1 className='text-xl font-bold mb-5'>Categories</h1>
               {
        data?.map(c => <Link to={`/product/category/${c.category_id}`} 
                key={c._id} className='mr-5 block'><span className='hover:text-[#1185de]'>
                    {c.category}</span></Link>)
               }
            </div>
            <hr className='mt-5' />
            <div className='mt-10'>
                <h1 className='text-xl font-bold mb-5'>Availability</h1>
                <div className='flex items-center'>
                    <input type="checkbox" className='rounded' name="" value={'In Stock'} /><p className='ml-2'>In Stock</p>
                </div>
                <div className='flex items-center'>
                    <input type="checkbox" className='rounded' name="" value={'Out of Stock'} /><p className='ml-2'>Out Of Stock</p>
                </div>
            </div>
            <hr className='mt-5' />
        </section>
    );
};

export default ProductsFilterBars;