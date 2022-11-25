import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: require("../assets/Plano-MARCO_Planta-baja.png"),
    caption: 'Planta Baja'
  },
  {
    url: require("../assets/Plano-MARCO_Planta-alta.png"),
    caption: 'Planta Alta'
  },
];


export default function ImageSlider(){
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              {/*<div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
         </div>*/}
            <img className="lazy" src={slideImage.url} alt="sample" height={400}/>

            </div>
          ))} 
        </Slide>
      </div>
    )
};

