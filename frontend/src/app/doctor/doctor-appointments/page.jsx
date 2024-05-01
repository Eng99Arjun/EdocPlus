'use client';
import useDoctorContext from '@/context/DoctorContext';
import usePatientContext from '@/context/PatientContext';
import React, { useEffect, useState } from 'react'

const DoctorAppointments = () => {

  const [appointmentList, setAppointmentList] = useState([]);
  const { currentDoctor } = useDoctorContext();

  const fetchDoctorAppointments = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointment/getbydoctor`, {
      headers: {
        'x-auth-token': currentDoctor.token
      }
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setAppointmentList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchDoctorAppointments()
  }, [])

  const displayAppointments = () => {
    return appointmentList.map(appointment => (
      <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
          {appointment.patient.fullName}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          {appointment.slot.date}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
          {appointment.slot.time}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
          <a
            href='https://meet.google.com/yun-rcuf-fhi'
            target='_blank'
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
          >
            Join Meeting
          </a>
        </td>
      </tr>
    ))
  }

  return (
    <div className='md:w-4/5 mx-auto'>
      <h1 className='text-3xl my-10 text-center text-slate-900 font-bold'>Manage Your Appointments with Patients</h1>
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
                      Patient
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
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {
                    displayAppointments()
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default DoctorAppointments;