'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const medicalTestOptions = [
  ' Blood Test',
  ' Urine Test',
  ' X-Ray',
  ' MRI',
  ' CT Scan',
  ' Ultrasound',
  ' ECG',
  ' EEG',
  ' EMG',
  ' Endoscopy',
  ' Colonoscopy',
  ' Biopsy',
  ' Mammography',
  ' Pap Smear',
]

const ViewAppointment = () => {

  const runOnce = useRef(true);
  const reportRef = useRef(null);
  const prescriptionRef = useRef(null);

  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [reportDetails, setReportDetails] = useState(null);

  const [selMedicalTests, setSelMedicalTests] = useState([]);

  const { id } = useParams();

  const generateReport = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/report/add`, {
      method: 'POST',
      body: JSON.stringify({
        appointment: id,
        report: 'No Report Added',
        prescription: 'No Prescription Added'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setReportDetails(data);
      })
  }

  const updateReport = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/report/update/${reportDetails._id}`, {
      method: 'PUT',
      body: JSON.stringify({
        report: reportRef.current.value,
        prescription: prescriptionRef.current.value,
        medicalTests: selMedicalTests
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setReportDetails(data);
      })
  }

  const fetchAppointmentDetails = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointment/getbyid/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAppointmentDetails(data);
      })
  }

  const fetchReportDetails = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/report/getbyappointment/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data) {
          setReportDetails(data);
        }
        else {
          generateReport();
        }
      })
  }

  useEffect(() => {
    if (runOnce.current) {
      fetchAppointmentDetails();
      fetchReportDetails();
      runOnce.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    setSelMedicalTests(reportDetails?.medicalTests || [])
  }, [reportDetails])


  const displayReport = () => {
    if (reportDetails !== null) {
      return (
        <div>

          <h1 className='text-xl font-serif mb-3'>Report Details</h1>
          <p>{reportDetails.report}</p>
          {/* <textarea ref={reportRef} className='w-full bg-blue-50 border-none shadow mb-5' defaultValue={reportDetails.report} /> */}
          <h1 className='text-xl font-serif mb-3'>Medicines</h1>

          <p>{reportDetails.prescription}</p>
          {/* <textarea className='w-full bg-blue-50 border-none shadow mb-5' ref={prescriptionRef} defaultValue={reportDetails.prescription} /> */}

          {/* <div className='m-5 ms-44'>
            <button className='bg-blue-400 rounded-lg  font-serif text-white p-2' onClick={updateReport}>Update Report</button>
          </div> */}
        </div>
      )
    } else {
      return <p>No Report Found</p>
    }
  }

  const showMedicalTests = () => {
    if(reportDetails === null) return null;
    return reportDetails.medicalTests.map((test, index) => (
      <div key={index}>
        <p>{test}</p>
      </div>
    ))
  }

  return (
    <div>
      <h1 className='text-3xl text-center text-blue-900 py-3 font-semibold'>Prescription Details</h1>
      <div className='grid grid-cols-2'>
        <div className='p-12'>
          <p>{appointmentDetails?.patient.fullName}</p>
          <p>{appointmentDetails?.slot.date}</p>
          <p>{appointmentDetails?.slot.time}</p>
          {displayReport()}

        </div>
        <div className='p-8'>
          <h1 className='text-xl font-serif mb-3'>Medical Tests</h1>
          <div className='shadow p-5 bg-blue-50'>
            {showMedicalTests()}

          </div>
        </div>

      </div>

    </div>
  )
}

export default ViewAppointment