import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../Blog/Blog';
import Header from '../../Shared/Header/Header';

const Home = () => {
    return (
        <>
            <Header/>
            <Services/>
            <About/>
            <Testimonials/>
            <Blog/>
            <Footer/>
        </>
    );
};

export default Home;