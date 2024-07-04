import { ImCancelCircle } from "react-icons/im";
import { MdOutlineAccountCircle } from "react-icons/md";
import SidebarContent from "./SidebarContent";
import {motion} from 'framer-motion'
import { useSelector } from "react-redux";


function SidebarNav({handleSidebarClick}) {
  const userInfo = useSelector((state)=> state.twelvvy.userInfo)
  return (
    <div className="w-full h-screen text-white fixed top-0 left-0 bg-black bg-opacity-60 z-50">
            <div className="w-full h-full relative">
              <motion.div initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5}} className="w-[350px] h-full bg-zinc-800 border border-gray-500">
                <div className="w-full bg-black text-white py-2 px-6 flex items-center gap-4">
                    {
                      userInfo?(
                        <img src={userInfo.photoURL} alt="profilePhoto" className="w-10 h-10 rounded-full object-cover border border-gray-500" />
                      ):(
                        <MdOutlineAccountCircle className="text-[40px]"/>
                      )
                    }
                    

                    {
                      userInfo?(
                        <h3 className="font-semibold tracking-wider text-lg ">{userInfo.userName}</h3>
                      ):(
                        <h3 className="font-semibold ">Hello, Sign-in</h3>
                      )
                    }
                    
                  
                  
                  
                </div>

               <SidebarContent 
                  title="Digital Content & Devices"
                  one="Music"
                  two="E-readers & Books"
                  three="Appstore"/>

               <SidebarContent 
                 title="Shop By Department"
                 one="Electronics"
                 two="Computers"
                 three="Smart Home"/>
               <SidebarContent 
                  title="Programs & Features"
                  one="Gift Cards"
                  two="Smart Shopper"
                  three="International Shopping"/>
               <SidebarContent 
                  title="Help & Settings"
                  one="Your Account"
                  two="Customer Service"
                  three="Contact us" />
                <div onClick={handleSidebarClick} className="cursor-pointer">
                  <ImCancelCircle className="text-[30px] absolute z-50 top-0 left-[350px] mt-2 hover:text-red-500"/>
                </div>
              </motion.div>
              
              
            </div>
          </div>
  )
}

export default SidebarNav