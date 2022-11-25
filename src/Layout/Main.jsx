import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer';
import Nav from '../Page/Shared/Nav';

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;