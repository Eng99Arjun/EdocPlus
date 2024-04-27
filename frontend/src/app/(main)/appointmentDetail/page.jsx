import React from 'react'

const appointmentDetail= () => {
  return (
    <>
    <div className="container  py-24 px-72">
    <table className="min-w-full divide-y  divide-gray-200 bg-gray-300 shadow-2xl ">
  <thead>
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Value
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Patient Name</td>
      <td className="px-6 py-4 whitespace-nowrap">Jane</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Patient id</td>
      <td className="px-6 py-4 whitespace-nowrap"></td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Phone-No</td>
      <td className="px-6 py-4 whitespace-nowrap">1244585235</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Date</td>
      <td className="px-6 py-4 whitespace-nowrap">12-01-2024</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Doctor Name</td>
      <td className="px-6 py-4 whitespace-nowrap">jon</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Doctor id</td>
      <td className="px-6 py-4 whitespace-nowrap">Jane</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">slots</td>
      <td className="px-6 py-4 whitespace-nowrap">10:00AM</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Fees</td>
      <td className="px-6 py-4 whitespace-nowrap">500</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Doctor SPECIALIZATION </td>
      <td className="px-6 py-4 whitespace-nowrap"></td>
    </tr>
  </tbody>
</table>
</div>
    </>
  )
}

export default appointmentDetail