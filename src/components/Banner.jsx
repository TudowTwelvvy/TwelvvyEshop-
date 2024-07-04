import React, { useState } from 'react'

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { bannerImgFour, bannerImgOne, bannerImgThree, bannerImgTwo } from '../assets';

const list = [bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour, ]

function Banner() {
  const [banners, setBanners] = useState(list);
  const [index, setIndex] = useState(0);

  

  const handleNextClick=()=>{
    setIndex((prev)=>{
      if(prev<banners.length-1){
        return prev = prev+1
      }else{
        return prev= 0
      }
    })
  }
  const handlePrevClick=()=>{
    setIndex((prev)=>{
      if(prev>0){
        return prev = prev-1
      }else{
        return prev= banners.length-1
      }
    })
    setCurrent()
  }
  
  

  return (
    <div className='w-full  h-[30rem] relative'>
      <div className='bg-black text-white h-[50px] w-[50px] rounded-full flex justify-center items-center bg-opacity-6 absolute top-40 bg-opacity-60 cursor-pointer border border-transparent hover:border-white hover:h-[56px] hover:w-[56px] duration-100 m-3' onClick={handlePrevClick}>
        <FaArrowLeft/>
      </div>
      <img src={banners[index]} alt="banner" className=' '  />
      <div className='bg-black text-white h-[50px] w-[50px] rounded-full flex justify-center items-center bg-opacity-60 absolute top-40 right-0 cursor-pointer border border-transparent hover:border-white hover:h-[56px] hover:w-[56px] duration-100 m-3' onClick={handleNextClick} >
        <FaArrowRight/>
      </div>
      
    </div>
  )
}

export default Banner