import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Widgets from '../Widgets'

const Layout = ({ children }) => {
  return (
    <>
        <Sidebar />
            {children}
        <Widgets />
    </>
    )
}

export default Layout