import * as React from 'react';
import styled from 'styled-components';
import { PersonalPhoto } from './personalPhoto';

export const Banner = () => {
    return (
        <>
            <TextContainer>
                <PersonalPhoto />
                <p>
                    Welcome — I’m glad you’re here.
                    <br />
                    <br />
                    I’m <b>Austin Bullard</b>, a software engineer with a BA in Computer Science from Iowa State University. My journey in tech started in high school and quickly turned into a full-blown obsession — equal parts career and playground.
                    <br />
                    <br />
                    Today, I’m a consultant at Lean TECHniques, where I balance a high throughput of delivery with something even more rewarding: coaching. I work closely with devs at all levels, helping them sharpen their craft and navigate the messy, beautiful landscape of modern web development.
                    <br />
                    <br />
                    This space is my digital workshop — a mix of brain dumps, lessons learned, and the occasional half-baked insight. Feel free to poke around. If anything here sparks a thought or makes your day a little brighter, mission accomplished.
                </p>
            </TextContainer>
        </>
    );
};

const TextContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 15px;
`;
