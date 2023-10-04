import { Box, Button } from '@mui/material';
import React from 'react'

const CustomButton = (props) => {
  const {text,children,...rest} = props;
  return (
    <Box>
      <Button {...rest}>{children}</Button>
      </Box>
  ) 
}

export default CustomButton;