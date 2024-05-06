'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const medicalTestOptions = [
  'Blood Test',
  'Urine Test',
  'X-Ray',
  'MRI',
  'CT Scan',
  'Ultrasound',
  'ECG',
  'EEG',
  'EMG',
  'Endoscopy',
  'Colonoscopy',
  'Biopsy',
  'Mammography',
  'Pap Smear',
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
          <h1>Report Details</h1>
          <textarea ref={reportRef} defaultValue={reportDetails.report} />
          <textarea ref={prescriptionRef} defaultValue={reportDetails.prescription} />
          <button onClick={updateReport}>Update Report</button>
        </div>
      )
    } else {
      return <p>No Report Found</p>
    }
  }

  const showMedicalTests = () => {
    return medicalTestOptions.map((test, index) => (
      <div key={index}>
        <input
          type='checkbox'
          value={test}
          checked={selMedicalTests.includes(test)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelMedicalTests([...selMedicalTests, test])
            } else {
              setSelMedicalTests(selMedicalTests.filter(item => item !== test))
            }
          }}
        />
        <label>{test}</label>
      </div>
    ))
  }

  return (
    <div>
      <h1>Appointment Details</h1>
      <p>{appointmentDetails?.patient.fullName}</p>
      <p>{appointmentDetails?.slot.date}</p>
      <p>{appointmentDetails?.slot.time}</p>
      {displayReport()}
      <h1>Medical Tests</h1>
      {showMedicalTests()}
    </div>
  )
}

export default ViewAppointment