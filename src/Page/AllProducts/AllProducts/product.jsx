import React from 'react';
import { Link } from 'react-router-dom';

const product = ({ produc }) => {
    const { productName,productImage,condition,_id} = produc;
    return (
        <div className="card w-96 h-[100%] bg-base-100 shadow-xl">
            <figure className='h-96'><img className='w-[70%]' src={productImage} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productName}
                    <div className="badge badge-secondary">Used</div>
                </h2>
                <div className="card-actions justify-between items-center">
                    
                <div className="card-actions">
                    <Link to={`/product/${_id}`} className="py-2 px-4 rounded text-white hover:bg-[#005fa8] bg-[#1185de]">Buy Now</Link>
                </div>
                    <div>
                    <div className="badge badge-outline badge-secondary mr-1">Mobile</div>
                    <div className="badge badge-outline">{condition}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default product;