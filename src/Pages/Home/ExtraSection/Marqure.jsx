import React from 'react';

// import part3 from '../../../../public/part1.jpg';
import Logo1 from '../../../../public/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg';
import Logo2 from '../../../../public/erik-mclean-9XK7vgoGSgc-unsplash.jpg';
import Logo3 from '../../../../public/jamie-street-qWYvQMIJyfE-unsplash.jpg';
import Logo4 from '../../../../public/lilly-rum-L6W9ZIQ5saM-unsplash.jpg';
import Logo5 from '../../../../public/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg';
import Logo6 from '../../../../public/erik-mclean-9XK7vgoGSgc-unsplash.jpg';
import Marquee from 'react-fast-marquee';
import Title from '../../../Component/Title/Title';


const Marqure = () => {
    return (
        <div>
            <div className='w-full mt-12 '>
                <div className=''>
                    <Title
                        heading="simple photographer"
                        subHeading="ExtraSection are available">

                    </Title>

                    <Marquee className='w-full gap-10 mt-16 grid grid-cols-3 lg:grid-cols-6  justify-items-center items-center  container mx-auto'>
                        <div>

                            <img
                                src={Logo1}
                                alt="Image"
                                className='w-40 h-48 mx-10 '
                            />
                        </div>
                        <div>
                            <img
                                src={Logo2}
                                alt="Image"
                                className='w-40 h-48 mx-10  '
                            />
                        </div>
                        <div>
                            <img
                                src={Logo3}
                                alt="Image"
                                className='w-40 h-48 mx-10 '
                            />
                        </div>
                        <div>
                            <img
                                src={Logo4}
                                alt="Image"
                                className='w-40 h-48 mx-10 '
                            />
                        </div>
                        <div>
                            <img
                                src={Logo5}
                                alt="Image"
                                className='w-40 h-48 mx-10 '
                            />
                        </div>
                        <div>
                            <img
                                src={Logo6}
                                alt="Image"
                                className='w-40 h-48 mx-10'
                            /></div>

                    </Marquee>

                </div>




            </div>

        </div>
    );
};

export default Marqure;