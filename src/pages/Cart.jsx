import React, { useEffect, useState } from 'react'
import { MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem,resertCart,incrementQuan, decrementQuan } from '../redux/twelvvySlice';
import EmptyCart from '../components/EmptyCart';

function Cart() {
  const dispatch = useDispatch()
  const products = useSelector((state)=>state.twelvvy.products)
  const [totalPrice,setTotalPrice]=useState(0)

  useEffect(()=>{
    let total = 0;
    products.map((item)=>{
      total += item.price*item.quantity
      return setTotalPrice(total)
    })
  },[products])

  return (
    <div className='w-full bg-gray-100 p-4'>
      
      {
        products.length > 0 ? (<div className='container mx-auto h-auto grid gap-8 grid-cols-5 max-lg:grid-cols-1 bg-white'>
            <div className='w-full h-full  px-4 bg-white col-span-4'>
          <div className='font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
            <h2 className="text-3xl font-medium">Shopping Cart</h2>
            <h4 className='text-xl font-normal'>Subtitle</h4>
          </div>
          <div>
            {
              products.map((item)=>{
                
                const {id,title,description,image,price,quantity} = item
                return(
                  <div key={id} className='w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6 '>
                    
                    <div className=' flex items-center   flex-1'>
                    <div className='w-1/5'>
                      <img src={image} alt={`${title}`} className='w-full h-44 object-contain'/>
                    </div>
                    <div className='flex flex-col justify-start w-full pl-4 gap-4'>
                    <div>
                      <h2 className='font-semibold text-lg'>{title}</h2>
                      <p className='pr-10 text-sm'>{description.substring(0,200)}...</p>
                      <p className='text-base'>Unit Price <span className='font-semibold'>R {price}</span></p>
                    </div>

                    <div className='bg-[#f0f2f2] flex justify-center items-center garp-1 w-24 py-1 text-center drop-shadow-lg rounded-md hover:bg-gray-200 duration-300' >
                      <p className='font-semibold mr-1'>Qty:{" "}</p>
                      <p className='cursor-pointer text-xl text-center bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300' onClick={()=>dispatch(decrementQuan(id))}>-</p>
                      <p className='font-medium m-1'>{quantity}</p>
                      <p className='cursor-pointer text-xl text-center bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300' onClick={()=>dispatch(incrementQuan(id))}>+</p>
                    </div>
                    <button onClick={()=>dispatch(deleteItem(id))} className='bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>Delete Item</button>
                    
                    </div>
                    </div>
                    
                    <div>
                    <p className='text-lg font-titleFont font-semibold'>R {(price*quantity).toFixed(2)}</p>
                    </div>
                    
                 </div>
                   
                )
              })
            }
          </div>
          <div className='w-full flex items-center justify-center'>
            <button onClick={()=>dispatch(resertCart())} className="m-4 px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide">Clear All</button>
          </div>
        </div>
        <div className="max-lg:ml-20 border-[1px] border-gray-500 mt-4 pt-4">
        <div className='w-full h-52 flex flex-col items-center p-4  col-span-1 justify-center max-lg:ml-auto'>
          <div>
            <p className='flex gap-2 items-start text-sm'><span><MdVerified className='text-green-500 text-xl'/></span> Your order qualifies for FREE Shipping Choose this option at checkout. See details..</p>
          </div>
          <div className='font-semibold px-10 py-1 flex items-center justify-between'>
          <p>Total: <span className='text-lg font-bold '>R {totalPrice.toFixed(2)}</span></p>
        </div>
        <button className='w-full  text-white font-medium text-base bg-gradient-to-tr from-green-800 to-green-600 border hover:from-green-600 hover:to-green-800 active:bg-green-900 duration-200 py-2 rounded-md mt-3'>Proceed to Buy</button>
        </div>
        </div>
        
        
      </div>) : <EmptyCart/>
      }
    </div>
        
        
  )
}

export default Cart