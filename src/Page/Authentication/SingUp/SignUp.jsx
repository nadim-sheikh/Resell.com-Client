import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import SmallSpinner from '../../../Components/Spinner/SmallSpinner';

const SignUp = () => {

    const { createUser, updateUserProfile, providerLogin,user } = useContext(AuthContext);
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
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            accountType: e.target.accountType.value
        };
        // I M A G E H O S T I N G-------------------------
        const photo = e.target.imageFile.files[0];
        const imgbb = process.env.REACT_APP_imageHostKey;
        const formData = new FormData()
        formData.append('image', photo)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbb}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                createUser(userData.email, userData.password)
                    .then((result) => {
                        const user = result.user;
                        const userInfo = {
                            displayName: userData.name,
                            photoURL: imgData.data.display_url,
                        }
                        updateUserProfile(userInfo)
                            .then(() => { }).catch((error) => console.error(error));
                        saveUser(userData.name, userData.email, userData.accountType)
                        toast.success('Sign Up Successfully')
                        console.log(user);
                    })
                    .catch((err) => console.error(err));
            }).catch(err => console.log(err))
        // I M A G E H O S T I N G------------------------------------
    }

    const saveUser = (name, email, accountType) => {
        const userId = { name, email, accountType };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userId)
        }).then(res => res.json())
        .then(data => {
            getToken(email);
        })
    }

    const getToken = email=>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
                localStorage.setItem('token', data.accessToken)
                navigate('/')
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className=' lg:w-[30%] mx-auto my-32 py-32 px-20 border-2 rounded-md'>
                <h1 className='text-3xl font-bold text-center mb-5'>SIGN UP</h1>
                <div className='flex flex-col justify-center'>
                    <input required type='text' placeholder='Your Full Name' name='name' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input required type='email' placeholder='Your Email Address' name='email' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input required type="file" name="imageFile" className='mb-5 w-full border border-[#1185de] block' id="" />
                    <select name='accountType' className="select w-full mb-5 rounded-none border border-[#1185de] block">
                        <option>Admin</option>
                        <option>User Account</option>
                        <option>Seller Account</option>
                    </select>
                    <input required type='password' placeholder='Your Password' name='password' className=' bg-white mb-3 w-full border border-[#1185de] block' />
                    <Link to='/login' className='mb-4 underline'>Have An Account ?</Link>
                    <button type="submit" className='hover:bg-[#292929] bg-[#161616]  text-white py-3 cursor-pointer'>{user?.email ?<SmallSpinner/>:<p className='text-center'>SignUp</p>} </button>
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
            </div>
        </Form>
    );
};

export default SignUp;