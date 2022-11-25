import React from 'react';
import { Link } from 'react-router-dom';

const product = ({ p }) => {
    const { productName, productImage } = p
    return (
        <Link>
            <div className="card w-96 h-[100%] bg-base-100 shadow-xl">
                <figure><img className='w-[70%]' src={productImage} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {productName}
                        <div className="badge badge-secondary">Used</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Mobile</div>
                        <div className="badge badge-outline">Used</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default product;