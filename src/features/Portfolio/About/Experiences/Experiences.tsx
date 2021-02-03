import React from 'react';

import { EducationContainer, Segment, SegmentTitle } from '../../../../components/styledComponents';

import IExperience from './IExperience';
import { AboutItem } from '../../About';
import Lang from '../../../../components/Lang/Lang';

type PropsType = {
    experiences: IExperience[];
}

const Educations = ({ experiences }: PropsType): JSX.Element => {
    return (
        <AboutItem>
            <SegmentTitle><Lang name="about_experiences" /></SegmentTitle>
            <Segment>
                {experiences.map((experience, index) => (
                    <EducationContainer key={index}>
                        <h1><Lang content={experience.label} /></h1>
                        {experience.subtitle && <p><i><Lang content={experience.subtitle} /></i></p>}
                        <p><Lang content={experience.location} /></p>
                        <p>{experience.date.start} – {experience.date.end}</p>
                    </EducationContainer>
                ))}
            </Segment>
        </AboutItem>
    );
}

export default Educations;