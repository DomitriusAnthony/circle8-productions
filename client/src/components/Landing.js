import React from 'react';

import Nav from './Nav';
import CopyAccordian from './CopyAccordian';
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
        <CopyAccordian />
        <ImageGallery />
        <CopyAccordian />
        <Testimonials />
        <ContactForm />
        <Footer />
    </div>
)

export default Landing;