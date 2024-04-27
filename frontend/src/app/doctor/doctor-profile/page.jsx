import React from 'react'

const doctorProfile = () => {
  return (
    <>
        <section className='m-10'>
            {/* Jumbotron */}
            <div
                className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
                style={{ backgroundImage: 'url("/doctor-cover.webp")', height: 200 }}
            >
                <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                <div className="flex h-full items-center justify-center">
                    <div className="text-white">
                    <h2 className="mb-4 text-4xl font-semibold">Dr. Thor Odinson</h2>
                    <h4 className="mb-6 text-xl font-semibold">General Physician</h4>
                    <button
                        type="button"
                        className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-twe-ripple-init=""
                        data-twe-ripple-color="light"
                    >
                        Book Appointment
                    </button>
                    </div>
                </div>
                </div>
            </div>
            {/* Jumbotron */}
        </section>


    
    <section className='m-10'>
    <div className='grid grid-cols-3 '>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl w-96">
        <div className='bg-green-400 h-1'></div>
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
                />
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Natalie Paisley
                </h4>
                <p className="text-slate-500">
                General Practitioner    
                </p>
            </div>
            <div className='bg-green-400 h-1 ml-12 mr-12'></div>
            <div className='m-10'>
                <h1>
                    PERSONAL INFO
                </h1>
                <br />
                <div className="grid grid-cols-1 gap-4">
                   
                    <div>
                        <p className="text-slate-500">Email</p>
                        <p className="text-slate-500"> 
                            <a href="mailto:doctor@mail.com">mahi07@gmail.com
                        </a>
                        </p>
                    </div>
                    <div>
                        <p className="text-slate-500">Phone</p>
                        <p className="text-slate-500">+91 1234567890</p>
                    </div>
                    <div>
                        <p className="text-slate-500">Address</p>
                        <p className="text-slate-500"> 123, New Delhi, India</p>
                    </div>
                </div>

            </div>
        </div>

        <div>
            <p>
                <h1 className='text-gray-700 text-3xl font-sans'>
                    ABOUT
                </h1>
                <br />
                <p className="text-slate-500">
                    Dr. Natalie Paisley is a General Practitioner with 10 years of experience. She is a specialist in treating general health issues and has a special interest in
                    treating patients with diabetes and hypertension. She is a member of the American Medical Association and has completed her MBBS from the University of California.
                </p>
            </p>
            <div className='bg-green-500 h-1 mt-9'></div>
            <div className='mt-5 text-slate-500'>
                <div className='grid grid-cols-2 text-xl font-mono text-slate-500'>
                    <h1>Speciality</h1>
                    <p>General Practitioner</p>
                </div>
                
                <div className='grid grid-cols-2 text-xl font-mono mt-7'>
                    <h1>Degrees</h1>
                    <p>MBBS</p>
                </div>
                <div className='grid grid-cols-2 text-xl font-mono mt-7'>
                    <h1>Training</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam natus doloribus ullam voluptates incidunt enim mollitia totam inventore nam.</p>
                </div>
                <div className='grid grid-cols-2 text-xl font-mono mt-7'>
                    <h1>Treatments</h1>
                    <p>65</p>
                </div>
            </div>
        </div>

        <div className=" m-24 shadow-xl bg-clip-border  rounded-xl w-96 p-4 text-slate-500 ">
        <div className='bg-green-400 h-1 '></div>
            <h1 className='text-center text-3xl mt-4 font-bold font-mono text-gray-700'> Schedule</h1>
            <div className='m-7 grid grid-cols-2 font-semibold '>
                <h2>Monday</h2>
                <p>10:00 AM - 12:00 PM</p>
            </div>
            <div className='m-7 grid grid-cols-2 font-semibold '>
                <h2>Monday</h2>
                <p>10:00 AM - 12:00 PM</p>
            </div>
            <div className='m-7 grid grid-cols-2 font-semibold '>
                <h2>Monday</h2>
                <p>10:00 AM - 12:00 PM</p>
            </div>
            <div className='m-7 grid grid-cols-2 font-semibold '>
                <h2>Monday</h2>
                <p>10:00 AM - 12:00 PM</p>
            </div>
            <div className='m-7 grid grid-cols-2 font-semibold '>
                <h2>Monday</h2>
                <p>10:00 AM - 12:00 PM</p>
            </div>
            <div className='m-7 grid grid-cols-2 font-semibold '>
                <h2>Monday</h2>
                <p>10:00 AM - 12:00 PM</p>
            </div>
            <div className='m-7 grid grid-cols-2 font-semibold '>
                <h2>Monday</h2>
                <p>10:00 AM - 12:00 PM</p>
            </div>
            
        </div>
        
    </div>
        </section>
 
    </>
  )
}

export default doctorProfile