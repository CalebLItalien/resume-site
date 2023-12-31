import React, { useState } from 'react';
import { SkillsWrapper, SkillsRatingsWrapper } from '../../styles/Wrappers';
import { SkillsFrame } from '../../styles/Frame';
import { BasicTitle } from '../../styles/Headers';
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

interface SkillsProps {
  windowWidth: number;
}

const Skills: React.FC<SkillsProps> = ({ windowWidth }: SkillsProps): JSX.Element => {
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
      <BasicTitle>Skills</BasicTitle>
      <Underline />
      <SkillsFrame>
        <ButtonWrapper style={SkillsButtonWrapper}>
          <TopSkillsButton
            isSelected={selectedSkill === 'Languages'}
            onClick={() => handleButtonClick('Languages')}
            windowWidth={windowWidth}>
            Languages
          </TopSkillsButton>
          <SkillsButton
            isSelected={selectedSkill === 'Frameworks'} 
            onClick={() => handleButtonClick('Frameworks')}
            windowWidth={windowWidth}>
            Frameworks
          </SkillsButton>
          <BottomSkillsButton
            isSelected={selectedSkill === 'Technologies'} 
            onClick={() => handleButtonClick('Technologies')}
            windowWidth={windowWidth}>
            Technologies
          </BottomSkillsButton>
        </ButtonWrapper>
        <SkillsRatingsWrapper key={selectedSkill}>
          {renderSkillsRatings()}
        </SkillsRatingsWrapper>
      </SkillsFrame>
    </SkillsWrapper>
  );
};

export default Skills;
