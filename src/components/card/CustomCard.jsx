import React, { useEffect, useRef } from 'react';
import {Typography,Box, CardContent,Card, IconButton} from '@mui/material';
import anime from 'animejs';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
function CustomCard ({text,isRestartBtnVisible=false,currentTextIndex,handleReset=()=>{},textLength}) {
  const cardRef = useRef(null);
  const timelineRef = useRef(null);
  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeInOutSine",
    });
    const cardRefEle = cardRef.current;
    // to open the box wide
    tl.add({
      targets: cardRefEle,
      width:currentTextIndex == 0 ? ["0%", "100%"] : ['100%','100%'] , // horizontal effect
      direction: currentTextIndex === 0 ? "forward" : 'reverse',
      delay:  currentTextIndex == 0 ? 100 : 200,
      duration:  currentTextIndex === 0 ? 400 : 200, 
      easing: "easeInOutSine",
      
    });

    // to open eyes - for text 1
    tl.add({
      targets: cardRefEle,
      height: ["0%", "100%"],
      direction: "forward",
      delay: 3,
      duration: 400,
      easing: "easeInOutSine",
    });

    // close eyes - transition to text 2
    if(currentTextIndex<textLength){
      tl.pause();
     tl.add({
      targets: cardRefEle,
      height: ["100%", "0%"] ,
      direction: "reverse",
      delay: 3000,
      duration: 300,
      easing: "easeInOutSine",
    });
  }
   
    timelineRef.current = tl;
    
    currentTextIndex <= textLength ?  timelineRef.current?.play(): tl.pause() ;
  console.log(isRestartBtnVisible,currentTextIndex);
    return () => {
      timelineRef.current?.pause();
      timelineRef.current?.seek(0);
    };
  }, [text,currentTextIndex]);
  return (
      <div  
      style={{
       height:'20vh',
       width:'50%',
       boxShadow:'none',
       textAlign:'center',
       marginTop:'-12%',
       zIndex:'99999',
       display:'flex',
       overflowY:'scroll',
       justifyContent:'center',
       alignItems:'center',
       textAlign:'center',
       
      }}>
        <div  
      ref={cardRef}
        style={{
        height:'auto',
        textAlign:'center',  
        display:'flex',
        overflow: "hidden", 
        textAlign:'center',
         width:'100%',
        backgroundColor:'#CF5C36',
        borderTop:'2px solid white',
        borderBottom:'2px solid white',
        height:'100%',
        overflowY:'scroll',
        justifyContent:'center',
        alignItems:'center'
      }}>
    <div style={{alignItems:'center',textAlign:'center',height:'100%',pt:'5%',position:'relative'}}  className='center'>
      <div style={{textAlign:'center',  color:"white",
        fontSize: "24px",
        textTransform: "uppercase",
        fontFamily: "ShadowsIntoLight-Regular"}}>
      {text}
    </div>
    {
    currentTextIndex === textLength &&
    <div style={{position:'absolute',right:'0',bottom:'0',cursor:'pointer',zIndex:'99999'}}>
      <IconButton size='small' onClick={()=>handleReset()} >
      <RestartAltIcon sx={{fontSize:'24px', color:'#F3C891'}}/>
      </IconButton>
    </div>
    }
    </div>
    </div>
    </div>
  );
}

export default CustomCard;
