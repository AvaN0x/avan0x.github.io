import React from 'react';
import styled from '@emotion/styled';

import { FirebaseDatabaseNode } from '@react-firebase/database';
import { Section } from '../../components/styledComponents';

import IAbout from './About/IAbout';
import Personal from './About/Personal/Personal';
import Experiences from './About/Experiences/Experiences';
import Educations from './About/Educations/Educations';
import Languages from './About/Languages/Languages';
import Qualities from './About/Qualities/Qualities';
import Techs from './About/Techs/Techs';

const AboutContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const AboutItem = styled.div`
    width: clamp(500px, 500px, 100%);
`;

const AboutContainer = ({ about }: { about: IAbout }) => {
    return (
        <AboutContainerStyle>
            <Personal personal={about.personal} />
            <Educations educations={about.educations} />
            <Experiences experiences={about.experiences} />
            <Techs techs={about.techs} />
            <Languages languages={about.languages} />
            <Qualities qualities={about.qualities} />
        </AboutContainerStyle>
    );
}

const About = (): JSX.Element => {
    return (
        <Section>
            <FirebaseDatabaseNode
                path="/about/"
                orderByKey
            >
                {data => !data.isLoading && data.value &&
                    <AboutContainer about={data.value} />
                }
            </FirebaseDatabaseNode>
        </Section>
    );
}

export default About;