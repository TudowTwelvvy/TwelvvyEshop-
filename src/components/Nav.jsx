import { logo } from "../assets"
import { BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useState } from "react";
import { allItems } from "../constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { PiSignOutBold } from "react-icons/pi";
import { userSignOut } from "../redux/twelvvySlice";



function Nav() {
  const auth = getAuth();
  const dispatch = useDispatch()
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state)=>state.twelvvy.products)
  const userInfo = useSelector((state)=>state.twelvvy.userInfo)
  console.log(userInfo)

  const handleAllClick =()=>{
    setShowAll((prev)=>{
      return !prev
    })
  }
  const handleLogOutClick =()=>{
    signOut(auth).then(() => {
       
       dispatch(userSignOut())
     }).catch((error) => {
      console.log(error)
      });
  }
  return (
    <div className=" flex flex-1 text-white px-2  items-center ">
      <Link to="/"><div className=" relative w-[230px] max-lg:w-[90px] border border-transparent hover:border-gray-500 m-2">
          <div className="flex  justify-start  -mr-[2px]  m-2 ">
              <img src={logo} alt="logo" className="w-[100px] h-[70px] object-contain max-lg:w-[60px] max-lg:h-[60px] "/>

              <h1 className="max-lg:hidden text-xl font-semibold text-red absolute  mt-[32px] ml-2 right-0 bottom-[30px] ">Twelvvy<span className="text-red-500 text-3xl">E</span>Shop.</h1>
          </div>
        </div></Link>



      <div className="h-10 rounded-lg flex flex-grow items-center bg-white relative py-2 ml-2 max-lg:w-[20%]">

        <span className="text-black border-r border-gray-500 px-2 cursor-pointer  font-semibold" onClick={handleAllClick}>All <span><IoMdArrowDropdown className="text-lg -mt-1"/></span></span>
        {
          showAll && (
            <div>
              <ul className="bg-white absolute left-0 -bottom-6 h-80 w-56 top-10 overflow-y-auto overflow-x-hidden border-[1px] border-gray-500 text-black p-2 flex flex-col gap-1 z-50">
                
                {
                  allItems.map((item)=>{
                    return(
                      <li key={item._id} className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-gray-500 cursor-pointer duration-200">
                        {item.title}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
        }

        
        <input type="text" className="flex flex-1 mx-2 outline-none text-base text-black" />
        <BsSearch className="text-black text-xl mr-2 cursor-pointer"/>

        
      </div>

      <div className="flex flex-1 items-center justify-evenly ml-2 -">
       <Link to="/signin">
         <div className="flex flex-col p-2  headerHover">
          {
            userInfo? <p className=" text-md text-gray-200 font-bold capitalize tracking-wide">{userInfo.userName}</p>: <p className=" max-lg:text-sm pl-0">Hello, sign in</p>
            
          }
            <p className="flex font-semibold items-center   max-lg:hidden">Accounts & lists{' '} <span><IoMdArrowDropdown className="text-[20px] "/></span></p>
          </div>
        </Link>

        <div className="max-lg:hidden flex flex-col items-start justify-center p-2 headerHover">
          <p>Returns</p>
          <p className="font-semibold ">& Orders</p>
        </div>
        <Link to="/cart"><div className="relative p-2 headerHover">
          <HiMiniShoppingCart className="text-white pr-3 h-10 w-10 max-lg:h-8 max-lg:w-8"/>
          <span className="rounded-full bg-blue-500 text-white h-[24px] w-[24px] text-centerf flex justify-center items-center absolute top-0 right-1 max-lg:h-[20px] max-lg:w-[20px]">{
            products.length> 0? products.length: 0
          }</span>
        </div></Link>

        {
          userInfo && (
            <div className="flex flex-col justify-center items-center headerHover relative text-red-500" onClick={handleLogOutClick}>
              <PiSignOutBold className="text-[25px]"/>
              <p className="max-lg:hidden  text-xs font-semibold ">Log Out</p>
            </div>
          )
        }
        
        
        
      </div>

      
      

    

    </div>
  )
}

export default Nav