import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import AllCarts from './AllCarts';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [user?.email])

    const handleDelete = id =>{

        const proceed = window.confirm('Are You Sure');

        if(proceed){
            fetch(`http://localhost:5000/cart/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deleteCount > 0){
                    alert('Successfully Deleted')
                    const rem = carts.filter(car => car._id !== id)
                    setCarts(rem)
                }
            })
        }
    }

    return (
        <div className="overflow-x-auto w-full my-10 mx-5 md:mx-20 lg:mx-[100px]">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map(c => <AllCarts key={c._id} c={c} handleDelete={handleDelete}/>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Cart;