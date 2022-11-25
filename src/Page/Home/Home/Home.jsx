import React from 'react';
import Banner from '../Banner/Banner';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import TopSellProducts from '../TopSellProducts/TopSellProducts';

const Home = () => {
    return (
        <div className='mx-5 md:mx-20 lg:mx-[100px]'>
            <Banner />
            <TopSellProducts />
            <DiscountBanner />
            <CompanyLogo />
        </div>
    );
};

export default Home;