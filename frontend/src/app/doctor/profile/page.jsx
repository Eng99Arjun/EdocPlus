'use client';
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';

const DoctorProfile = () => {

  const WEEKDAYS = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]

  const [slotData, setSlotData] = useState({});

  const [sessionData, setSessionData] = useState(JSON.parse(sessionStorage.getItem('doctor')));
  const [currentDoctor, setCurrentDoctor] = useState(null);

  const [meetingLink, setMeetingLink] = useState('');

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
        setMeetingLink(data.meetingLink);
        setCurrentDoctor(data);
      })
      .catch(err => console.log(err));
  }

  const fetchDoctorSlots = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/slot/getdoctorslots`, {
      headers: {
        'x-auth-token': sessionData.token,
      }
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        const uniqueDates = [...new Set(data.map(item => item.date.split('T')[0]))];
        let temp = {};
        uniqueDates.forEach(date => {
          if (temp[date]) {
            temp[date].push(data.filter(item => item.date.split('T')[0] === date).map(item => item.time));
          } else {
            temp[date] = data.filter(item => item.date.split('T')[0] === date).map(item => item.time);
          }
        })
        console.log(temp);
        setSlotData(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const showAvailableSlots = () => {
    return slotData && Object.keys(slotData).map(date => (
      <div key={date} className='m-7 grid grid-cols-2 font-semibold '>
        <h2>{date} - {WEEKDAYS[new Date(date).getDay()]}</h2>
        {
          slotData[date].map(slot => (
            <p key={slot}>{slot}</p>
          ))
        }
      </div>
    ))
  }

  useEffect(() => {
    fetchDoctorData();
    fetchDoctorSlots();
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
        if(res.status === 200) {
          toast.success('Profile Updated');
        }else{
          toast.error('Error Updating Profile');
        }
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
        <div className='grid grid-cols-2'>
          <div>
            <div className="px-4 sm:p-6">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Your Profile
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Personal details
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <div className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {currentDoctor.name}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Specialization
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {currentDoctor.specialization}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {currentDoctor.email}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Meeting Link
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      className='border border-gray-300 p-2 rounded-lg w-full'
                      value={meetingLink}
                      onChange={(e) => setMeetingLink(e.target.value)}
                      type="text" />
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Fee per Session
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {currentDoctor.fees}
                  </dd>
                </div>

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">

                  <dt className="text-sm font-medium leading-6 text-gray-900">Degree</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {currentDoctor.degree}
                  </dd>
                </div>
              </div>
              <button
                onClick={() => {
                  updateProfile({ meetingLink: meetingLink });
                }}
                className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 ml-4'
              >Update</button>
            </div>
          </div>
          <div>
            <div className=" ml-24 h-28 dark:bg-slate-800 gap-6 w-80 items-center">
              <div className="bg-gray-100 mt-5 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                <div className="flex items-center gap-4 p-4 ">
                  <img
                    src={currentDoctor.avatar && `${process.env.NEXT_PUBLIC_API_URL}/${currentDoctor.avatar}`}
                    className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                  />
                  <div className="w-fit transition-all transform duration-500">
                    <h1 className="text-gray-600 dark:text-gray-200 font-bold">
                      {currentDoctor.name}
                    </h1>
                    <label className='bg-blue-500 border text-white px-2 rounded w-100 mt-3' htmlFor='upload-image'>
                      {" "} <i className='fas fs-pen'>&nbsp;Change Photo{" "}</i>
                    </label>
                    <input type="file" hidden onChange={uploadProfileImage} id="upload-image" />


                  </div>
                </div>

                <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
                  <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                    </svg>
                    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <svg
                      viewBox="0 0 960 1000"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                    >
                      <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-32 ml-20 shadow-xl bg-clip-border  rounded-xl w-96 p-4 text-slate-500 ">
              <div className='bg-green-400 h-1 '></div>
              <h1 className='text-center text-3xl mt-4 font-bold font-mono text-gray-700 mb-5'> Schedule</h1>
              {
                showAvailableSlots()
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