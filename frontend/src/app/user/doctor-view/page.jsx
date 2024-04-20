import React from 'react'

const ViewDoctor = () => {
  return (
    <>
      <section className="bg-blueGray-100 overflow-hidden m-10">
            <div className="container mx-auto">
                <div
                className="relative bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden rounded-4xl"
                style={{
                    height: 435,
                    backgroundImage: 'url("/doctor-cover.webp")'
                }}
                >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-slate-500 bg-opacity-50"
                />
                <div className="absolute top-0 left-0 w-full z-10 p-16 pt-24 text-center  h-full">
                    <h2 className="text-6xl md:text-8xl xl:text-5xl text-white font-bold tracking-px-n leading-none font-serif">
                    Dr. Mahendra Singh Macculam
                    </h2>
                </div>
                </div>
            </div>
        </section>

    
    <section className='m-10 bg-slate-200 '>
    <div>
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
                        <p className="text-slate-500">Name</p>
                        <p className="text-slate-500">  Dr. Mahendra Singh Macculam</p>
                    </div>
                    <div>
                        <p className="text-slate-500">Specialization</p>
                        <p className="text-slate-500">General Practitioner</p>
                    </div>
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

        
        </div>
        </section>
 
    </>
  )
}

export default ViewDoctor