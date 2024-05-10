'use client';
import usePatientContext from '@/context/PatientContext';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const WEEKDAYS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]


const DoctorProfile = () => {
  
const [currentPatient, setCurrentPatient] = useState(JSON.parse(localStorage.getItem('patient')));


  const { id } = useParams();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [slotData, setSlotData] = useState({});

  const fetchDoctorDetails = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctor/getbyid/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
              "x-auth-token": currentPatient.token,
          
      }
    })
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

  const fetchDoctorSlots = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/slot/getbydoctor/${id}`)
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
    fetchDoctorDetails();
    fetchDoctorSlots();
  }, [])

  const displayDoctorDetails = () => {
    if (doctorDetails === null) {
      return <p>Loading...</p>
    } else {
      return <>
        <section className='m-10'>
          <div
            className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
            style={{ backgroundImage: 'url("/doctor-cover.webp")', height: 200 }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h2 className="mb-4 text-4xl font-semibold">Dr. {doctorDetails.name}</h2>
                  <h4 className="mb-6 text-xl font-semibold">{doctorDetails.specialization}</h4>
                  <Link href={`/user/appointmentBook/${doctorDetails._id}`}
                    type="button"
                    className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-twe-ripple-init=""
                    data-twe-ripple-color="light"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>



        <section className='m-10'>
          <div className='grid grid-cols-3 '>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl w-96">
              <div className='bg-green-400 h-1'></div>
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                <img
                  src={'http://localhost:5000/' + doctorDetails.avatar}
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {doctorDetails.name}
                </h4>
                <p className="text-slate-500">
                  {doctorDetails.specialization}
                </p>
              </div>
              <div className='bg-green-400 h-1 ml-12 mr-12'></div>
              <div className='m-10'>
                <h1>
                  PERSONAL INFO
                </h1>
                <br />
                <div className="grid grid-cols-1 gap-4">

                  <div>
                    <p className="text-slate-500">Email</p>
                    <p className="text-slate-500">
                      <p className="">{doctorDetails.email}</p>
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Phone</p>
                    <p className="text-slate-500">{doctorDetails.contact}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Address</p>
                    <p className="text-slate-500">{doctorDetails.address}</p>
                  </div>
                </div>

              </div>
            </div>


            <div className=" m-24 shadow-xl bg-clip-border  rounded-xl w-96 p-4 text-slate-500 ">
              <div className='bg-green-400 h-1 '></div>
              <h1 className='text-center text-3xl mt-4 font-bold font-mono text-gray-700 mb-5'> Schedule</h1>
              {
                showAvailableSlots()
              }

              <Link href={"/user/appointmentBook/" + doctorDetails._id} className='bg-green-400  w-full px-6 py-3 h-10 mt-5 rounded-lg text-white'>Book Appointment</Link>
            </div>

          </div>
        </section>
      </>
    }
  }

  return (
    <div>
      {displayDoctorDetails()}
    </div>
  )
}

export default DoctorProfile