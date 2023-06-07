import React from 'react';
import Banner from '../Banner/Banner.jsx';
import Popula from '../Popular/Popula.jsx';
import ExtraSection from '../ExtraSection/ExtraSection.jsx';
import PopularSection from '../PopularSection/PopularSection.jsx';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popula></Popula>
            <ExtraSection></ExtraSection>
            <PopularSection></PopularSection>
            <h1>this is home page</h1>
        </div>
    );
};

export default Home;