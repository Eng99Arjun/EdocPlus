'use client';
import React, { useEffect } from 'react'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { DoctorProvider } from '@/context/DoctorContext';

const template = ({ children }) => {
  return (
    <div>
      {/* <Navbar/> */}
      <DoctorProvider>
        {children}
      </DoctorProvider>
      {/* <Footer/> */}
    </div>
  )
}
export default template