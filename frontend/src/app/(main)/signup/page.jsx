import React from 'react';
import {BiUser} from "react-icons/bi";
import {AiOutlineUnlock} from 'react-icons/ai';


const signup = () => {
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{backgroundImage:"url('/loginBack.jpg')"}}>
        <div className=" bg-slate-900 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
            <form action="">
                <h1 className='text-4x1 text-white font-bold  text-center mb-6'>SignUp</h1>
                <div className='relative my-4'>
                    <input type="email" className='block w-72 py-2.3 px-0  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearence-none dark:focus:border-blue-600 peer' placeholder=''/>
                    <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Your Email</label>
                    <BiUser className='absolute top-4 right-4'/>
                    
                </div>
                <div className='relative my-4'>
                    <input type="password" className='block w-72 py-2.3 px-0  text-sm text-white bg-transparent border-0  border-b-2 border-gray-300 appearance-none dark:focus:border-blue-600 peer'placeholder=''/>
                    <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Your Password</label>
                    <AiOutlineUnlock className='absolute top-4 right-4'/>
                </div>
                <div className='relative my-4'>
                    <input type="password" className='block w-72 py-2.3 px-0  text-sm text-white bg-transparent border-0  border-b-2 border-gray-300 appearance-none dark:focus:border-blue-600 peer'placeholder=''/>
                    <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Confirm Your Password</label>
                    <AiOutlineUnlock className='absolute top-4 right-4'/>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center' >
                        <input type="checkbox" />
                        <label htmlFor="Remember me"  >Remember Me</label>
                    </div>
                </div>
                <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type="Submit">SignUp</button>
                <div>
                    <span className='m-4'>Already Registered ?</span> <button className='text-blue-500'><a href="/login">Login</a></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default signup