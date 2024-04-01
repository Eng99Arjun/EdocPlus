'use client';
import React, { useEffect } from 'react'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const template = ({children}) => {
  return (
    <div>
       <Navbar/>
        {children}
        <Footer/></div>
  )
}
export default template