import React, { Children } from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar/page'


const layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {/* <Sidebar /> */}
        <div className='ms-72'>
          {children}
        </div>
    </div>
  )
}

export default layout