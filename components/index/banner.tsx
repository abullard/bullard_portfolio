import * as React from 'react';
import styled from 'styled-components';
import {PersonalPhoto} from './personalPhoto';

export const Banner = () => {
    return (
        <TextContainer>
            <PersonalPhoto/>
            <div>
                <p>
                    Welcome, delighted to have you here! I’m <b>Austin Bullard</b>, a seasoned software engineer with
                    a BA in computer science from <i>Iowa State University</i>. My journey in software began
                    shortly after starting high school and has turned into a symbiosis of work and play.
                </p>
                <p>
                    Currently, I'm a software consultant at <i>Lean TECHniques</i>, where my dual focus is
                    contributing through others, while maintaining a high throughput of software delivery. I take great
                    pride in coaching both junior and senior developers, navigating them through the intricacies of
                    modern web development practices.
                </p>
                <p>
                    This will always be a brain dump so feel free to read at your leisure. I hope my documentation,
                    grounded in professionalism and driven by light hearted curiosity, adds some brightness to today!
                </p>
            </div>
        </TextContainer>
    )
};

const TextContainer = styled.div`
  display: flex;
  align-content: space-between;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;