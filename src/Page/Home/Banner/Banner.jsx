import React from 'react';
import { WiDirectionLeft } from "react-icons/wi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

const Banner = () => {
    return (
        <Swiper modules={[Autoplay]} 
        autoplay={{ delay: 2000 }}
        className="mySwiper">
            <SwiperSlide>
                <div className='lg:flex lg:mt-[120px] justify-between items-center'>
                <div>
                    <p className='pb-4 pl-1 text-[#1185de] text-xl font-semibold'>Used Phone</p>
                    <h1 className='text-5xl font-bold'>I PHONE 14 PRO MAX</h1>
                    <p className='py-5'>IPhone 14 Pro and iPhone 14 Pro Max, pushing the boundaries of what’s possible in a smartphone. <br /><span className='lg:inline-block md:inline-block hidden'> Redesigned inside and out, both models introduce an all-new Super Retina XDR display</span></p>
                    <div className='flex items-center'>
                    <p className='text-[#1185de] text-xl'>Shop Now</p>
                    <WiDirectionLeft className='text-3xl rotate-180	text-[#1185de]'/>
                    </div>
                </div>
                <img className='lg:w-[35%] w-full md:w-full' src="https://i.postimg.cc/85WzxYz5/i-2.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='lg:flex lg:my-[120px] justify-between items-center'>
                <div>
                    <p className='pb-4 pl-1 text-[#1185de] text-xl font-semibold'>Used Phone</p>
                    <h1 className='text-5xl font-bold'>SAMSUNG GALAXY S22 ULTRA</h1>
                    <p className='py-5'>Samsung Galaxy S21 Ultra the best camera phone of 2021, and we’ve been equally impressed with the Galaxy <br /> <span className='lg:inline-block md:inline-block hidden'>S22 Ultra so far. But the proof of the pudding is in the eating, so how does the phone stack up <br /> against the very best competitors?</span></p>
                    <div className='flex items-center'>
                    <p className='text-[#1185de] text-xl'>Shop Now</p>
                    <WiDirectionLeft className='text-3xl rotate-180	text-[#1185de]'/>
                    </div>
                </div>
                <img className='lg:w-[40%] w-full md:w-full' src="https://i.postimg.cc/g02RFmC0/s3.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='lg:flex lg:mt-[120px] justify-between items-center'>
                <div>
                    <p className='pb-4 pl-1 text-[#1185de] text-xl font-semibold'>Used Phone</p>
                    <h1 className='text-5xl font-bold'>OPPO A5</h1>
                    <p className='py-5'>OPPO A5 2020 (A5) fits five separate cameras into a single smartphone. A 12MP rear main lens for maximum <br /><span className='lg:inline-block md:inline-block hidden'>photo resolution. An Ultra Wide 119° rear lens for panoramic pictures. Two rear lenses that provide artistic portrait effects. <br />  And a 8MP front lens featuring AI Beautification.</span></p>
                    <div className='flex items-center'>
                    <p className='text-[#1185de] text-xl'>Shop Now</p>
                    <WiDirectionLeft className='text-3xl rotate-180	text-[#1185de]'/>
                    </div>
                </div>
                <img className='lg:w-[25%] md:w-[75%] w-[75%]' src="https://i.postimg.cc/YS04D8FG/o3.png" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;