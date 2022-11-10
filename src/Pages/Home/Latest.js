import { Carousel } from 'flowbite-react';
import React from 'react';
import image1 from '../../images/slider/image1.jpg';
import image2 from '../../images/slider/image2.jpg';
import image3 from '../../images/slider/image3.jpg';
import image4 from '../../images/bridal-shower-photography-tips-prep.jpg';
import image5 from '../../images/Indian-Wedding-Heena-0003-1024x683.jpg';
import image6 from '../../images/WEDDING-PHOTO_18.jpg';
import image7 from '../../images/weddingplanner-imaagin-event-planners.jpeg';
const Latest = () => {
    return (
        <div className='max-w-screen-xl mx-8'>
        <div className='mt-14 mb-6 ml-'>
             <h2 className='text-5xl font-great font-semibold'>Latest Work</h2>
         </div>
         <div className="flex md:flex-row w-36 h-24 mb-2 ">
        <img src={image1} alt=""></img>
        <img src={image2} alt=""></img>
        <img src={image3} alt=""></img>
        <img src={image4} alt=""></img>
        <img src={image5} alt=""></img>
        <img src={image6} alt=""></img>
        <img src={image7} alt=""></img>
</div>
         
     </div>
    );
};

export default Latest;