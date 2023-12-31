import styled from 'styled-components';
import { theme } from "../theme";
import { HOME_THRESHOLD, MOBILE_THRESHOLD } from '../constants';

export const CompanyImage = styled.img`
  height: 100px;
  position: relative;
  margin-top: 30vh;
  
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  @media (max-width: 600px) {
    height: 70px;
  })
  @media (max-height: ${MOBILE_THRESHOLD}px) {
    height: 60px;
  }
  @media (max-height: 650px) {
    height: 40px;
    margin-top: 32vh;
  }
`;

export const HeadShotImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
  border-radius: ${theme.borderRadius};
  object-fit: cover;
  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.4); 
  margin-bottom: 10vh;
  transition: box-shadow 0.3s ease;
  align-self: flex-end;
  margin-right: -5vw;

  &:hover {
    box-shadow: none;
  }
  @media screen and (min-width: 1000px) and (max-width: ${HOME_THRESHOLD}px) {
    width: 70%; 
    max-width: 70%; 
    margin-right: 3vw;
    }
  }
  @media screen and (max-height: 910px) {
    width: 50%;
    max-width: 50%;
    margin-right: 5vw;
  }
`;

export const MobileHeadShotImage = styled.img`
  height: auto;
  width: 35vw;
  border-radius: ${theme.borderRadius};
  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.4); 
  transition: box-shadow 0.3s ease;
  align-self: center;
  &:hover {
    box-shadow: none;
  }
  margin-top: 2vh;
  @media screen and (max-height: 800px) {
    width: 22vw;
  }
`;

export const PDFImage = styled.img`
  height: 43vh;
  display: block;
  cursor: pointer;
  margin: 0;

  @media screen and (max-width: 1050px) {
    margin-top: 15vh;
    height: 20vh;
  }
  @media screen and (min-width: 1051px) and (max-width: 1500px) {
    height: 30vh;
    margin-top: 15vh;
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10; 
`;

type GithbuProjectsProps = {
  windowWidth: number;
}
export const GithubProject = styled.img<GithbuProjectsProps>`
  cursor: pointer;
  width: 63px;
  height: 63px;
  margin-top: ${props => {
    const dynamicMargin = props.windowWidth < MOBILE_THRESHOLD ? '28vh' : '70vh';
    return dynamicMargin;
  }};  
  margin-left: 10vw;
  transition: transform 0.3s ease;
  @media screen and (max-width: 768px) {
    margin-left: -7vw;
    width: 53px;
    height: 53px;
  }
  @media screen and (max-height: 650px) {
    margin-top: 75vh;
  }
  ::before {
    content: attr(data-tooltip); 
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8); 
    color: white; 
    padding: 4px 8px; 
    border-radius: 4px;
    top: 100%; 
    left: 50%;
    transform: translateX(-50%) translateY(10px); 
    opacity: 0; 
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;  
    white-space: nowrap;  
  }
  &:hover {
    transform: scale(1.1);
  }

  &:hover::before {
    opacity: 1;
  }
`;
