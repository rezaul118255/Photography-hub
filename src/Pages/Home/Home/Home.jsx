import React from 'react';
import Banner from '../Banner/Banner.jsx';
import Popula from '../Popular/Popula.jsx';
import ExtraSection from '../ExtraSection/ExtraSection.jsx';
import PopularSection from '../PopularSection/PopularSection.jsx';
import Extra from '../ExtraSection/Extra.jsx';
// import Extra from '../ExtraSection/Marqure.jsx';
import Marqure from '../ExtraSection/Marqure.jsx';
import Featured from '../ExtraSection/Featured.jsx';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra></Extra>
            <Popula></Popula>
            <Marqure></Marqure>

            <ExtraSection></ExtraSection>

            <PopularSection></PopularSection>
            <Featured></Featured>

        </div>
    );
};

export default Home;