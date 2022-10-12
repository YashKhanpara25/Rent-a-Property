import React from 'react'
import Button from '@mui/material/Button';
import Dropdown from './dropdown';

function Pages(props) {
  return (
    <>
        {props.property ? 
         <Dropdown page={props.page} handleCloseNavMenu={props.handleCloseNavMenu} property={props.property}/>
         :
         <Button
            key={props.page}
            onClick={props.handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
        {props.page}
        </Button>}
        
    </>
  )
}

export default Pages