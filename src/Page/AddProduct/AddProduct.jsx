import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    return (
        <form>
            <div className='lg:w-full mx-auto p-20 border-2 rounded-md'>
                <div className='flex flex-col justify-center'>
                    <input type='text' required placeholder='Enter Your Product Category' name='Category' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product Name' name='productName' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product New Price' name='brandNewPrice' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product Resell Price' name='reSellPrice' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input required type="file" name="imageFile" className='mb-5 w-full border border-[#1185de] block' id="" />
                    <input type='text' required placeholder='Enter Your Product Used Year' name='usedYear' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product Condition' name='condition' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <textarea className="textarea  bg-white mb-5 w-full border border-[#1185de] block" required placeholder="Enter Your Product Details"></textarea>
                    <input type='text' required placeholder='Enter Your Product Upload Date' name='uplodeDate' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required readOnly defaultValue='Rifat Islam' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product Seller Number' name='sellerNumber' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type='text' required placeholder='Enter Your Product Location' name='location' className=' bg-white mb-5 w-full border border-[#1185de] block' />
                    <input type="submit" value="Add Product" className='bg-black hover:bg-[#262626] text-white py-3 cursor-pointer' />
                </div>
            </div>
        </form>
    );
};

export default AddProduct;