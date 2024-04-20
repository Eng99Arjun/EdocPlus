import React, { Children } from 'react'
import Navbar from '@/components/navbar';

const layout = ({children}) => {
  return (
    <div>
        {/* <Navbar/> */}
        {children}
    </div>
  )
}

export default layout