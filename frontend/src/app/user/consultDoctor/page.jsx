'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';



<>
<div className="relative h-[400px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
  <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
      McqMate
    </h1>
    <p className="text-gray-300">For Students, From Students</p>
    <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
      <input
        type="text"
        className="rounded-md w-full p-3 "
        placeholder="Search MCQ | Topic | Course"
      />
      <button type="submit" className="absolute right-6 top-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  </div>
</div>




</>
const consultDoctor = () => {

    const [doctorList, setDoctorList] = useState([]);
    const [filter, setfilter] = useState([])

    const fetchDoctors = () => {
        fetch('http://localhost:5000/doctor/getall')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setDoctorList(data);
                setfilter(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchDoctors();
    }, [])

    const displayDoctors = () => {
        if (doctorList.length > 0) {
            return doctorList.map((doctor) => (
                <div className="rounded-xl shadow-lg mb-5 bg-gray-100 mr-6">
                    <div className="p-5 flex flex-col ">
                        <div className='rounded-xl overflow-hidden '>
                            <img src={'http://localhost:5000/'+doctor.avatar} className='h-48 w-52 mx-auto block' alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3 text-center'>Dr. {doctor.name}</h5>
                        <p className="text-slate-500 text-center text:lg mt:3">{doctor.specialization}</p>
                        <Link href={'/user/view-doctor/' + doctor._id} className='text-center  text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-700 hover:text-white focus:scale-95 transition-all bg-blue-500 text-white duration-200 ease-out'>View</Link>
                    </div>
                </div>
            ))
        } else {
            return <p>No doctors found</p>
        }
    }


    const filterDoctor = (e) => {
        const value = e.target.value;
        setDoctorList(filter.filter = ((doctor) => {
            return  (doctor.specialization.toLowerCase().includes(value.toLowerCase()));
        }))
    }

  
    return (
        <div>
            <section className='pt-12'>
                <form className="flex flex-col md:flex-row justify-center gap-1">
                    <div className="flex">
                        <select
                            id="pricingType"
                            name="pricingType"
                            className="w-32 h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                        >
                            <option value="All" selected=" ">
                                Location
                            </option>
                            <option value="Freemium">Lucknow</option>
                            <option value="Free">Delhi</option>
                            <option value="Paid">Prayagraj</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search for Doctors, clinic or hospitals"
                            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
                        onChange={filterDoctor}
                        />
                        <button
                            type="submit"
                            className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </section>

            {/* search bar ends */}

            {/* card */}
            {/* 
        <div className='rounded-xl shadow-lg w-56 ml-3'>
            <a href=""></a>
                <div className='bg-blue-200 pl-3 pt-9 pr-9 pb-0 rounded-t-lg'>
                <a href="">
                    <span className=''>
                        <img 
                        src="video_consulation.webp"
                        className='h-48 w-52' 
                        alt="" />
                    </span>
                 </a>
            </div>
                <div className='p-3 row-span-1 text-2xl font-medium text-gray-700 font-serif'>
                Instant Video 
                <br />Solution
            </div>
        </div>
          */}
            <div className='flex items-center justify-center pt-12 pb-12 container mx-auto'>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                    {displayDoctors()}

                </div>
            </div>
        </div>

    )
}

export default consultDoctor