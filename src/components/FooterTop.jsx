import React from 'react'

function FooterTop() {
  return (
    <div className='w-full bg-white py-6'>
      <div className='w-full border-t-[1px] border-b-[1px] py-8'>
        <div className='w-64 mx-auto text-center flex flex-col gap-1'>
          <p className='text-sm'>Seee Personalized recommendations</p>
          <button className='w-full bg-blue-500 rounded-md py-1 font-semibold cursor-pointer hover:bg-blue`-400 active:bg-blue-700'>Sign In</button>
          <p className='text-xs mt-1'>New Customer?{" "}
             <span className='text-blue-600 ml-1 cursor-pointer'>Start here.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterTop