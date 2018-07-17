import React from 'react';

import Nav from './Nav';
import AccordianOne from './AccordianOne';
import AccordianTwo from './AccordianTwo';
import ShowLogos from './ShowLogos';
import VideoBackground from './VideoBackground';
import About from './About';
import ImageGallery from './ImageGallery';
import YoutubeGallery from './YoutubeGallery';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Footer from './Footer';

const Landing = () => (
    <div>
        <Nav />
        <VideoBackground />
        <About />
        <YoutubeGallery />
        <AccordianOne />
        <ImageGallery />
        <AccordianTwo />
        <Testimonials />
        <ContactForm />
        <Footer />
    </div>
)

export default Landing;