import React from 'react';
import { Link } from 'react-router-dom';
import { TbHandClick } from "react-icons/tb";

const Page404 = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='lg:text-[500px] md:text-[300px] text-9xl font-extrabold text-[#1185de]'>404</h1>
            <Link to='/' className='text-[#1185de] lg:text-3xl md:text-2xl text-xl font-bold'>Go To Home Page</Link><Link to='/' className='block text-xl'><TbHandClick className='cursor-pointer'/></Link>
        </div>
    );
};

export default Page404;