'use client'
import React, { useState } from 'react'

const DoctorDashboard = () => {

  const [currentDoctor] = useState(
    JSON.parse(sessionStorage.getItem("doctor"))
  );

  return (
    <div>
      <div>
        <h1 className='font-mono text-3xl'>
         {currentDoctor.name}
        </h1>
        </div>

        <div className='grid grid-cols-3'>


          <div className=' m-3'>
            <div className=' p-4 shadow-md bg-red-200'>
              <h2 className='text-xl font-semibold'>Total Patients</h2>
              <p className='text-gray-500'>65</p>
            </div>
          </div>

          <div className=' m-3'>
            <div className='bg-blue-200 p-4 shadow-md'>
              <h2 className='text-xl font-semibold'>Income</h2>
              <p className='text-gray-500'>Rs. 23,456</p>
            </div>
          </div>

          <div className=' m-3'>
            <div className='bg-green-200 p-4 shadow-md'>
              <h2 className='text-xl font-semibold'>Treatments</h2>
              <p className='text-gray-500'>42</p>
            </div>
          </div>

        </div> 

        <div className="p-8 rounded border border-gray-200">
 
  <h1 className="font-medium text-3xl">Add User</h1>
  <p className="text-gray-600 mt-6">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
    dolorem vel cupiditate laudantium dicta.
  </p>
  <form>
    
    <div className="mt-8 grid lg:grid-cols-2 gap-4">
      
      <div>
        
        <label
          htmlFor="name"
          className="text-sm text-gray-700 block mb-1 font-medium"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
          placeholder="Enter your name"
        />
      </div>
      <div>
        
        <label
          htmlFor="email"
          className="text-sm text-gray-700 block mb-1 font-medium"
        >
          Email Adress
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
          placeholder="yourmail@provider.com"
        />
      </div>
      <div>
        
        <label
          htmlFor="job"
          className="text-sm text-gray-700 block mb-1 font-medium"
        >
          Job title
        </label>
        <input
          type="text"
          name="job"
          id="job"
          className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
          placeholder="(ex. developer)"
        />
      </div>
      <div>
        
        <label
          htmlFor="brithday"
          className="text-sm text-gray-700 block mb-1 font-medium"
        >
          Birthday
        </label>
        <input
          type="text"
          name="brithday"
          id="brithday"
          className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
          placeholder="(01/01/1993)"
        />
      </div>{" "}
    </div>{" "}
    <div className="space-x-4 mt-8">
      {" "}
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
      >
        Save
      </button>{" "}
      {/* Secondary */}{" "}
      <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
        Cancel
      </button>{" "}
    </div>{" "}
  </form>
</div>

        
    </div>
    
  )
}

export default DoctorDashboard