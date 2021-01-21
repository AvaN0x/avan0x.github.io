import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { Section } from '../../components/styledComponents';
import Experiences from './About/Experiences';
import Personal from './About/Personal';
import Educations from './About/Educations';

const About = () => {
    return (
        <Section>
            <Personal />
            <Educations />
            <Experiences />
        </Section>
    );
}

export default About;