// import Swiper core and required modules
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './storyStyles.scss'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import characterImg from '../../assets/images/Capas_Adjuntas-2.png';
import character2Img from '../../assets/images/Capas_Adjuntas-3.png'
import character3Img from '../../assets/images/Capas_Adjuntas-4.png'
import character4Img from '../../assets/images/Capas_Adjuntas-5.png'
import character5Img from '../../assets/images/Capas_Adjuntas.png'
import CustomCard from '../../components/card/CustomCard';
import { useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
    swiperContainer: {
      width: '100%',
      maxWidth: 600,
      margin: '0 auto',
    },
    slide: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    //   padding: theme.spacing(3),
    width:'200px'
    },
    image: {
      width: '100%',
      maxHeight: 100,
      objectFit: 'cover',
    //   borderRadius: theme.shape.borderRadius,
    },
  }));
export default () => {
    const [text,setText] = useState('dummyText');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isLastText,setIsLastText] = useState(false);
    const classes = useStyles();
  const demoText = ["You are a government school teacher and principal.", "You see a mother telling her under-aged children to sell balloons on the streets.","You witnessed child labour in broad daylight. What do you want to do?"];
  const textLength = demoText.length -1;
  useEffect(()=>{
   // Function to update the text index
   const updateTextIndex = () => {
    setCurrentTextIndex((prevIndex) =>{
      if(prevIndex === demoText.length - 1){
          setIsLastText((prev)=> !prev);
     return prevIndex;
      } 
       return prevIndex + 1;
    }
    );
  };
 

  // Start changing text every 5 seconds
  const intervalId = setInterval(updateTextIndex, 5000);

  // Clean up the interval when the component unmounts
  return () => clearInterval(intervalId);
    let index = 0;
   const timer = setInterval(()=>{
        const text = demoText[index];
        setText(text);
        index++;
   },4500);  
  if(index >= demoText.length){
    clearInterval(timer);

  }
  

  },[])
  const handleReset = ()=>{
    setIsLastText(false);
    setCurrentTextIndex(0)
  }

  return (
    <>
    <Header router={'/gallery'}/>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      a11y
      className={`${isLastText? 'type-last-text' : ''}`}
    
    >
      <SwiperSlide style={{height:'80vh'}}>
     <div style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center', height:'100%', position:'relative'}}>
      <div style={{aspectRatio:'4/3',position:'absolute',left:'0',bottom:'-5%'}}>
        <img src={characterImg} alt=''/>
      </div>
      <div style={{position:'absolute',top:'30%',left:"17%",margin:'0 auto', width:'80%', height:'100%',textAlign:'center'}}>  
         <CustomCard text={demoText[currentTextIndex]} isRestartBtnVisible={isLastText} currentTextIndex={currentTextIndex} handleReset={handleReset} textLength={textLength}/>
      </div>

      <div  style={{aspectRatio:'4/3',position:'absolute',right:'0',bottom:'-5%',}}>
        <img src={character5Img} alt=''/>
      </div>
     </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-content">
          <h1>Story 2</h1>
          <div className='story-img'>
          <img src={'https://images.unsplash.com/photo-1695642579012-257295cc3a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'}/>
          {/* Add your content for the first slide here */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-content">
          <h1>Story 3</h1>
          {/* Add your content for the second slide here */}
        </div>
      </SwiperSlide>
      {/* Add more SwiperSlides as needed */}
    </Swiper>
    <Footer />
    </>
  );
};