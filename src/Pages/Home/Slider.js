import { Carousel } from 'flowbite-react';
import React from 'react';
import image1 from '../../images/slider/image1.jpg';
import image2 from '../../images/slider/image2.jpg';
import image3 from '../../images/slider/image3.jpg';


const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
    
    <img
      src={image1}
      alt="wedding"
    />
    <img
      src={image2}
      alt="wedding"
    />
    <img
      src={image3}
      alt="wedding"
    />
    
  </Carousel>
</div>
    );
};

export default Slider;