import React, { useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { logo } from '../assets'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { motion } from 'framer-motion';
import { RotatingLines } from 'react-loader-spinner'

function Register() {
  const navigate = useNavigate()
  const auth = getAuth();
  const [clientName,setClientName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [conPassword,setConPassword] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errConPassword, setErrConPassword] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const [succMsg, setSccMsg]=useState("")

  const handleName=(e)=>{
    const {value} = e.target;
     setClientName((prev)=>{
        return prev=value
      })
      setErrClientName("")
    
  }
  const handleEmail=(e)=>{
    const {value} = e.target;
    setEmail((prev)=>{
      return prev=value
    })
    setErrEmail("")
  }

  const handlePass=(e)=>{
    const {value} = e.target;
    setPassword((prev)=>{
      return prev=value
    })
    setErrPassword("")
  }

  const handleConPas=(e)=>{
    const {value} = e.target;
    setConPassword((prev)=>{
      return prev=value
    })
    setErrConPassword("")
  }

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };


  const handleRegisterClick=(e)=>{
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email");
      setFirebaseErr("")
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email");
      }
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else {
      if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
    }
    if (!conPassword) {
      setErrConPassword("Confirm your password");
    } else {
      if (conPassword !== password) {
        setErrConPassword("Password not matched");
      }
    }

    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      conPassword &&
      conPassword === password
    ) {
     
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        updateProfile(auth.currentUser,{
          displayName:clientName,
          photoURL:""

        })
        // Signed up 
        const user = userCredential.user;
        
        setIsLoading(false)
        setSccMsg("Account Created Successfullly")
        setTimeout(()=>{
          navigate("/signin")
        },3000)
       // ...
      }).catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
         // ..
           if(errorCode.includes("auth/email-already-in-use")){
            setFirebaseErr("Email Already in use, try another one")
           }
       });
      setClientName("");
      setEmail("");
      setPassword("");
      setConPassword("");
      setErrConPassword("");
      setFirebaseErr("")
    }
  }
  return (
    <div className='w-full'>
      <div className='w-full pb-10'>
        <form className='w-[350px] mx-auto flex flex-col items-center pb-4'>
          <Link to="/"><div className=" relative w-[230px]  border border-transparent hover:border-gray-500 m-2">
            <div className="flex  justify-start  -mr-[2px]  m-2 ">
                <img src={logo} alt="logo" className="w-[100px] h-[70px] object-contain max-lg:w-[60px]  "/>

                <h1 className="text-xl font-semibold text-red absolute  mt-[32px] ml-2 right-0 bottom-[30px] max-lg:right-6">Twelvvy<span className="text-red-500 text-3xl">E</span>Shop.</h1>
            </div>
          </div></Link>
          <div className='w-full border border-gray-500 p-6'>
            <h2 className='font-titleFont text-xl font-medium mb-4'>Create Accout</h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Your Name</p>
                <input type="text" className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-blue-500 focus-within:shadow-2xl duration-100' value={clientName} onChange={handleName}/>
                {
                  errClientName&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errClientName}</p>
                  )
                }
              </div>
              
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Email or Phone Number</p>
                <input type="email" className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-blue-500 focus-within:shadow-2xl duration-100' value={email} onChange={handleEmail}/>
                {
                  errEmail&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errEmail}</p>
                  )
                }
                {
                  firebaseErr&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{firebaseErr}</p>
                  )
                }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Password</p>
                <input type="password" className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-blue-500 focus-within:shadow-2xl duration-100' value={password} onChange={handlePass}/>
                {
                  errPassword&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errPassword}</p>
                  )
                }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Re-enter Password</p>
                <input type="password" className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-blue-500 focus-within:shadow-2xl duration-100' value={conPassword} onChange={handleConPas}/>
                {
                  errConPassword&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>{errConPassword}</p>
                  )
                }
                {!errConPassword && <p className='text-xs text-gray-600'>Passwords must be at least 6 characters</p>}
              </div>
              <button className='w-full  text-white font-medium text-base bg-gradient-to-tr from-zinc-800 to-zinc-600 border hover:from-zinc-600 hover:to-zinc-800 active:bg-black duration-200 py-2 rounded-md mt-3' onClick={handleRegisterClick}>Continue</button>
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
              {
                succMsg && (
                  <div>
                    <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}} className='text-base font-titleFont font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center'>{succMsg}</motion.p>
                  </div>
                )
              }
            </div>
            <p className="text-sm text-black leading-4 mt-4">By Continuing, you agree to TwelvvyEshop's <span className='text-blue-500'>Conditions of Use</span> and <span className='text-blue-500'>Privace Notice.</span></p>
            <p className='text-xs text-gray-600 mt-4 cursor-pointer group flex  items-center gap-1'><FaRegArrowAltCircleRight className='text-[14px]'/> <span className='text-blue-500 group-hover:text-red-500 group-hover:underline'>Need Help?</span></p>
            <div className='flex '>
              <p className='flex items-center gap-1 text-xs'>Already have an account? <span><FaRegArrowAltCircleRight/> </span> <Link to="/signin"><span className='text-blue-500 hover:text-red-500 hover:underline cursor-pointer'>Sign in</span></Link></p>
            </div>
            <div className='flex '>
              <p className='flex items-center gap-1 text-xs'>Buying for work? <span><FaRegArrowAltCircleRight/> </span><span className='text-blue-500 hover:text-red-500 hover:underline cursor-pointer'>Create a free bussiness account</span></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register