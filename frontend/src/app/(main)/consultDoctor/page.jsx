import React from 'react'

const consultDoctor = () => {
  return (
    
    <div>
        <section className='pt-12 '>
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

        <div className='rounded-xl shadow-lg w-56'>
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
        
        <div className='flex items-center justify-center pt-12 pb-12 container mx-auto'>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className="rounded-xl shadow-lg bg-blue-200 mr-6">
                <div className="p-5 flex flex-col ">
                    <div className='rounded-xl overflow-hidden '>
                        <img src="video_consulation.webp" className='h-48 w-52' alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>Dr.xyz</h5>
                    <p className="text-slate-500  text:lg mt:3">Lorem ipsum, dolor!</p>
                    <a href="#" className='text-center bg-white text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-800 hover:text-white focus:scale-95 transition-all duration-200 ease-out'>view</a>
                </div>
            </div>
            <div className="rounded-xl shadow-lg bg-blue-200 mr-6">
                <div className="p-5 flex flex-col ">
                    <div className='rounded-xl overflow-hidden '>
                        <img src="video_consulation.webp" className='h-48 w-52' alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>Dr.xyz</h5>
                    <p className="text-slate-500  text:lg mt:3">Lorem ipsum, dolor!</p>
                    <a href="#" className='text-center bg-white text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-800 hover:text-white focus:scale-95 transition-all duration-200 ease-out'>view</a>
                </div>
            </div>
            <div className="rounded-xl shadow-lg bg-blue-200 mr-6">
                <div className="p-5 flex flex-col ">
                    <div className='rounded-xl overflow-hidden '>
                        <img src="video_consulation.webp" className='h-48 w-52' alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>Dr.xyz</h5>
                    <p className="text-slate-500  text:lg mt:3">Lorem ipsum, dolor!</p>
                    <a href="#" className='text-center bg-white text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-800 hover:text-white focus:scale-95 transition-all duration-200 ease-out'>view</a>
                </div>
            </div>
            <div className="rounded-xl shadow-lg bg-blue-200 mr-6">
                <div className="p-5 flex flex-col ">
                    <div className='rounded-xl overflow-hidden '>
                        <img src="video_consulation.webp" className='h-48 w-52' alt="" />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-medium mt-3'>Dr.xyz</h5>
                    <p className="text-slate-500  text:lg mt:3">Lorem ipsum, dolor!</p>
                    <a href="#" className='text-center bg-white text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-800 hover:text-white focus:scale-95 transition-all duration-200 ease-out'>view</a>
                </div>
            </div>
            
            </div>
        </div>
        </div>
    
  )
}

export default consultDoctor