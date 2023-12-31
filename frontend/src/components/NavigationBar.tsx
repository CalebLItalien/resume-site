import React,{ useRef, useEffect, useState } from "react";
import { NavBarWrapper } from "../styles/Wrappers";
import { StyledNav, StyledAnchorLink } from "../styles/Anchors";
import menuIcon from '../assets/utils/menu2.png';
import styled from 'styled-components';
import { MOBILE_THRESHOLD } from '../constants';
import { theme } from "../theme";

const Hamburger = styled.img`
  height: 32px;
  width: auto;
  margin: 1vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-height: 550px) {
    height: 26px;
  }
`;

const StyledMobileNav = styled.nav`
  position: absolute;
  right: 1vw;
  top: 0;
`;

const DropdownContainer = styled.div`
  position: absolute;
  right: 0;
  margin-top: 1vh;
  top: 100%; 
  background: ${theme.colors.DARK_BLUE}; 
  border: 1px solid;
  border-radius: ${theme.borderRadius};
  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.4); 
  width: 200px; 
  z-index: 1000;
`;


interface NavigationBarProps {
  onHeightChange: (height: number) => void;
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
  windowWidth: number;
  windowHeight: number;
}

export function NavigationBar({ onHeightChange, 
                                scrollToSection, 
                                activeSection, 
                                windowWidth, 
                                windowHeight}
                                : NavigationBarProps): JSX.Element {
  const navBarRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateNavBarHeight = () => {
      if (navBarRef.current) {
        const newHeight = navBarRef.current.offsetHeight;
        onHeightChange(newHeight); 
      }
    };
    updateNavBarHeight();
    window.addEventListener('resize', updateNavBarHeight);

    return () => window.removeEventListener('resize', updateNavBarHeight);
  }, [onHeightChange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);


  const renderLinks = () => ( 
    <>
      <StyledAnchorLink windowHeight={windowHeight}
                        onClick={() => scrollToSection('home')}
                        className={activeSection === 'home' ? 'active' : ''}>
        Home
      </StyledAnchorLink>
      <StyledAnchorLink windowHeight={windowHeight}
                        onClick={() => scrollToSection('experience')}
                        className={activeSection === 'experience' ? 'active' : ''}>
        Experience
      </StyledAnchorLink>
      <StyledAnchorLink windowHeight={windowHeight}
                        onClick={() => scrollToSection('skills')}
                        className={activeSection === 'skills' ? 'active' : ''}>
        Skills
      </StyledAnchorLink>
      <StyledAnchorLink windowHeight={windowHeight}
                        onClick={() => scrollToSection('projects')}
                        className={activeSection === 'projects' ? 'active' : ''}>
        Projects
      </StyledAnchorLink>
      <StyledAnchorLink windowHeight={windowHeight}
                        onClick={() => scrollToSection('contact')}
                        className={activeSection === 'contact' ? 'active' : ''}>
        Contact
      </StyledAnchorLink>
    </>
  )

  const renderHamburgerMenu = () => (
    <div>
      <div onClick={toggleMenu}>
        <Hamburger src={menuIcon} alt="Menu" />
      </div>
      {isMenuOpen && (
        <DropdownContainer ref={dropdownRef}>
          {renderLinks()}
        </DropdownContainer>
      )}
    </div>
  );
  
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <NavBarWrapper ref={navBarRef}>
      {windowWidth <= MOBILE_THRESHOLD ? (
        <StyledMobileNav>
          {renderHamburgerMenu()}
        </StyledMobileNav>
      ) : (
        <StyledNav>
          {renderLinks()}
        </StyledNav>
      )}
    </NavBarWrapper>
  );
}
