'use client';
import React, { useEffect, useState } from 'react'

const report = () => {

  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/report/getall');
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

  const [patient, setPatient] = useState([]);

  const fetchPatient = async () => {
    const res = await fetch('http://localhost:5000/patient/getall');
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setPatient(data);
    }
  }

  useEffect(() => {
    fetchPatient();
  }, [])


  const displayReports = () => {
    return Data.map((report) => {
      return <>
      {/* Hello world */}
     
      
      <section className="mb-2 border  p-4 rounded-lg max-w-full">
        <div className="mx-auto">
          <div className="card md:flex max-w-lg">
            <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
              <img
                className="object-cover rounded-full"
                src={'http://localhost:5000/' + report.appointment.patient.avatar}
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="font-bold">{report.appointment.patient.fullName}</p>
              <h3 className="text-xl heading">Test</h3>
              <p className="mt-2 mb-3">
                
              </p>
              <div>
                <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">
                  {report.medicalTests}
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
      // <div className="container mx-auto py-10 px-5">
      //   <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      //     <div className="p-4 sm:p-6">
      //       <div className="flex items-center justify-between">
      //         <div>
      //           <h2 className="text-2xl font-semibold">{patient.fullName}</h2>
      //         </div>
      //       </div>
      //       <hr className="my-4" />

      //       <div className="mt-4">
      //         <h3 className="text-lg font-semibold mb-2">Test Name</h3>
      //         <div>

      //           <ul className="list-disc list-inside text-sm">

      //             <li>
      //               <span className="font-semibold">Doctor: </span> {report.appointment.doctor.name}
      //               <span className="font-semibold">Patient: </span> {}
      //               <span className="font-semibold">Test Name: </span> {report.medicalTests}
      //             </li>
      //           </ul>
      //         </div>

      //       </div>

      //     </div>
      //   </div>
      // </div>

    })
  }

  return (
    displayReports()
  )
}

export default report