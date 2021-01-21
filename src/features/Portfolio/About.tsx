import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { Section } from '../../components/styledComponents';
import Experiences from './About/Experiences/Experiences';
import Personal from './About/Personal/Personal';
import Educations from './About/Educations/Educations';

const AboutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const AboutItem = styled.div`
    width: clamp(300px, 300px, 100%);
`;

const About = () => {
    return (
        <Section>
            <AboutContainer>
                <Personal />
                <Educations />
                <Experiences />
            </AboutContainer>
        </Section>
    );
}

export default About;