import React from 'react'


    const ViewDoctor = () => {
      return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className=" mr-4">
              <div className="rounded-lg bg-gray-300 dark:bg-gray-700 w-72 flex-auto p-2">
                <img
                  className="pl-2"
                  src="/video_consulation.webp"
                  alt="Doctor Image"
                />
                </div>
            </div>
            <div className='m-4'>
            <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Doctor Name
              </h2>
                <div className="mr-4 mb-2">
                  <span className="font-bold text-xl text-gray-700 dark:text-gray-300">
                    Specialization
                  </span>
                  
                </div>
                <div>
                  <br />
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Years of Experience:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300"> 8 </span>
                </div>
                <div>

                  <br />
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Location:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300"> GPO, Lucknow </span>
                </div>
                <div>
                  <br />
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Professional Degree:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300"> MBBS </span>
                </div>
              </div>
            </div>


            <div className="md:flex-1 px-4">
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
                justo. Integer euismod libero id mauris malesuada tincidunt.
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Charge per Session:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">$29.99</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Available</span>
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Doctor Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                  ante justo. Integer euismod libero id mauris malesuada tincidunt.
                  Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
                  vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
                  nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                  lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
                  nisl suscipit, nec tincidunt mi consectetur.
                </p>
              </div>
              <div className="flex -mx-2 mb-4 mt-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Check Schedule
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                     Make Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default ViewDoctor