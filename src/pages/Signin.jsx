import React, { useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { logo } from '../assets'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth"
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/twelvvySlice';


function Signin() {
  
  const auth = getAuth();

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [userErrEmail, setUserErrEmail] = useState("");
  const [userErrPassword, setUserErrPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false)
  const [succMsg, setSccMsg]=useState("")

  const handleEmail = (e) => {
    const{value}=e.target
    setEmail(value);
    setErrEmail("");
 
  };
  const handlePassword = (e) => {
    const{value}=e.target
    setPassword(value);
    setErrPassword("");
    
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
      setUserErrEmail("")
    }
    if (!password) {
      setErrPassword("Enter your password");
      setUserErrPassword("")
    }
    if (email && password) {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
         // Signed up 
         const user = userCredential.user;
         
         // ...
         console.log(user)
         dispatch(setUserInfo({
          _id:user.uid,
          userName:user.displayName,
          email:user.email,
          image:user.photoURL,
         }))

         setIsLoading(false)

         setSccMsg("Logged in Successfully! Welcome back!")
         
         setTimeout(()=>{
          navigate("/")
        },3000)
        
      })
       .catch((error) => {
        setIsLoading(false)
         const errorCode = error.code;
         if(errorCode.includes("auth/invalid-email")){
          setUserErrEmail("Invalid Email")
         }
         if(errorCode.includes("auth/wrong-password")){
          setUserErrPassword("Wrong password! try again")
         }
         
         
       });
      setEmail("")
      setPassword("")
    }
  };

  return (
    <div className='w-full '>
      <div className='w-full bg-white flex-1'>
        { succMsg ?(
          <div className='w-full flex justify-center items-center py-32'>
            <p className='border-[1px] border-green-500 font-titleFont text-lg font-semibold px-6 py-2'>{succMsg}</p>
          </div>
        ):(
        <form className='w-[350px] mx-auto flex flex-col items-center pb-4'>
          <Link to="/"><div className=" relative w-[230px]  border border-transparent hover:border-gray-500 m-2">
            <div className="flex  justify-start  -mr-[2px]  m-2 ">
                <img src={logo} alt="logo" className="w-[100px] h-[70px] object-contain max-lg:w-[60px]  "/>

                <h1 className="text-xl font-semibold text-red absolute  mt-[32px] ml-2 right-0 bottom-[30px] max-lg:right-6">Twelvvy<span className="text-red-500 text-3xl">E</span>Shop.</h1>
            </div>
          </div></Link>
          <div className='w-full border border-gray-500 p-6 '>
            <h2 className='font-titleFont text-3xl font-medium mb-4'>sign in</h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Email or Mobile phone number</p>
                <input type="email" className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-blue-500 focus-within:shadow-2xl duration-100' value={email} onChange={handleEmail} />
                {errEmail && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      {errEmail}
                    </p>
                  )}
                  {userErrEmail && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      {userErrEmail}
                    </p>
                  )}
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Password</p>
                <input type="password" className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-blue-500 focus-within:shadow-2xl duration-100' value={password} onChange={handlePassword}/>
                {errPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      {errPassword}
                    </p>
                  )}
                  {userErrPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      {userErrPassword}
                    </p>
                  )}
              </div>
              <button className='w-full  text-white font-medium text-base bg-gradient-to-tr from-zinc-800 to-zinc-600 border hover:from-zinc-600 hover:to-zinc-800 active:bg-black duration-200 py-2 rounded-md mt-3' onClick={handleLogin}>Continue</button>
              {
                isLoading&&(
                  <div className='flex justify-center '>
                    <RotatingLines
                       visible={true}
                       height="50"
                       width="50"
                       color="green"
                       strokeWidth="5"
                       animationDuration="0.75"
                       ariaLabel="rotating-lines-loading"
                       wrapperStyle={{}}
                       wrapperClass=""
                     />

                  </div>
                )
                  
              }
            </div>
            <p className="text-sm text-black leading-4 mt-4">By Continuing, you agree to TwelvvyEshop's <span className='text-blue-500'>Conditions of Use</span> and <span className='text-blue-500'>Privace Notice.</span></p>
            <p className='text-xs text-gray-600 mt-4 cursor-pointer group flex  items-center gap-1'><FaRegArrowAltCircleRight className='text-[14px]'/> <span className='text-blue-500 group-hover:text-red-500 group-hover:underline'>Need Help?</span></p>
            
          </div>
          <p className='w-full text-xs text-gray-600 mt-4 flex items-center'>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
            <span className='w-1/3 text-center'>New to TwelvvyEshop</span>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
          </p>
          <Link className='w-full' to="/signup"><button className='w-full  text-black font-medium text-base  border border-gray-500 hover:bg-green-800 hover:text-white active:bg-gray-700 duration-200 py-2 px-2 rounded-md mt-3' >Create Your TwelvvyEshop Account</button></Link>
        </form>)}
      </div>
      
    </div>
  )
}

export default Signin