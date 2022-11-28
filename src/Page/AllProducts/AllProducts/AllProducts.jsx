import './product.css';
import Product from './product';
import ProductsFilterBars from '../ProductsFilterBars/ProductsFilterBars';
import { useEffect, useState } from 'react';
import  Spinner  from '../../../Components/Spinner/Spinner';


const AllProducts = () => {
    const [loading, setLoading] = useState(true);
    const [products,setData]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
    },[])
    return (
        <div className='custom-css my-20 mx-5 md:mx-20 lg:mx-[100px]'>
            <ProductsFilterBars />
            <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    loading?<Spinner/>: 
                    products?.map(produc => <Product key={produc._id} produc={produc} />)
                
                }
            </div>
        </div>
    );
};

export default AllProducts;