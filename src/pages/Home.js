import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

import HeroSection from '../components/Home/HeroSection';
import AboutMe from '../components/Home/AboutSection';
import Services from '../components/Home/Services';
import WorkExperience from '../components/Home/Background';
import ContactMe from '../components/Home/ContactMe';

import Section from '../components/Layout/Section';

function Home() {
  return (
    <>
      <Section id="hero">
        <Navbar />
        <HeroSection />
      </Section>

      <Section id="about">
        <AboutMe />
      </Section>

      <Section id="services">
        <Services />
      </Section>

      <Section id="experience">
        <WorkExperience />
      </Section>

      <Section id="contact">
        <ContactMe />
      </Section>

      <Footer />
    </>
  );
}

export default Home;
