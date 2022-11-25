import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
    const [open, setOpen] = useState(false);
    console.log(open);
    const nav = (
        <>
            <Link to='/'><li className='list-none inline text-2xl md:text-3xl lg:text-base font-semibold lg:ml-14'>Home</li></Link>
            <Link to='/product'><li className='list-none inline text-2xl md:text-3xl lg:text-base font-semibold lg:ml-14 '>Products</li></Link>
            <Link><li className='list-none inline text-2xl md:text-3xl lg:text-base font-semibold lg:ml-14 '>Cart</li></Link>
            <Link><li className='list-none inline text-2xl md:text-3xl lg:text-base font-semibold lg:ml-14 '>Blogs</li></Link>
        </>)

    const nav2 = (
        <>
            <Link to='/login'><li className='list-none inline text-2xl md:text-3xl lg:text-base font-semibold lg:ml-5 hover:text-gray-500'>Log In</li></Link>
            <Link to='/signup'><li className='list-none inline text-2xl md:text-3xl lg:text-base font-semibold lg:ml-5 hover:text-gray-500'>Sing Up</li></Link>

            <div className="dropdown dropdown-end ml-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt='' />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1185de] rounded-box w-52">
                    <li className='text-white'>
                        <Link className="justify-between">
                            Profile
                            <span className="badge bg-white text-[#1185de]">New</span>
                        </Link>
                    </li>
                    <li className='text-white'><Link>Settings</Link></li>
                    <li className='text-white'><Link>Logout</Link></li>
                </ul>
            </div>
        </>)

    return (
        <nav className='bg-transparent mx-5 md:mx-20 lg:mx-[100px]'>
            <div className='flex justify-between items-center lg:mt-10 md:mt-5'>
                <div><h1 className='font-extrabold text-3xl'>RESELL<span className='lg:text-[#1185de] md:text-[#1185de] lg:inline-block md:inline-block hidden'>.com</span></h1></div>
                <dir className="lg:hidden z-auto">
                    {
                        open ? <AiOutlineClose className='cursor-pointer text-4xl' onClick={() => { setOpen(!open) }} />
                            : <FiMenu className='cursor-pointer text-4xl' onClick={() => { setOpen(!open) }} />
                    }
                </dir>
                <div className='hidden lg:flex'>{nav}</div>
                <div className='hidden lg:flex lg:items-center'>{nav2}</div>
            </div>
            <div className={`flex justify-evenly flex-col absolute z-50 ${open ?
                'block h-full left-0 top-0 bottom-0 py-10 text-white bg-[#1185de] w-[75%] items-center'
                : ' hidden py-10 w-[75%] left-0 top-0 bottom-0 h-full items-center z-50'}`}>
                {nav}
                {nav2}
            </div>
        </nav>
    );
};

export default Nav;