"use client"
import React, { useEffect, useState } from 'react'

const ManageAppointment = () => {

    const [Data, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/appointment/getall');
        console.log(res.status);

        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const deleteAppointment = (id) => {
        console.log(id);

        const res = fetch ('http://localhost:5000/appointment/delete/'+id, {method: 'DELETE'})
         if (res.status === 200) {
            fetchData();
         }
        }


    const displayAppointment = () => {
        return  Data.map((appointment) => {
            return <tr className='className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"' >
                
                <td className="px-6 py-4">{appointment.doctor}</td>
                <td className="px-6 py-4">{appointment.slot}</td>
                <td className="px-6 py-4">{appointment.patient}</td>
                <td className="px-6 py-4">{appointment.details}</td>
                <td className="px-6 py-4">
                    <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Edit
                    </a>
                </td>
                <td className="px-6 py-4">
                    <button
                       onClick = {() => {deleteAppointment(appointment._id)}}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Delete
                    </button>
                </td>

            </tr>
        })
    }

    return (
        <>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-9">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Doctor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Slot
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Patient
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayAppointment()}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default ManageAppointment;