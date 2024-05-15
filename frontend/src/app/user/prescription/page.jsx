'use client';
import usePatientContext from '@/context/PatientContext';
import React, { useEffect, useState } from 'react'



const prescription = () => {
    const [prescription, setPrescription] = useState([]);
    const { currentPatient } = usePatientContext();
  
    const fetchUserPrescriptions = () => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/report/getbypatient`, {
        headers: {
          'x-auth-token': currentPatient.token
        }
      })
        .then((response) => {
          console.log(response.status);
          return response.json();
        })
        .then(data => {
          console.log(data);
          setPrescription(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    useEffect(() => {
      fetchUserPrescriptions()
    }, [])
  
    const displayPrescriptions = () => {
        return prescription.map(prescription1 => (
          <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              {prescription1.doctor.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              {prescription1.appointment.slot.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              {prescription1.prescription}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
             {prescription1.medicalTests}
            </td>
          </tr>
        ))
      }

  return (
    <>
    <div className='md:w-4/5 mx-auto'>
      <h1 className='text-3xl my-10 text-center text-slate-900 font-bold'>Your Prescription</h1>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Doctor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Prescription
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Medical Tests
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {
                    displayPrescriptions()
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    </div>
    
    </>
  )
}

export default prescription