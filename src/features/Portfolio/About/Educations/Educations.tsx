import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';
import { FirebaseDatabaseNode } from '@react-firebase/database';

import { EducationContainer, Segment, SegmentTitle } from '../../../../components/styledComponents';

import IEducation from './IEducation';
import { AboutItem } from '../../About';

type PropsType = {
    educations: IEducation[];
}

const Educations = ({ educations }: PropsType) => {
    return (
        <AboutItem>
            <SegmentTitle>Diplômes</SegmentTitle>
            <Segment>
                {educations.map((education, index) => (
                    <EducationContainer key={index}>
                        <h1>{education.label}</h1>
                        {education.subtitle && <p><i>{education.subtitle}</i></p>}
                        <p>{education.location}</p>
                        <p>{education.date.start} – {education.date.end}</p>
                    </EducationContainer>
                ))}
            </Segment>
        </AboutItem>
    );
}

export default Educations;