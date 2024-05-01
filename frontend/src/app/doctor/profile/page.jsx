'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Formik } from 'formik';
import toast from 'react-hot-toast';

const DoctorProfile = () => {

    const [sessionData, setSessionData] = useState(JSON.parse(sessionStorage.getItem('doctor')));
    const [currentDoctor, setCurrentDoctor] = useState(null);

    const [passwordHidden, setPasswordHidden] = useState(false);

    const fetchDoctorData = () => {
        fetch(`http://localhost:5000/doctor/getdoctor`, {
            headers: {
                'x-auth-token': sessionData.token,
            }
        })
            .then(res => {
                console.log(res.status);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setCurrentDoctor(data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchDoctorData();
    }, [])

    const uploadProfileImage = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('myfile', file);
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/uploadfile`, {
            method: 'POST',
            body: fd,
        }).then(res => {
            if (res.status === 200) {
                toast.success('Profile Image Updated');
                updateProfile({ avatar: file.name });
            }
        });
    }

    const updateProfile = (data) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctor/update/${currentDoctor._id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res.status);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setCurrentDoctor(data);
            })
            .catch(err => console.log(err));
    }

    const displayProfile = () => {
        if (currentDoctor === null) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="container-fluid h-auto  bg-gray-300 w-full">
                    <div className="grid grid-cols-2 ">
                        <div className="h-3/4 p-24">
                            <div className=" mx-auto rounded bg-white ">
                                <img
                                    height={200}
                                    className="border-rounded mx-w-full  h-auto w-24 rounded-full d-block m-auto"
                                    src={
                                        currentDoctor.avatar &&
                                        `${process.env.NEXT_PUBLIC_API_URL}/${currentDoctor.avatar}`} alt="loading.." />
                                {/* <hr className="mt-2 mb-2" /> */}
                                <div>
                                    <div className="text-center my-4">
                                        <label
                                            className="btn bg-white hover:bg-slate-200 w-100 mt-3"
                                            htmlFor="upload-image"
                                        >
                                            {" "}
                                            <i className="fas fa-pen"></i>&nbsp;Edit{" "}
                                        </label>
                                        <input
                                            type="file"
                                            hidden
                                            onChange={uploadProfileImage}
                                            id="upload-image"
                                        />
                                    </div>
                                    <p className="text-center text-2xl text-dark">
                                        {/* <span className="mb-2">...</span> */}
                                    </p>
                                    <p className="text-center text-xl text-gray-500"> <span className="fw-bold">{currentDoctor.email}</span></p>
                                    <p className="text-xl text-center"> <span className="text-black font-semibold ">User Id:</span><span>{currentDoctor._id}</span></p>
                                    <ul className="list-group list-group-flush text-center">

                                        <li className="list-group-item d-flex justify-content-between mb-4 align-items-center px-0">
                                            <span className="me-3">Password</span>
                                            {passwordHidden ? (
                                                <span className="fw-bold">**</span>
                                            ) : (
                                                <span className="fw-bold">{currentDoctor.password}</span>
                                            )}
                                            <button
                                                className="btn bg-white hover:bg-slate-200"
                                                onClick={() => setPasswordHidden(!passwordHidden)}
                                            >
                                                {passwordHidden ? "Show" : "Hide"}
                                            </button>
                                        </li>

                                    </ul>
                                    <button
                                        type="button "
                                        className="btn mb-4 w-56 mx-auto block  bg-red-500 hover:bg-red-700 text-white "
                                        onClick={() => deleteAccount(currentDoctor._id)}
                                    >
                                        Delete Account
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="px-24 mt-12">
                            {
                                <Formik initialValues={currentDoctor} onSubmit={updateProfile}>
                                    {(updateForm) => (

                                        <form>
                                            {/* 2 column grid layout with text inputs for the first and last names */}
                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold mb-3" htmlFor="form7Example1">
                                                            Username
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="username"
                                                            onChange={updateForm.handleChange}
                                                            value={updateForm.values.username}
                                                            className="w-full py-2 rounded-lg px-2"
                                                        />

                                                    </div>
                                                </div>

                                            </div>


                                            {/* Email input */}
                                            <div className=" mb-4">
                                                <label className="form-label fw-bold" htmlFor="form7Example5">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.email}
                                                    className="w-full py-2 rounded-lg px-2"
                                                />

                                            </div>
                                            {/* Number input */}
                                            <label className="form-label fw-bold" htmlFor="form7Example6">
                                                Phone
                                            </label>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="number"
                                                    id="contact"
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.contact}
                                                    className="w-full py-2 rounded-lg px-2"
                                                />
                                            </div>
                                            {/* Message input */}
                                            <label className="form-label fw-bold" htmlFor="form7Example7">
                                                Additional information
                                            </label>
                                            <div className="form-outline mb-4">
                                                <textarea
                                                    className="w-full py-2 rounded-lg px-2"
                                                    id="form7Example7"
                                                    rows={4}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            {/* Checkbox */}
                                            <div className="form-check d-flex justify-content-center mb-2">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="form7Example8"
                                                    defaultChecked=""
                                                />
                                                <label className="form-check-label" htmlFor="form7Example8">
                                                    Create an account?
                                                </label>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            }
                        </div>

                    </div>
                </div>
            )
        }
    }

    return displayProfile();
}

export default DoctorProfile