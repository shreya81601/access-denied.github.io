import React, { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';
import teacherImage from '../../assets/images/Copy of teacher.png'
import studentImage from '../../assets/images/student.png'
import parentImage from '../../assets/images/parent-zoom.png'
import './characterStyles.scss'

const cardsData = [
  {
    id: 1,
    imageSrc: teacherImage,
    text: 'A government school teacher and principal.',
    className:'teacher'
  },
  {
    id: 2,
    imageSrc: studentImage,
    text: 'A 14 year old girl in a small town of Bihar.',
    className:'student'
  },
  {
    id: 3,
    imageSrc: parentImage,
    text: 'A working mother.',
    className:'parent'

  },
];



const Characters = () => {
  const [isCardClickable, setIsCardClickable] = useState(false);
  const characterCardRef = useRef(null);
  const timelineRef = useRef(null);
  const navigate = useNavigate();
  useEffect(()=>{
    const tl = anime.timeline({
      easing: "easeInOutSine",
      autoplay:false,
     
    });
    cardsData?.forEach((card,index)=>{
      tl.add({
        targets: characterCardRef?.current?.children?.[index],
        opacity: [0, 1],
        direction: "forward",
        duration: 1500,
        easing: "easeInOutSine",
        translateY: [100, 0],
        changeComplete:()=>{
          setIsCardClickable(true);
          console.log('completed');
        }
      });

    });

    tl.add({
      targets: `.skip-btn`,
      opacity: [0, 1],
      direction: "forward",
      delay: 200,
      duration: 300,
      easing: "easeInOutSine",
    });
    timelineRef.current = tl;
    timelineRef.current?.play();
    return ()=>{
      timelineRef.current?.pause();
      timelineRef.current?.seek(0);
    }

  },[]);

  return (
   <>
    {/* <Box>
        <Box>
    <Button size="large" color="primary" sx={{position:'absolute',right:'0',top:'-14%',fontSize:'16px'}} className='skip-btn'>
    {`Skip >`} 
  </Button>
  </Box>
  </Box> */}
  <Header customText='Choose the character' router={'/gallery'}/>
    <Box className="container" style={{marginTop:'7%'}}>
    <Grid container spacing={2} ref={characterCardRef}>
      {cardsData.map((card,index) => (
        <Grid item xs={4} key={card.id}>
          <Card style={{cursor:'pointer',height:'500px'}} onClick={()=>{ isCardClickable ?  navigate(`/story/${card.id}`) : ''}} className={`character ${card?.className}`}>
            <Box sx={{height:'400px', }} className="img-box">
            <img src={card.imageSrc} alt={`Card ${card.id}`} />
            </Box>
            <CardContent className='character-card-content'>
              <Typography variant="body2" color="textSecondary"sx={{fontSize:'22px'}} className='character-text'>
                {card.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
    {/* <Footer/> */}
    </>
  );
};

export default Characters;
