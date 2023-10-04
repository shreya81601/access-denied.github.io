import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';
import DisclaimerModal from '../modal/DisclaimerModal';

const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (val) => {
    setOpen(val);
  };
  const handleClose = (val) => {
    setOpen(val);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 0',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        position:'fixed',
        width:'100%',
        bottom:'0px',
        zIndex: '999',
      }}
    >
      <Container maxWidth="xl" style={{display:'flex',justifyContent:'space-between',alignItems:'center',textAlign:'center'}}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="info"
          sx={{fontSize:'24px' }}
          onClick={()=>handleOpen(true)}
          // for i icon
        >
          <InfoIcon style={{fontSize:'32px'}}/>
        </IconButton>
        <Typography>
        © 2023 ACCESS DENIED
        </Typography>
      </Container>
      <DisclaimerModal handleOpen={handleOpen} handleClose={handleClose} open={open}/> 
      {/* for modal */}
    </Box>
  );
};

export default Footer;
