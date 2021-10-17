import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from './../Banner/Banner';
import Serveses from './../Serveses/Serveses';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Serveses></Serveses>
            <Footer></Footer>

        </div>
    );
};

export default Home;