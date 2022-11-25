import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <form>
            <div className='w-[30%] mx-auto my-32 py-32 px-20 border-2 rounded-md'>
                <h1 className='text-3xl font-bold text-center mb-5'>SIGN UP</h1>
                <div className='flex flex-col justify-center'>
                    <input type='text' placeholder='Your Full Name' name='name' className=' bg-white mb-5 w-full border border-[#1185de] block' required/>
                    <input type='email' placeholder='Your Email Address' name='email' className=' bg-white mb-5 w-full border border-[#1185de] block' required/>
                    <input type="file" name="photoURL" className='mb-5 w-full border border-[#1185de] block' id="" required/>
                    <input type='password' placeholder='Your Password' name='password' className=' bg-white mb-3 w-full border border-[#1185de] block' required/>
                    <Link to='/login' className='mb-4 underline'>Have An Account ?</Link>
                    <input type="submit" value="Login" className='bg-black hover:bg-[#262626] text-white py-3 cursor-pointer' />
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <Link className='bg-[#4286F5] hover:bg-[#2e62b7] p-2 flex items-center rounded-md'>
                        <span className='bg-white rounded-md p-2 w-[10%]'>
                        <img src="https://i.postimg.cc/vBZ0x3TL/1200px-Google-G-Logo-svg.png" className='' alt="" />
                        </span>
                        <h1 className='text-white ml-20 text-xl'>Sign Up With Google</h1>
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default SignUp;