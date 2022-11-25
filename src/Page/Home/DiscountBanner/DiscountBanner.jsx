import React from 'react';
import { WiDirectionLeft } from "react-icons/wi";
import Countdown from "react-countdown";

const DiscountBanner = () => {
    const Completionist = () => <span>Offer is Over</span>;

    return (
        <div className='div lg:py-0 md:py-10 py-20 px-5 mt-20 md:px-10 lg:px-20 bg-slate-100 flex justify-between items-center'>
            <div>
                <h1 className='md:text-4xl lg:text-5xl text-2xl font-bold'>SignUp to Get <span className='text-[#1185de]'>50% OFF</span></h1>
                <p className='my-10'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced for those. Sections <br /><span className='hidden lg:inline-block md:inline-block'>1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum</span></p>
                    <Countdown className='text-[#1185de] lg:text-7xl md:text-5xl text-3xl' date={Date.now() + 1000000000}>
                        <Completionist />
                    </Countdown><br />
                    <button className='flex mt-10 bg-[#1185de] hover:ml-3 hover:bg-[#00589b] rounded-md py-2 px-5'><p className='text-white text-xl'>Sign Up</p>
                    <WiDirectionLeft className='text-3xl rotate-180	text-white'/></button>
            </div>
            <div>
                <img className='hidden md:inline-block lg:inline-block' src="https://i.postimg.cc/50DrvgfT/comdown2-copy.png" alt="" />
            </div>
        </div>
    );
};

export default DiscountBanner;