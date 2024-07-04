import React from 'react'
import { emptyImg } from '../assets'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function EmptyCart() {
  return (
    <motion.div initial ={{y:70, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.5, duration:0.5}} className='w-full flex justify-center items-center h-full '>

      <div className='w-[60%] flex justify-center items-center h-full p-3 m-3 max-lg:flex-col'>
        <div>
        <img src={emptyImg} alt="emptyimage" className='h-56 w-56' />
        </div>
        <div className='bg-white shadow-2xl p-4 rounded-lg w-[60%] max-lg:w-full'>
         <h1 className='font-bold text-3xl capitalize tracking-wide text-red-500'>Your Cart feels lonely.!</h1>
         <p className='tracking-wide text-lg'>Your Shooping Cart Lives To Serve. Give it Purpose... Fill it With books, electronics, videos,etc, and make it happy.</p>
         <Link to="/"> <button className='w-full  text-white font-medium text-base bg-gradient-to-tr from-zinc-800 to-zinc-600 border hover:from-zinc-600 hover:to-zinc-800 active:bg-black duration-200 py-2 rounded-md mt-3'>Continue Shopping</button></Link>
      
      </div>
    </div>
      
      
      
    </motion.div>
  )
}

export default EmptyCart