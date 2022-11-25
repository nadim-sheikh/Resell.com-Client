import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <form>
            <div className='w-[30%] mx-auto my-32 py-32 px-20 border'>
            <h1 className='text-3xl font-bold text-center mb-5'>LOGIN</h1>
            <div className='flex flex-col justify-center'>
            <input type='email' placeholder='Your Email Address' name='email' className=' bg-white mb-5 w-full border border-[#1185de] block' />
            <input type='password' placeholder='Your Password' name='password'  className=' bg-white mb-3 w-full border border-[#1185de] block' />
            <Link to='/signup' className='mb-4 underline'>I Don't Have An Account ?</Link>
            <input type="submit" value="Login" className='bg-black hover:bg-[#262626] text-white py-3 cursor-pointer' />
            </div>
            </div>
        </form>
    );
};

export default Login;