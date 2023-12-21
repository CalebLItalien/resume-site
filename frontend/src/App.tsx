import { useState, useEffect } from 'react';
import styled from "styled-components";
import { NavigationBar } from "./components/NavigationBar";
import Home  from "./components/sections/Home";
import Resume from "./components/sections/Resume";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
// import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import { CenteredSection, LeftToRightSection, StandardSection } from "./styles/Wrappers";

const AppWrapper = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export function App() {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const monitorScroll = () => {
    const sections = ['home', 'experience', 'skills', 'projects', 'resume', 'contact'];
    const offsets = sections.map(id => {
      const element = document.getElementById(id);
      if (element) return window.scrollY + element.getBoundingClientRect().top
      return null;
    });
    const activeIndex = offsets.findIndex((offset, index) => {
      if (offset !== null) {
        return window.scrollY >= offset && window.scrollY < (offsets[index + 1] || Infinity);
      }
      return false;
    });
    const newActiveSection = (window.scrollY < 50) ? 'home' : sections[activeIndex] || '';
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', monitorScroll);
    return () => {
      window.removeEventListener('scroll', monitorScroll);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navBarHeight,
        behavior: 'smooth'
      });
    }
  };
  return (
    <AppWrapper>
      <NavigationBar onHeightChange={setNavBarHeight} 
                     scrollToSection={scrollToSection}
                     activeSection={activeSection}/>
      <LeftToRightSection id="home">
        <Home/>
      </LeftToRightSection>
      <StandardSection id="experience">
        <Experience/>
      </StandardSection>
      <StandardSection id="skills">
        <Skills/>
      </StandardSection>
      <StandardSection id="projects">
        <Projects/>
      </StandardSection>
      <CenteredSection id="resume">
        <Resume/>
      </CenteredSection>
      {/* <CenteredSection id="certifications">
        <Certifications/>
      </CenteredSection> */}
      <CenteredSection id="contact">
        <Contact/>
      </CenteredSection>
      
    </AppWrapper>
  );
}
