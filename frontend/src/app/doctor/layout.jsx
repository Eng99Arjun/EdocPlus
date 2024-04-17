import React from 'react'
import Sidebar from './sidebar/page';

const Layout = ({children}) => {
  return (
    <>
      <Sidebar />
      <div className='ms-72'>
      {children}
        </div>
      
      </>
  )
}

export default Layout;