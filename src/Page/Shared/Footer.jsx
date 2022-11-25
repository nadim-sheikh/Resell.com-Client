import React from 'react';
import { BsTelephoneFill, BsFacebook,BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mx-5 md:mx-20 lg:mx-[100px]'>
            <div className='lg:my-32 md:my-24 my-10 grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1'>
                <div>
                    <h1 className='font-extrabold text-3xl'>RESELL<span className='lg:text-[#1185de] md:text-[#1185de] lg:inline-block md:inline-block hidden'>.com</span></h1>
                    <div className='flex items-center mt-7'>
                        <IoLocationSharp className='mr-2'/><span>Bangladesh, Dhaka, Faridpur 2022</span>
                    </div>
                    <div className='flex items-center mt-2'>
                        <BsTelephoneFill className='mr-2'/><span className='hover:text-[#1185de] cursor-pointer'>01364778428</span>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold md:mt-0 lg:mt-0 mt-10'>Help & Information</h1>
                    <div className='mt-5 flex flex-col'>
                        <Link className=''><span className='hover:text-[#1185de]'>Online Stores</span></Link>
                        <Link className=' mt-2'><span className='hover:text-[#1185de]'>Help & Contact Us</span></Link>
                        <Link className=' mt-2'><span className='hover:text-[#1185de]'>Returns & Refunds</span></Link>
                        <Link className=' mt-2'><span className='hover:text-[#1185de]'>Terms & Conditions</span></Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold md:mt-0 lg:mt-0 mt-10'>About Us</h1>
                    <div className='mt-5 flex flex-col'>
                        <Link className=''><span className='hover:text-[#1185de]'>About Us</span></Link>
                        <Link className=' mt-2'><span className='hover:text-[#1185de]'>What We Do</span></Link>
                        <Link className=' mt-2'><span className='hover:text-[#1185de]'>FAQ Page</span></Link>
                        <Link className=' mt-2'><span className='hover:text-[#1185de]'>Contact Us</span></Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold md:mt-0 lg:mt-0 mt-10'>Newsletter</h1>
                    <input placeholder='Your Email Address' className='mt-5 border-none text-[#1185de] focus:outline-none' />
                    <div className='border-b mt-2 rounded-md border-b-[#1185de] lg:w-full md:w-full'></div>
                    <div className='lg:mt-16 md:mt-16 mt-10 flex'>
                        <Link className='mr-5'><span className='hover:text-[#1185de]'>Term & Condition</span></Link>
                        <Link className='mr-5'><span className='hover:text-[#1185de]'>Policy</span></Link>
                        <Link className='mr-5'><span className='hover:text-[#1185de]'>Map</span></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className='py-10 lg:flex md:flex flex-row justify-between'>
                <p>© 2022 Resell.All Rights Reserved.</p>
                <div className='flex items-center'>
                    <p className='font-black'>Follow Us On Social</p>
                    <div className='flex ml-20'>
                        <Link><BsFacebook className=''/></Link>
                        <Link><AiFillTwitterCircle className='ml-3 md:ml-7 lg:ml-10'/></Link>
                        <Link><BsYoutube className='ml-3 md:ml-7 lg:ml-10'/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;