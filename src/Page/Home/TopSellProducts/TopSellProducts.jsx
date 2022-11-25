import React from 'react';

const TopSellProducts = () => {
    
    return (
        <div  className='my-28'>
           <div className='mb-14'>
           <h1 className='text-center text-5xl font-bold'>Top Selling</h1>
            <div className='border-b-4 mt-2 rounded-md border-b-[#1185de] w-44 mx-auto'></div>
           </div>
            <div className='grid lg:grid-cols-3 lg:gap-20 md:gap-10 gap-5 md:grid-cols-2 items-center justify-around'>
            <div className='flex flex-col items-center justify-center rounded-md bg-slate-100 py-5'>
                <div className=''>
                    <img className='inline-block' src="https://i.postimg.cc/CMkR2RRN/i4.png" alt="" />
                </div>
                <div className=''>
                    <h1>IPHONE XS MAX</h1>
                    <p>Price: 50000tk</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center rounded-md bg-slate-100 py-5'>
                <div className=''>
                    <img className='w-full inline-block' src="https://i.postimg.cc/SRwwRjwW/8.png" alt="" />
                </div>
                <div className=''>
                    <h1>REALME Narzo 20 PRO</h1>
                    <p>Price: 16000TK</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center rounded-md bg-slate-100 p-5'>
                <div className=''>
                    <img className='w-full inline-block' src="https://i.postimg.cc/bNRBKzTV/2.png" alt="" />
                </div>
                <div className=''>
                    <h1>OPPO A3S PRO 5G</h1>
                    <p>Price: 12000tk</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TopSellProducts;