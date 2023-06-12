import React from 'react';
import Banner from '../Banner/Banner.jsx';
import Popula from '../Popular/Popula.jsx';
import ExtraSection from '../ExtraSection/ExtraSection.jsx';
import PopularSection from '../PopularSection/PopularSection.jsx';
import Extra from '../ExtraSection/Extra.jsx';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra></Extra>
            <Popula></Popula>

            <ExtraSection></ExtraSection>

            <PopularSection></PopularSection>

        </div>
    );
};

export default Home;