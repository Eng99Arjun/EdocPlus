import React from 'react'

const prescription = () => {
  return (
    <><div className="mb-5 pt-3">
    <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
      Patient Details
    </label>
    <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Patient name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <input
            type="number"
            name=""
            id=""
            placeholder=" Patient id"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <input
            type="number"
            name=""
            id=""
            placeholder=" Date"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="doctor name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>
  <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
  <table className="w-full table-fixed">
    <thead>
      <tr className="bg-gray-100">
        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
          
          Name of Medicine
        </th>
        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
          Time
        </th>
        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
          After meal
        </th>
        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
          Before meal
        </th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr>
        <td className="py-4 px-6 border-b border-gray-200">
          <input type="text"  className='' placeholder='Med Name with type'/>
        </td>
        <td className="py-4 px-6 border-b border-gray-200 truncate">
          <input type="text" placeholder='Taking Time' />
        </td>
        <td className="py-4 px-6 border-b border-gray-200">
          <input type="radio"/>
        </td>
        <td className="py-4 px-6 border-b border-gray-200">
         <input type="radio" />
        </td>
      </tr>
      
    </tbody>
  </table>
</div>

  <div>
    <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none mt-10 ml-72">
      Submit
    </button>

  </div>
</>
  )
}

export default prescription