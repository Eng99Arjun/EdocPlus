import React from 'react'
import AdminNavbar from './navbar'
import Sidebar from '../admin/sidebar/page'

const Layout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            <Sidebar />
            <div className='ms-72'>
            {children}
            </div>
        </>
    )
}

export default Layout