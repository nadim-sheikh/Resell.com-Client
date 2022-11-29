import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const { logIn,providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSingIN = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = (e) => {
        e.preventDefault()
        const userLoginData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        logIn(userLoginData.email, userLoginData.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('LogIn Successfully')
                navigate(from, { replace: true })
            })
            .catch((err) => console.error(err));

    }


    return (
        <form onSubmit={handleLogin}>
            <div className='lg:w-[30%] mx-auto my-32 py-32 px-20 border-2 rounded-md'>
                <h1 className='text-3xl font-bold text-center mb-5'>LOGIN</h1>
                <div className='flex flex-col justify-center'>
                    <input type='email' placeholder='Your Email Address' name='email' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='password' placeholder='Your Password' name='password' className=' bg-white mb-3 w-full border border-[#1185de] block' />
                    <Link to='/signup' className='mb-4 underline'>I Don't Have An Account ?</Link>
                    <input type="submit" value="Login" className='bg-black hover:bg-[#262626] text-white py-3 cursor-pointer' />
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <Link onClick={handleGoogleSingIN} className='bg-[#4286F5] hover:bg-[#2e62b7] p-2 flex items-center rounded-md'>
                        <span className='bg-white rounded-md p-2 w-[10%]'>
                            <img src="https://i.postimg.cc/vBZ0x3TL/1200px-Google-G-Logo-svg.png" className='' alt="" />
                        </span>
                        <h1 className='text-white ml-20 text-xl'>Sign Up With Google</h1>
                    </Link>
            </div>
        </form>
    );
};

export default Login;