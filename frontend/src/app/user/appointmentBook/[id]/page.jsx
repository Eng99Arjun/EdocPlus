'use client'
import usePatientContext from '@/context/PatientContext'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useFormik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function appointmentBook() {
    const { currentPatient } = usePatientContext();
    const router = useRouter()
    const { id } = useParams();
    const [doctorDetails, setDoctorDetails] = useState(null);

    const slotRef = useRef(null);
    const detailsRef = useRef(null);

    const [slotData, setSlotData] = useState([]);

    const fetchSlots = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/slot/getbydoctor/${id}`)
            .then((response) => {
                console.log(response.status);
                return response.json();
            })
            .then(data => {
                console.log(data);
                setSlotData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const bookAppointment = () => {

        fetch('http://localhost:5000/appointment/add', {

            method: 'POST',
            body: JSON.stringify({
                doctor: id,
                slot: slotRef.current.value,
                details: detailsRef.current.value
            }),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': currentPatient.token
            },
        })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    toast.success('Appointment Booked');
                }
                else {
                    toast.error('Failed to Book Appointment');
                }

            }).catch((err) => {
                console.log(err);
                toast.error('Failed to Book Appointment');
            });
    }

    const fetchDoctorDetails = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getbyid/${id}`)
            .then((response) => {
                console.log(response.status);
                return response.json();
            })
            .then(data => {
                console.log(data);
                setDoctorDetails(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchDoctorDetails();
        fetchSlots();
    }, [])

    return (
        // <form onSubmit={applicationForm.handleSubmit}>
        <div className="flex items-center justify-center flex-col">
            <div className="border-b border-gray-900/10 w-1/2 pb-12">

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Patient Name
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 py-2 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span className="flex select-none items-center pl-3  text-gray-500 sm:text-sm"></span>
                                {currentPatient.fullName}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                            Details
                        </label>
                        <div className="mt-2">
                            <textarea
                                ref={detailsRef}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about disease.</p>
                    </div>
                </div>
            </div>

            <div className=" pb-12">
                <div className=" pb-12">
                    <div className="mt-10  space-y-10">
                        <fieldset>
                            <select className="text-lg w-80 font-semibold leading-6 text-gray-900 mb-3" ref={slotRef}>
                                <option value="">Slots</option>
                                {
                                    slotData.map(slot => (
                                        <option value={slot._id}>{new Date(slot.date).toDateString()} {slot.time}</option>
                                    ))
                                }
                            </select>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex mb-5 items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    onClick={bookAppointment}
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    submit
                </button>
            </div>
        </div>
        // </form>
    )
}
