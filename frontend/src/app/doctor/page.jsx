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
        <div>
        {/* <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-cccbbvu/embed/charts?id=663b37d5-221c-4656-81f8-7de805f20e11&maxDataAge=3600&theme=light&autoRefresh=true"></iframe> */}

        </div>
        
    </div>
    
  )
}

export default DoctorDashboard