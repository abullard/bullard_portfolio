import * as React from 'react';
import styled from 'styled-components';

export const Resume = () => {
    return (
        <ResumeContainer src={'../resume.png'} alt={'my resume'} />
    );
};

const ResumeContainer = styled.img`
  min-height: 100%;
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
`;
