"use client"
import React, { useEffect, useState } from 'react'

const ManageAppointment = () => {

    const [Data, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/doctor/getall');
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

    const deleteDoctor = (id) => {
        console.log(id);

        const res = fetch ('http://localhost:5000/doctor/delete/'+id, {method: 'DELETE'})
         if (res.status === 200) {
            fetchData();
         }
        }


    const displayDoctors = () => {
        return  Data.map((doctor) => {
            return <tr className='className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"' >
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {doctor.name}
                </th>
                <td className="px-6 py-4">{doctor.specialization}</td>
                <td className="px-6 py-4">{doctor.city}</td>
                <td className="px-6 py-4">{doctor.contact}</td>
                <td className="px-6 py-4">{doctor.email}</td>
                <td className="px-6 py-4">{doctor.gender}</td>
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
                       onClick = {() => {deleteDoctor(doctor._id)}}
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

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Doctor Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Specialization
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayDoctors()}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default ManageAppointment;