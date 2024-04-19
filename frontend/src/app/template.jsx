'use client';
import React, { useEffect } from 'react'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { DoctorProvider } from '@/context/DoctorContext';
import { PatientProvider } from '@/context/PatientContext';

const template = ({ children }) => {
  return (
    <div>
      {/* <Navbar/> */}
      <DoctorProvider>
        <PatientProvider>
          {children}
        </PatientProvider>
      </DoctorProvider>
      {/* <Footer/> */}
    </div>
  )
}
export default template