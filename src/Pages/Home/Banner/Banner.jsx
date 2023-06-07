import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import img1 from '../../../assets/home/01.jpg';
// import img2 from '../../../assets/home/02.jpg';
// import img3 from '../../../assets/home/03.png';
// import img4 from '../../../assets/home/04.jpg';
// import img5 from '../../../assets/home/05.png';
// import img6 from '../../../assets/home/06.png';


const Banner = () => {



    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/fXV35Tw/gradient-photography-template-design-23-2149738227.jpg" />

                </div>
                <div>
                    {/* <img src={img3} /> */}
                    <img src="https://i.ibb.co/G0R9mMn/horizontal-sale-banner-template-photographer-career-hobby-23-2150306830.jpg" />
                </div>
                <div>
                    {/* <img src={img4} /> */}
                    <img src="https://i.ibb.co/Z1N2dsW/landing-page-photography-workshop-template-23-2148668971.jpg" />
                </div>
                <div>
                    {/* <img src={img5} /> */}
                    <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" />
                </div>
                <div>
                    {/* <img src={img6} /> */}
                    <img src="https://i.ibb.co/jWSxrHM/gradient-photography-template-design-23-2149738223.jpg" />
                </div>
            </Carousel>



        </div>
    );
};

export default Banner;