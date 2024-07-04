import { logo, saFlag } from "../assets"
import { middleList } from "../constants"
import FooterMidList from "./FooterMidList"



function FooterMid() {
  return (
    <div className='w-full bg-zinc-800 text-white '>
      <div className='w-full border-b-[1px] border-gray-500 py-10 '>
        <div className='max-w-5xl mx-auto text-gray-300'>
          <div className="max-full grid grid-cols-4  place-items-center items-start max-lg:grid-cols-2 gap-2 max-lg:items-end ">

            {
              middleList.map((item)=>{
                return(
                  <FooterMidList key={item._id} {...item}/>
                )
              })
            }
          </div>

            
        </div>
      </div>

      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div className=" relative w-[230px]">
          <div className="flex  justify-start  -mr-[2px]  m-2 ">
              <img src={logo} alt="logo" className="w-[100px] h-[70px] object-contain"/>

              <h1 className=" text-xl font-semibold text-red absolute  mt-[32px] ml-2 right-0 bottom-[30px] ">Twelvvy<span className="text-red-500 text-3xl">E</span>Shop.</h1>
          </div>
        </div>
         
        <div className="flex gap-2 ">
          <p className=" items-centerjc
          border border-gray-500 p-[0.15rem] hover:p-1 cursor-pointer duration-200">English</p>
          
        </div>

        <div className="ml-4">
          <img src={saFlag} alt="south african flag" className="w-[50px]"/>
        </div>
      </div>
    </div>
   
  )
}

export default FooterMid