import React from 'react';
import Marquee from "react-fast-marquee";


const CompanyLogo = () => {
    return (
       <div  className='my-20'>
       <h1 className='text-xl lg:text-5xl md:text-5xl font-bold text-center'>OUR WEBSITE PARTNER</h1>
       <div className='mb-5 md:mb-10 lg:mb-16  border-b-4 mt-2 rounded-md border-b-[#1185de] md:w-80 lg:w-80 w-40 mx-auto'></div>
        <Marquee>
            <div className='lg:w-[200px] md:w-[150px] w-[100px] ml-0 lg:ml-20 md:ml-10'>
                <img className='' src="https://i.postimg.cc/Y0QSn0Lb/2560px-Realme-realme-logo-box-RGB-01-svg.png" alt="" />
            </div>
            <div className='lg:w-[200px] md:w-[150px] w-[100px] ml-0 lg:ml-20 md:ml-10'>
                <img className='' src="https://i.postimg.cc/cLxJhsxB/iphone.png" alt="" />
            </div>
            <div className='lg:w-[200px] md:w-[150px] w-[100px] ml-0 lg:ml-20 md:ml-10'>
                <img className='' src="https://i.postimg.cc/NjdjPWLq/oneplus-logo-removebg-preview.png" alt="" />
            </div>
            <div className='lg:w-[200px] md:w-[150px] w-[100px] ml-0 lg:ml-20 md:ml-10'>
                <img className='' src="https://i.postimg.cc/v8nDHq2f/OPPO-LOGO-2019-svg.png" alt="" />
            </div>
            <div className='lg:w-[200px] md:w-[150px] w-[100px] ml-0 lg:ml-20 md:ml-10'>
                <img className='' src="https://i.postimg.cc/65Nq7rFS/Samsung-Galaxy-Logo.png" alt="" />
            </div>
            <div className='lg:w-[200px] md:w-[150px] w-[100px] ml-0 lg:ml-20 md:ml-10'>
                <img className='' src="https://i.postimg.cc/rFCm5dkp/Vivo-logo-2019-svg.png" alt="" />
            </div>
            <div className='lg:w-[200px] md:w-[150px] w-[100px] ml-0 lg:ml-20 md:ml-10'>
                <img className='' src="https://i.postimg.cc/R0bqqjzQ/Xiaomi-logo.png" alt="" />
            </div>
        </Marquee>
       </div>
    );
};

export default CompanyLogo;