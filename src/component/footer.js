import { List, Box, Link, ListItem, ListItemText, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react'
function Footer() {
  const styles = {
    mr : '10px',
    fontWeight: 100,
    color: "grey"
  }
  return (

    <Box sx={{background:'#FAF7F0',padding:"15px",marginTop:'auto'}}>
      <Box sx={{display:'flex' , justifyContent:'center'}}>
        <Typography variant="h9" sx={styles}> Contact Us </Typography>
        <Typography variant="h9" sx={styles}> Careers </Typography>
        <Typography variant="h9" sx={styles}> About us </Typography>
        <Typography variant="h9" sx={styles}> Partners </Typography>
        <Typography variant="h9" sx={styles}> terms </Typography>
        <Typography variant="h9" sx={styles}> Privacy Policy </Typography>
      </Box>
      <Box sx={{display:'flex' , justifyContent:'center', mt:'12px'}}>
        <FacebookIcon sx={{mr:'10px', color:"#808080"}}/>
        <LinkedInIcon sx={{mr:'10px', color:"#808080"}}/>
        <GitHubIcon sx={{mr:'10px' ,color:"#808080"}}/>
        <TwitterIcon sx={{mr:'10px' , color:"#808080"}}/>
        <InstagramIcon sx={{mr:'10px' , color:"#808080"}}/>
      </Box>
      <Box sx={{display:'flex' , justifyContent:'center', mt:'12px'}}>
      <Typography sx={{fontSize:"10px",fontWeight: 100,color: "grey"}} > 2022 Estatery, All rights reserved </Typography>
      </Box>
    </Box>
  )
}

export default Footer