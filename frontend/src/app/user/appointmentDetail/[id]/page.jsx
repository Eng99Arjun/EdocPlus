'use client'
import usePatientContext from '@/context/PatientContext'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const appointmentDetail = () => {

  const { id } = useParams();
  const [doctorDetails, setdoctorDetails] = useState([])
  const { currentPatient } = usePatientContext();

  const fetchDoctorDetails = async () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getbyid/${id}`)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setdoctorDetails(data);

      })
      .catch((err) => {
        console.log(err);
      });

  }

  useEffect(() => {
    fetchDoctorDetails();
  }, [])

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
              <td className="px-6 py-4 whitespace-nowrap">{currentPatient.fullName}</td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Phone-No</td>
              <td className="px-6 py-4 whitespace-nowrap">{currentPatient.contactNo}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Age</td>
              <td className="px-6 py-4 whitespace-nowrap">{currentPatient.age}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Doctor Name</td>
              <td className="px-6 py-4 whitespace-nowrap">{doctorDetails.name}</td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">slots</td>
              <td className="px-6 py-4 whitespace-nowrap">10:00AM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Fees</td>
              <td className="px-6 py-4 whitespace-nowrap">{doctorDetails.fees}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Doctor SPECIALIZATION </td>
              <td className="px-6 py-4 whitespace-nowrap">{doctorDetails.specialization}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default appointmentDetail