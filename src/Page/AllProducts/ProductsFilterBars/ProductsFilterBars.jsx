import React from 'react';
import { Link } from 'react-router-dom';

const ProductsFilterBars = () => {
    return (
        <section className=' mx-5 md:mx-20 lg:mx-[150px] h-full'>
            <div className=''>
                <h1 className='text-xl font-bold mb-5'>Categories</h1>
                <Link className='mr-5 block'><span className='hover:text-[#1185de]'>Iphone</span></Link>
                <Link className='mr-5 block'><span className='hover:text-[#1185de]'>Realme</span></Link>
                <Link className='mr-5 block'><span className='hover:text-[#1185de]'>Oppo</span></Link>
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