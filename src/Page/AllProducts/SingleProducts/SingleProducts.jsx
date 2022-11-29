import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const SingleProducts = () => {
    const {productName,location,uplodeDate,brandNewPrice,reSellPrice,productImage,usedYear,condition,details,sellerName,sellerNumber,_id} =useLoaderData();
    const {user}= useContext(AuthContext)
    const handleCart = ()=>{
        const add = {
            productImage: productImage,
            email:user.email,
            productName:productName,
            reSellPrice:reSellPrice,
            id:_id
        }
        console.log(add);
        fetch('https://y-one-pied.vercel.app/cart',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)})
            .then(res => res.json)
            .then(data => console.log(data)).catch(err=>console.log(err))
            toast.success('Cart Added Successfully')
    }
    return (
        <div className='mx-5 lg:mx-0 md:mx-0'>
            <div className='lg:flex md:flex justify-center items-center mt-10 mb-5'>
                <div><img className='h-[700px]' src={productImage} alt="" /></div>
                <div className='ml-5'>
                    <h1 className='text-xl lg:text-5xl md:text-3xl mb-2 md:mb-5 lg:mb-5 font-bold text-[#1185de]'>{productName}</h1>
                    <p className='text-xl lg:text-3xl md:text-2xl lg:mb-5 mb-2 text-gray-700 font-bold'>Used Price:  {reSellPrice}</p>
                    <p className='text-xl lg:mb-5 mb-2 text-gray-700 font-bold'>New Price: {brandNewPrice}</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Used: </span> {usedYear}</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Condition: </span> {condition}</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Seller Name: </span> {sellerName}</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Seller Phone: </span> {sellerNumber}</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Product Uploade: </span> {uplodeDate}</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Location: </span>{location}</p>
                    <button onClick={handleCart} className='mt-5 py-2 px-4 rounded bg-[#1185de] text-white'>Add To Cart</button>
                </div>
            </div>
            <p className='text-center text-5xl text-[#1185de] mb-2'>Deities</p>
            <div  className='w-[50rem] inline mx-5 lg:mx-auto md:mx-5 '>
            <p className='w-[50rem] mx-auto text-xl inline'><span className='text-[#1185de] font-semibold'></span>{details}</p>
            </div>
        </div>
    );
};

export default SingleProducts;