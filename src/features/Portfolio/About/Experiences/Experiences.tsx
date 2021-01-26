import React from 'react';

import { EducationContainer, Segment, SegmentTitle } from '../../../../components/styledComponents';

import IExperience from './IExperience';
import { AboutItem } from '../../About';

type PropsType = {
    experiences: IExperience[];
}

const Educations = ({ experiences }: PropsType): JSX.Element => {
    return (
        <AboutItem>
            <SegmentTitle>Formations</SegmentTitle>
            <Segment>
                {experiences.map((experience, index) => (
                    <EducationContainer key={index}>
                        <h1>{experience.label}</h1>
                        {experience.subtitle && <p><i>{experience.subtitle}</i></p>}
                        <p>{experience.location}</p>
                        <p>{experience.date.start} – {experience.date.end}</p>
                    </EducationContainer>
                ))}
            </Segment>
        </AboutItem>
    );
}

export default Educations;