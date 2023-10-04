import React from 'react';
import './galleryStyles.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import img1 from '../../assets/images/gallery01.jpg';
import img2 from '../../assets/images/gallery02.jpg';
import img3 from '../../assets/images/gallery03.jpg';
import img4 from '../../assets/images/gallery04.jpg';



const Gallery = () => {
  // Sample data for images and text
  const galleryData = [
    {
        id: 1,
       imageSrc:img1,
       text: 'Image 1',
      },
    {
      id: 2,
     imageSrc:img2,
     text: 'Image 2',
    },

    {
        id: 3,
       imageSrc:img3,
       text: 'Image 3',

      },
      {
        id: 4,
       imageSrc:img4,
       text: 'Image 4',

      },
      {
        id: 5,
       imageSrc:img1,
       text: 'Image 5',
      },
    {
      id: 6,
     imageSrc:img2,
     text: 'Image 6',
    },

    {
        id: 7,
       imageSrc:img3,
       text: 'Image 7',

      },
      {
        id: 8,
       imageSrc:img4,
       text: 'Image 8',

      },
   
  ];

        return (
            <>
            <Header/>
            <div className='container center' style={{marginBottom:'20px'}}>
            <div className="gallery-container">
              {galleryData.map((image, index) => (
                <div key={index} className="gallery-card">
                  <img src={image.imageSrc} alt={image.text} className="gallery-image" />
                  <p className="gallery-text">{image.text}</p>
                </div>
              ))}
            </div>
            </div>
            <Footer/>
            </>
          );
    };

export default Gallery;
