import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import Experiences from '../../features/Portfolio/Experiences';
import { Section } from '../../components/styledComponents';

const About = () => {
    return (
        <Section>
            <Experiences />
        </Section>
    );
}

export default About;