import React, { useEffect, useState } from 'react';
import './product.css';
import Product from './product';
import ProductsFilterBars from '../ProductsFilterBars/ProductsFilterBars';


const AllProducts = () => {
    const [data,setData]= useState([]);
    useEffect(()=>{
        fetch('fackData.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='custom-css my-20 mx-5 md:mx-20 lg:mx-[100px]'>
         <ProductsFilterBars/>
        <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {
          data?.map(p => <Product key={p.usedYear} p={p} />)
        }
        </div>
        </div>
    );
};

export default AllProducts;