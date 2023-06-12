// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';



// const Banner = () => {



//     return (
//         <div>
//             <Carousel>
//                 <div>
//                     <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" />
//                 </div>
//                 <div>
//                     <img src="https://i.ibb.co/fXV35Tw/gradient-photography-template-design-23-2149738227.jpg" />

//                 </div>
//                 <div>
//                     {/* <img src={img3} /> */}
//                     <img src="https://i.ibb.co/G0R9mMn/horizontal-sale-banner-template-photographer-career-hobby-23-2150306830.jpg" />
//                 </div>
//                 <div>
//                     {/* <img src={img4} /> */}
//                     <img src="https://i.ibb.co/Z1N2dsW/landing-page-photography-workshop-template-23-2148668971.jpg" />
//                 </div>
//                 <div>
//                     {/* <img src={img5} /> */}
//                     <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" />
//                 </div>
//                 <div>
//                     {/* <img src={img6} /> */}
//                     <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" />
//                 </div>
//             </Carousel>



//         </div>
//     );
// };

// export default Banner;


// import React from 'react';
// // import { Flicking } from '@egjs/react-flicking';
// import '@egjs/react-flicking/dist/flicking.css';
// import Flicking from '@egjs/react-flicking';

// const Banner = () => {
//     return (
//         <div className="carousel-wrapper" >
//             <Flicking className="carousel" circular={true} autoPlay={true} autoPlayInterval={3000}>
//                 <div className="carousel-item">
//                     <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" alt="Slide 1" />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="https://i.ibb.co/fXV35Tw/gradient-photography-template-design-23-2149738227.jpg" alt="Slide 2" />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="https://i.ibb.co/G0R9mMn/horizontal-sale-banner-template-photographer-career-hobby-23-2150306830.jpg" alt="Slide 3" />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="https://i.ibb.co/Z1N2dsW/landing-page-photography-workshop-template-23-2148668971.jpg" alt="Slide 4" />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" alt="Slide 5" />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" alt="Slide 6" />
//                 </div>
//             </Flicking>
//         </div>
//     );
// };

// export default Banner;









import React, { useRef, useEffect } from 'react';
// import { Flicking, AutoPlay } from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import { Flicking, AutoPlay } from '@egjs/react-flicking';


const Banner = () => {
    const flickingRef = useRef(null);

    useEffect(() => {
        const flicking = flickingRef.current.getInstance();
        const autoplay = new AutoPlay(3000); // Autoplay interval: 3000ms (3 seconds)
        flicking.addPlugins(autoplay);
        autoplay.play();
        return () => {
            autoplay.destroy();
        };
    }, []);

    return (
        <div className="carousel-wrapper" style={{ marginTop: '50px' }}>
            <Flicking className="carousel" circular={true} ref={flickingRef}>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/fXV35Tw/gradient-photography-template-design-23-2149738227.jpg" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/G0R9mMn/horizontal-sale-banner-template-photographer-career-hobby-23-2150306830.jpg" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/Z1N2dsW/landing-page-photography-workshop-template-23-2148668971.jpg" alt="Slide 4" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" alt="Slide 5" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" alt="Slide 6" />
                </div>
            </Flicking>
        </div>
    );
};

export default Banner;
