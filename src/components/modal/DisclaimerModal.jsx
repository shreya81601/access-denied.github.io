import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const DisclaimerModal = ({open,handleClose,handleOpen}) => {
  const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(0,0,0,0.8)'
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    border: '2px solid #000',
    borderRadius: '4px',
    padding: '16px',
    maxWidth: '400px',
  };

  return (
      <Modal open={open} onClose={()=>handleClose(false)} style={modalStyle}>
        <Box style={modalContentStyle}>
          <Typography variant="h5" align="center">
            Disclaimer
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec urna non
            ipsum vehicula suscipit.
          </Typography>
          <Typography variant="body1" paragraph>
            Nulla facilisi. Suspendisse potenti. Vivamus id lorem sit amet mi rhoncus
            facilisis eget in quam.
            dkfjojdofjlodjklkfjlkjkljdsklj
            skdjklj
          </Typography>
        </Box>
      </Modal>
  );
};

export default DisclaimerModal;
