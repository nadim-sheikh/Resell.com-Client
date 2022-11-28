import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import { AuthContext } from '../../Context/AuthProvider';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const handleAddProduct = (e) => {
        e.preventDefault();


        const productImage = e.target.productImage.files[0];
        const imgbb = process.env.REACT_APP_imageHostKey;
        const formData = new FormData()
        formData.append('image', productImage)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbb}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(img => {
            console.log();
                const productDtls = {
                    category: e.target.category.value,
                    productName: e.target.productName.value,
                    brandNewPrice: e.target.brandNewPrice.value,
                    reSellPrice: e.target.reSellPrice.value,
                    usedYear: e.target.usedYear.value,
                    condition: e.target.condition.value,
                    details: e.target.details.value,
                    uplodeDate: e.target.uplodeDate.value,
                    sellerNumber: e.target.sellerNumber.value,
                    location: e.target.location.value,
                    sellerName: e.target.sellerName.value,
                    productImage: img.data.display_url
                }
                fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDtls)
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success(`${productDtls.productName} Added Successfully`)
            navigate('/admin')
        })
        })

    }
   
    return (
        <form onSubmit={handleAddProduct}>
            <div className='lg:w-full md:w-[741px] w-[310px] md:mx-0 md:mt-5 lg:mx-auto lg:p-20 md:p-10 p-0 border-2'>
                <div className='flex flex-col justify-center'>
                    <input type='text' required placeholder='Enter Your Product Company Name' name='category' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product Name' name='productName' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product New Price' name='brandNewPrice' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product Resell Price' name='reSellPrice' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input required type="file" name="productImage" className='mb-5 w-full border border-[#1185de] block' id="" />
                    <input type='text' required placeholder='Enter Your Product Used Year' name='usedYear' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <span className="label-text mb-2 font-semibold">Select Your Product Condition</span>
                    <select required name='condition' className="select w-full mb-5 rounded-none border border-[#1185de] block">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    <textarea name='details' className="textarea  bg-white mb-5 w-full border border-[#1185de] block" required placeholder="Enter Your Product Details"></textarea>
                    <DatePicker name='uplodeDate' required selected={startDate} onChange={(date = Date) => setStartDate(date)} className='bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' name='sellerName' required disabled defaultValue={user?.displayName} className='bg-gray-200 mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product Seller Number' name='sellerNumber' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product Location' name='location' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type="submit" value="Add Product" className='bg-black hover:bg-[#262626] text-white py-3 cursor-pointer' />
                </div>
            </div>
        </form>
    );
};

export default AddProduct;