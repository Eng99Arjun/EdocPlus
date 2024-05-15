'use client';
import React, { useEffect, useState } from 'react'

const Medicine= () => {

  
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


  const displayMedicines = () => {
    return  Data.map((report) => {
        return <div className="container mx-auto py-10 px-5">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">


          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{report.appointment.patient.fullName}</h2>
                
              
              </div>
            </div>
            <hr className="my-4" />
          
            <div className="mt-4">
              
              <div>
              
                <ul className="list-disc list-inside text-sm">
                
                  <li>
                    {report.prescription}
                  </li>
                </ul>
              </div>
            
            </div>
          
          </div>
        </div>
      </div>
    })
}

  return (  
   displayMedicines()
  )
}

export default Medicine