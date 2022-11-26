import React from 'react';

const AllCarts = ({c,handleDelete}) => {
    const {productImage,productName,reSellPrice,_id}=c;


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={productImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
            {productName}
            </td>
            <th>
            {reSellPrice}
            </th>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-error btn-xs">DELETE</button>
            </th>
        </tr>
    );
};

export default AllCarts;