// import { Box, Typography } from '@mui/material'
// import { makeStyles } from '@mui/styles';
// import React from 'react'
// const useStyles = makeStyles((theme) => ({
//     root: {
//       backgroundColor: 'rgb(218, 227, 231) !important',
//       position:'fixed',
//       top:'0',
//       zIndex:'9999999',
//       width:'100%',
//       height:'7vh'
//     },
//   }));
// const Header = () => {
//     const className= useStyles();
//   return (
//   <Box className={className.root}> 
//   <Typography>
  
//   </Typography>
//   </Box>
//   )
// }

// export default Header

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HouseIcon from '@mui/icons-material/House';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './headerStyles.scss'
const Header = ({customText='',router='/'}) => {
  return (
    <AppBar position="static" className='character-header'>
      <Toolbar>
        {/* Home Button on the Left */}
        <Link to={'/'}>
        <IconButton edge="start" color="inherit" aria-label="home"  size='large' >
          {/* You can replace the following icon with your home icon */}
        <HouseIcon style={{fontSize:'32px',color:'grey'}}/>
        </IconButton>
        </Link>

        {/* Title (optional) */}
        <Typography variant="h2" style={{ flexGrow: 1,textAlign:"center",color:'grey' }}>
          {customText}
        
        </Typography>
        <Link to={router}>
        {/* Skip Button on the Right */}
        <Button style={{color:'grey',fontSize:'16px'}} variant="text" size='large'
       endIcon={
        <div style={{ fontSize: "16px" }}>
          <ArrowForwardIosIcon />
        </div>
      }
        >
          {`Skip`}
        </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
