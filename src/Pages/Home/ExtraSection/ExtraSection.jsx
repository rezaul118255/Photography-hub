import React from 'react';
import Title from '../../../Component/Title/Title';

const ExtraSection = () => {
    return (
        <div>
            <Title
                heading="ExtraSection"
                subHeading="ExtraSection are available">

            </Title>
            <div>
                <div className="hero min-h-screen bg-base-200 container">
                    <div className="hero-content flex-col lg:flex-row gap-16 ">
                        <div data-aos="fade-up"
                            data-aos-duration="1500">
                            <img src="https://img.freepik.com/free-vector/child-development-illustration_1284-59264.jpg" className="photos lg:w-1/2 max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div className='lg:w-1/2' data-aos="zoom-in"
                        >
                            <h1 className="text-5xl font-bold">Unlock Your Photography Potential</h1>
                            <p className="py-6">                         Join our photography training program and take your skills to the next level. Our expert instructors will guide you through various techniques and genres, helping you capture stunning photos and unleash your creativity.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ExtraSection;



