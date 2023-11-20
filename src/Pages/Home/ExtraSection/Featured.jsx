import React from 'react';
import featuredImg from '../../../../public/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg';
import Title from '../../../Component/Title/Title';
import './Featured.css';
const Featured = () => {
    return (
        <div>
            <div className='featuredImg  text-white pt-8 my-20'>
                <Title
                    heading="simple photographer"
                    subHeading="ExtraSection are available">

                </Title>
                <div className='md:flex justify-center items-center pt-12 px-36 pb-20 '>
                    <img className='w-1/2 fix' src={featuredImg} alt="" />
                    <div className='md:ml-10 w-1/2'>
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline border-0 border-b-4'>order Now</button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Featured;