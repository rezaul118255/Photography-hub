import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";// requires a loader
// import { Carousel } from 'react-responsive-carousel';
import image6 from '../../../../public/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg';
import image5 from '../../../../public/lilly-rum-L6W9ZIQ5saM-unsplash.jpg';
import image4 from '../../../../public/erik-mclean-9XK7vgoGSgc-unsplash.jpg';


const Banner = () => {



    return (
        <div >
            <Carousel className=''>
                <div className=''>
                    <img src={image6} />

                </div>
                <div>
                    <img src={image5} />
                </div>
                <div>
                    <img src={image4} />

                </div>

                <div>
                    <img src={image6} />

                </div>
                <div>
                    <img src={image5} />
                </div>
                <div>
                    <img src={image4} />

                </div>



            </Carousel>



        </div>
    );
};

export default Banner;






// import React from 'react';
// // import { Flicking } from '@egjs/react-flicking';
// import '@egjs/react-flicking/dist/flicking.css';
// import Flicking from '@egjs/react-flicking';

// const Banner = () => {
//     return (
//         <div className="carousel-wrapper " >
//             <Flicking className="carousel gap-8" circular={true} autoPlay={true} autoPlayInterval={3000}>
//                 <div className="carousel-item  h-96 w-96">
//                     <img src="https://i.ibb.co/D4X6JC7/photographer1.jpg" alt="Slide 1" />
//                 </div>
//                 <div className="carousel-item h-96 w-96">
//                     <img src="https://i.ibb.co/HTc7nsP/photographer2.jpg" alt="Slide 2" />
//                 </div>
//                 <div className="carousel-item h-96 w-96">
//                     <img src="https://i.ibb.co/kSbzycT/phototgrapher5.jpg" alt="Slide 3" />
//                 </div>
//                 <div className="carousel-item h-96 w-96">
//                     <img src="https://i.ibb.co/D4X6JC7/photographer1.jpg" alt="Slide 1" />
//                 </div>
//                 <div className="carousel-item h-96 w-96">
//                     <img src="https://i.ibb.co/HTc7nsP/photographer2.jpg" alt="Slide 2" />
//                 </div>
//                 <div className="carousel-item h-96 w-96">
//                     <img src="https://i.ibb.co/kSbzycT/phototgrapher5.jpg" alt="Slide 3" />
//                 </div>

//             </Flicking>
//         </div>
//     );
// };

// export default Banner;







