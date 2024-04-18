import React from 'react'
import Sidebar from './sidebar/page'

const DoctorDashboard = () => {
  return (
    <div>
   
        <div>
        <>
  {/* component */}
  <div className="flex flex-wrap mb-2">
    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
      <div className="bg-green-600
       border rounded shadow p-2">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pl-1 pr-4">
            <i className="fa fa-wallet fa-2x fa-fw fa-inverse" />
          </div>
          <div className="flex-1 text-right">
            <h5 className="text-white">Total Revenue</h5>
            <h3 className="text-white text-3xl">
              3249€
              <span className="text-green-400">
                <i className="fas fa-caret-down" />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    
    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
      <div className="bg-orange-600 border rounded shadow p-2">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pl-1 pr-4">
            <i className="fas fa-user-plus fa-2x fa-fw fa-inverse" />
          </div>
          <div className="flex-1 text-right pr-1">
            <h5 className="text-white">Today Appointments</h5>
            <h3 className="text-white text-3xl">
              2{" "}
              <span className="text-orange-400">
                <i className="fas fa-caret-up" />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
      <div className="bg-red-600 border rounded shadow p-2">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pl-1 pr-4">
            <i className="fas fa-tasks fa-2x fa-fw fa-inverse" />
          </div>
          <div className="flex-1 text-right">
            <h5 className="text-white">To Do List</h5>
            <h3 className="text-white text-3xl">7 tasks</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-1">
      <div className="bg-pink-600 border rounded shadow p-2">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pl-1 pr-4">
            <i className="fas fa-inbox fa-2x fa-fw fa-inverse" />
          </div>
          <div className="flex-1 text-right">
            <h5 className="text-white">Issues</h5>
            <h3 className="text-white text-3xl">
              3{" "}
              <span className="text-pink-400">
                <i className="fas fa-caret-up" />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

            
        </div>
    </div>
  )
}

export default DoctorDashboard