import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;