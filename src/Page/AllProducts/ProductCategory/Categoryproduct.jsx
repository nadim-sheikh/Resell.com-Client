import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../AllProducts/product';

const Categoryproduct = () => {
    const categoryProducts = useLoaderData()
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {
                    categoryProducts?.map(produc => <Product key={produc._id} produc={produc} />)
                }
        </div>
    );
};

export default Categoryproduct;