'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useDoctorContext from '@/context/DoctorContext';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";

const Login = () => {
  const { setCurrentDoctor, setDoctorLoggedIn } = useDoctorContext([])
  const router = useRouter();
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required('Email is Required').email('Email is invalid'),
    password: Yup.string().required('Password is Required')
  });
  // initialize formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/doctor/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 200) {
        resetForm();
        toast.success('Login Successfull');
        setDoctorLoggedIn(true);
        const data = await res.json();
        setCurrentDoctor(data);
        sessionStorage.setItem('doctor', JSON.stringify(data));
        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/Admin');
        } else {
          sessionStorage.setItem('doctor', JSON.stringify(data));
          navigate('/doctor');
        }
      }
      else if (res.status === 401) {
        toast.error('Some error occured')
      }
    },
    validationSchema: loginValidationSchema
  });

  return (
    <>

      <>
        {/* component */}


        <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
          <div
            className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
            style={{ maxWidth: 1000 }}
          >
            <form onSubmit={loginForm.handleSubmit}>
              <div className="md:flex w-full">
                <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                  <img src="doctor login.png" alt="" />
                </div>
                <div className="w-full shadow-2xl md:w-1/2 py-10 px-5 md:px-10">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">DOCTOR LOGIN</h1>
                    <p>Enter your information to login</p>
                  </div>
                  <div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label htmlFor="" className="text-xs font-semibold px-1">
                          Email
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="email"
                            name='email'
                            values={loginForm.values.email}
                            onChange={loginForm.handleChange}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-12">
                        <label htmlFor="" className="text-xs font-semibold px-1">
                          Password
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="password"
                            name="password"
                            values={loginForm.values.password}
                            onChange={loginForm.handleChange}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="************"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <button type='submit' className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                          Login
                        </button>
                      </div>
                    </div>
                    <span className='text-center'>New user?</span>  <Link href="doctor-signup" className="text-blue-600">Create an account</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </>


    </>
  )
}

export default Login