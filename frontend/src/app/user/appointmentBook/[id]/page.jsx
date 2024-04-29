'use client'
import usePatientContext from '@/context/PatientContext'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function appointmentBook() {
    const { currentPatient } = usePatientContext();
    const router = useRouter()

    const applicationForm = useFormik({
        initialValues: {
            details: '',
        },
        onSubmit: (values) => {
            console.log(values)
            fetch('http://localhost:5000/appointment/add', {

                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': currentPatient.token
                },

            })
                .then((res) => {
                    if (res.status === 200) {

                        toast.success('Appointment Booked');
                        router.push('/user/appointmentDetail/:id');
                    }
                    else {
                        toast.error('Failed to Book Appointment');
                    }

                }).catch((err) => {
                    console.log(err);
                    toast.error('Failed to Book Appointment');
                });
        }

    })

    return (
        <form onSubmit={applicationForm.handleSubmit}>
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
                                    id="details"
                                    value={applicationForm.values.details}
                                    onChange={applicationForm.handleChange}
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
                                <select className="text-lg w-80 font-semibold leading-6 text-gray-900 mb-3   ">
                                    <option value="">Slots</option>
                                    <option value="">9:00</option>
                                    <option value="">9:30</option>
                                    <option value="">10:00</option>
                                    <option value="">10:30</option>
                                    <option value="">11:00</option>
                                    <option value="">11:30</option>
                                    <option value="">12:00</option>
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
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        submit
                    </button>
                </div>
            </div>
        </form>
    )
}
