import React, { useState } from 'react';
import { SkillsWrapper, SkillsRatingsWrapper } from '../../styles/Wrappers';
import { RoundedRectangle } from '../../styles/Frame';
import { Title } from '../../styles/Title';
import { Underline } from '../../styles/Underline';
import { ButtonWrapper, 
        SkillsButtonWrapper, 
        TopSkillsButton, 
        BottomSkillsButton,
        SkillsButton, } from '../../styles/Button';
import { useFrameworksLibraries } from '../../hooks/useFrameworksLibraries';
import { useLanguages } from '../../hooks/useLanguages';
import { useTechnologies } from '../../hooks/useTechnologies';
import SkillsRatings from '../SkillsRatings';

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('Languages');

  const handleButtonClick = (skill: string) => {
    setSelectedSkill(skill);
  };

  const renderSkillsRatings = () => {
    switch (selectedSkill) {
      case 'Languages':
        return <SkillsRatings getSkillsHook={useLanguages} />;
      case 'Frameworks':
        return <SkillsRatings getSkillsHook={useFrameworksLibraries}/>;
      case 'Technologies':
        return <SkillsRatings getSkillsHook={useTechnologies}/>;
      default:
        return <SkillsRatings getSkillsHook={useLanguages} />;
    }
  }
  return (
    <SkillsWrapper>
      <Title>Skills</Title>
      <Underline />
      <RoundedRectangle>
        <ButtonWrapper style={SkillsButtonWrapper}>
          <button style={TopSkillsButton} 
            onClick={() => handleButtonClick('Languages')}>
            Languages
          </button>
          <button style={SkillsButton} 
            onClick={() => handleButtonClick('Frameworks')}>
            Frameworks
          </button>
          <button style={BottomSkillsButton} 
            onClick={() => handleButtonClick('Technologies')}>
            Technologies
          </button>
        </ButtonWrapper>
        <SkillsRatingsWrapper key={selectedSkill}>
          {renderSkillsRatings()}
        </SkillsRatingsWrapper>
      </RoundedRectangle>
    </SkillsWrapper>
  );
};

export default Skills;