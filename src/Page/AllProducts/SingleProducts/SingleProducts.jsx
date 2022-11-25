import React from 'react';

const SingleProducts = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div><img src="https://i.postimg.cc/fb1b2sZp/i.png" alt="" /></div>
                <div className='ml-5'>
                    <h1 className='text-5xl mb-5 font-bold text-[#1185de]'>Product Title</h1>
                    <p className='text-3xl mb-5 text-gray-300 font-bold'>$100</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Years: </span> 2.5 Years</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Seller Name: </span> Rifat Islam</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Seller Phone: </span> 01306872487</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Product Uploader: </span> 11 NOV 2022</p>
                    <p className='mb-2 '><span className='text-[#1185de] font-semibold'>Location: </span>Dhaka,Bangladesh,Faridpur</p>
                    <button className='mt-5 py-2 px-4 rounded bg-[#1185de] text-white'>Add To Cart</button>
                </div>
            </div>
            <p className='w-[50rem] mx-auto'><span className='text-[#1185de] font-semibold'>Deities: </span>The iPhone 13 Pro Max is Apple's biggest phone in the lineup with a massive, 6.7 screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling. The benefit of such a gigantic phone is that it also comes with the biggest battery of all iPhone 13 series. Apple also introduces improvements to all three cameras on the Pro Max, the wide, ultra-wide and telephoto zoom ones, but there is no periscope style long-range zoom like on many Android phones.</p>
        </div>
    );
};

export default SingleProducts;