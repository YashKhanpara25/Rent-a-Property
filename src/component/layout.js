import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import { Box } from '@mui/material';
function Layout({children}) {
  return (
      <Box sx={{display:"flex", flexDirection:'column',height:'100vh'}}>
        <Navbar />
        {children}
        <Footer />
      </Box>
      
  )
}

export default Layout