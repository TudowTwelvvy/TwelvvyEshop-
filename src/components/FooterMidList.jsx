import React from 'react'

function FooterMidList({title, listItem}) {
 
  return (
    <div className=" w-full h-full">
      <div className='flex flex-col mx-4'>
             <h3 className=' text-lg tracking-wide titleFont border-b-[2px] border-b-gray-500 mb-4'>{title}</h3>
              <div className='flex flex-col tracking-wide leading-5'>

                {
                  listItem.map((item)=> item.listData.map((data, index)=>{
                    return (
                      <p className='footerLink' key={index}>{data}</p>
                    )
                  }))
                }
                
              </div>
       </div>
    </div>
  )
}

export default FooterMidList