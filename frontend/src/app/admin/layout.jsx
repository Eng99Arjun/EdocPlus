import React from 'react'
import AdminNavbar from './navbar'
import Sidebar from '../admin/sidebar/page'

const Admin = ({ children }) => {
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

export default Admin