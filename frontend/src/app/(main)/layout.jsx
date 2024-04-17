import Navbar from '@/components/navbar';
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default MainLayout;