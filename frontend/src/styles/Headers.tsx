import styled from 'styled-components';
import { theme } from "../theme";

export const Welcome = styled.h2`
  color: ${theme.colors.LIGHTEST_ORANGE};
  font-size: 2rem; 
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 5vh; 
  min-height: 5vh;

  @media screen and (max-height: 800px) {
    font-size: 1.8rem; 
    margin-top: 3vh; 
  }

  @media screen and (max-height: 600px) {
    font-size: 1.5rem;
    margin-top: 1vh; 
  }

`;

export const MobileWelcome = styled.h2`
  color: ${theme.colors.LIGHTEST_ORANGE};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  margin-top: 1vh;
  min-height: 3vh;
`;

export const ContactMe = styled.h2`
  color: ${theme.colors.LIGHTEST_ORANGE};
  font-size: 1.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 5vh;
  min-height: 5vh;
  margin-left: 5vw;
  width: calc(100% - 10vw);
`;


export const BasicTitle = styled.h1`
  color: ${theme.colors.LIGHTEST_ORANGE};
  position: absolute;
  top: 10vh;
  left: 10vw;
  margin: 0;
`;

export const BasicMobileTitle = styled.h1`
  color: ${theme.colors.LIGHTEST_ORANGE};
  margin-bottom: 2.5vh;
  margin-top: 1vh;
  text-align: left;
  margin-left: 10vw;
  @media screen and (max-height: 900px) {
    margin-bottom: 2vh;
  }
  @media screen and (max-height: 800px) {
    margin-bottom: 1.5vh;
  }
  @media screen and (max-height: 700px) {
    margin-bottom: 0.3vh;
  }
`;